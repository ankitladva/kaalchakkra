import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('@/components/sections/Hero', () => ({
  __esModule: true,
  default: () => <div data-testid="hero">Hero Section</div>,
}))

jest.mock('@/components/sections/About', () => ({
  __esModule: true,
  default: () => <section id="about">About Section</section>,
}))

jest.mock('@/components/sections/SignatureWorks', () => ({
  __esModule: true,
  default: () => <section id="portfolio">Portfolio Section</section>,
}))

jest.mock('@/components/sections/HealedWork', () => ({
  __esModule: true,
  default: () => <section id="healed">Healed Work Section</section>,
}))

jest.mock('@/components/sections/ArtistBio', () => ({
  __esModule: true,
  default: () => <section id="artist">Artist Section</section>,
}))

jest.mock('@/components/sections/Hygiene', () => ({
  __esModule: true,
  default: () => <section>Hygiene Section</section>,
}))

jest.mock('@/components/sections/Testimonials', () => ({
  __esModule: true,
  default: () => <section id="reviews">Testimonials Section</section>,
}))

jest.mock('@/components/sections/Booking', () => ({
  __esModule: true,
  default: () => <section>Booking Section</section>,
}))

jest.mock('@/components/sections/Contact', () => ({
  __esModule: true,
  default: () => <section id="contact">Contact Section</section>,
}))

describe('Home Page Integration', () => {
  it('should render all sections', () => {
    render(<Home />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByText('About Section')).toBeInTheDocument()
    expect(screen.getByText('Portfolio Section')).toBeInTheDocument()
    expect(screen.getByText('Healed Work Section')).toBeInTheDocument()
    expect(screen.getByText('Artist Section')).toBeInTheDocument()
    expect(screen.getByText('Hygiene Section')).toBeInTheDocument()
    expect(screen.getByText('Testimonials Section')).toBeInTheDocument()
    expect(screen.getByText('Booking Section')).toBeInTheDocument()
    expect(screen.getByText('Contact Section')).toBeInTheDocument()
  })

  it('should have sections with correct IDs for navigation', () => {
    render(<Home />)
    expect(document.getElementById('about')).toBeInTheDocument()
    expect(document.getElementById('portfolio')).toBeInTheDocument()
    expect(document.getElementById('healed')).toBeInTheDocument()
    expect(document.getElementById('artist')).toBeInTheDocument()
    expect(document.getElementById('reviews')).toBeInTheDocument()
    expect(document.getElementById('contact')).toBeInTheDocument()
  })
})

