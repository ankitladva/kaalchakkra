import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock video play before importing components
const mockPlay = jest.fn().mockResolvedValue(undefined)
const mockAddEventListener = jest.fn()
const mockRemoveEventListener = jest.fn()

beforeAll(() => {
  jest.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(mockPlay)
  jest.spyOn(HTMLMediaElement.prototype, 'addEventListener').mockImplementation(mockAddEventListener)
  jest.spyOn(HTMLMediaElement.prototype, 'removeEventListener').mockImplementation(mockRemoveEventListener)
  Object.defineProperty(HTMLMediaElement.prototype, 'loop', { writable: true, value: false, configurable: true })
  Object.defineProperty(HTMLMediaElement.prototype, 'currentTime', { writable: true, value: 0, configurable: true })
  Object.defineProperty(HTMLMediaElement.prototype, 'duration', { writable: true, value: 10, configurable: true })
})

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, initial, animate, whileInView, viewport, transition, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, initial, animate, whileInView, viewport, transition, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, initial, animate, whileInView, viewport, transition, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, initial, animate, whileInView, viewport, transition, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, initial, animate, whileInView, viewport, transition, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

jest.mock('@/components/ui/Button', () => ({
  __esModule: true,
  default: ({ children, href, whatsapp, onClick, ...props }: any) => {
    if (href || whatsapp) {
      return (
        <a href={href || (whatsapp ? 'https://wa.me/919326077117' : '#')} {...props}>
          {children}
        </a>
      )
    }
    return <button onClick={onClick} {...props}>{children}</button>
  },
}))

import Hero from '@/components/sections/Hero'
import Contact from '@/components/sections/Contact'
import Button from '@/components/ui/Button'

describe('Hero Video Tests', () => {
  beforeEach(() => {
    mockPlay.mockClear()
    mockAddEventListener.mockClear()
  })
  it('should render video with correct attributes', () => {
    render(<Hero />)
    const video = document.querySelector('video')
    expect(video).toHaveAttribute('autoPlay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('preload', 'auto')
  })
  it('should call play on mount', async () => {
    render(<Hero />)
    await waitFor(() => expect(mockPlay).toHaveBeenCalled())
  })
})

describe('Hero Links', () => {
  it('should have Book Now WhatsApp link', () => {
    render(<Hero />)
    const link = screen.getByText('Book Now').closest('a')
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })
  it('should have View Portfolio link', () => {
    render(<Hero />)
    const link = screen.getByText('View Portfolio').closest('a')
    expect(link).toHaveAttribute('href', '#portfolio')
  })
})

describe('Contact Links', () => {
  it('should have WhatsApp button', () => {
    render(<Contact />)
    const link = screen.getByText('WhatsApp Us').closest('a')
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })
  it('should have social media links', () => {
    render(<Contact />)
    const instagramLinks = screen.getAllByLabelText('Instagram')
    expect(instagramLinks.length).toBe(1)
    // expect(instagramLinks[0]).toHaveAttribute('href', 'https://www.instagram.com/kaal_chakkra_tattoo')
    expect(instagramLinks[1]).toHaveAttribute('href', 'https://www.instagram.com/sumit.tank.857')
  })
})

describe('Button Component', () => {
  it('should render as link when whatsapp=true', () => {
    render(<Button whatsapp>Test</Button>)
    const link = screen.getByText('Test').closest('a')
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })
  it('should not nest anchors', () => {
    const { container } = render(<Button whatsapp>Test</Button>)
    expect(container.querySelectorAll('a').length).toBe(1)
  })
})
