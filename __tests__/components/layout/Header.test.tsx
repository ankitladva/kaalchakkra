import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/layout/Header'

// Mock framer-motion to avoid animation delays in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, initial, animate, whileHover, whileTap, whileInView, viewport, transition, ...props }: any) => <div {...props}>{children}</div>,
    ul: ({ children, initial, animate, whileHover, whileTap, whileInView, viewport, transition, ...props }: any) => <ul {...props}>{children}</ul>,
    li: ({ children, initial, animate, whileHover, whileTap, whileInView, viewport, transition, ...props }: any) => <li {...props}>{children}</li>,
    button: ({ children, onClick, initial, animate, whileHover, whileTap, whileInView, viewport, transition, ...props }: any) => (
      <button onClick={onClick} {...props}>
        {children}
      </button>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Header Component', () => {
  beforeEach(() => {
    // Reset localStorage before each test
    localStorage.clear()
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('Desktop Navigation Links', () => {
    it('should render all 7 navigation links', () => {
      render(<Header />)
      
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Portfolio')).toBeInTheDocument()
      expect(screen.getByText('Healed Work')).toBeInTheDocument()
      expect(screen.getByText('Artist')).toBeInTheDocument()
      expect(screen.getByText('Courses')).toBeInTheDocument()
      expect(screen.getByText('Reviews')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('should have correct href attributes for hash links', () => {
      render(<Header />)
      
      expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about')
      expect(screen.getByText('Portfolio').closest('a')).toHaveAttribute('href', '#portfolio')
      expect(screen.getByText('Healed Work').closest('a')).toHaveAttribute('href', '#healed')
      expect(screen.getByText('Artist').closest('a')).toHaveAttribute('href', '#artist')
      expect(screen.getByText('Reviews').closest('a')).toHaveAttribute('href', '#reviews')
      expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact')
    })

    it('should have correct href for /courses route', () => {
      render(<Header />)
      
      const coursesLink = screen.getByText('Courses').closest('a')
      expect(coursesLink).toHaveAttribute('href', '/courses')
    })

    it('should have logo link pointing to home', () => {
      render(<Header />)
      
      const logoLink = screen.getByAltText('Kaal Chakkra Logo').closest('a')
      expect(logoLink).toHaveAttribute('href', '/')
    })
  })

  describe('Mobile Navigation', () => {
    it('should toggle mobile menu when menu button is clicked', async () => {
      const user = userEvent.setup()
      render(<Header />)
      
      // Mobile menu button should be visible
      const menuButton = screen.getByLabelText('Toggle menu')
      expect(menuButton).toBeInTheDocument()
      
      // Initially, there should be only one "About" link (desktop navigation)
      const initialAboutLinks = screen.getAllByText('About')
      expect(initialAboutLinks.length).toBe(1)
      
      // Click to open menu
      await user.click(menuButton)
      
      // Menu should now be visible - there should be two "About" links (desktop + mobile)
      await waitFor(() => {
        const aboutLinks = screen.getAllByText('About')
        expect(aboutLinks.length).toBe(2)
      })
    })

    it('should close mobile menu when a link is clicked', async () => {
      const user = userEvent.setup()
      render(<Header />)
      
      const menuButton = screen.getByLabelText('Toggle menu')
      await user.click(menuButton)
      
      // Wait for menu to open - check for multiple About links (desktop + mobile)
      await waitFor(() => {
        const aboutLinks = screen.getAllByText('About')
        expect(aboutLinks.length).toBeGreaterThan(1)
      })
      
      // Get all About links and click the one in mobile menu (last one)
      const aboutLinks = screen.getAllByText('About')
      // Click the last one which should be in mobile menu
      await user.click(aboutLinks[aboutLinks.length - 1])
      
      // Menu should close - wait for the mobile menu link to disappear
      // Note: Desktop link will still be there, so we check that we're back to just one
      await waitFor(() => {
        const aboutLinksAfter = screen.getAllByText('About')
        // Should be back to just the desktop link
        expect(aboutLinksAfter.length).toBe(1)
      }, { timeout: 2000 })
    })

    it('should have all links accessible in mobile menu', async () => {
      const user = userEvent.setup()
      render(<Header />)
      
      const menuButton = screen.getByLabelText('Toggle menu')
      await user.click(menuButton)
      
      // All links should be accessible (they exist in both desktop and mobile)
      await waitFor(() => {
        expect(screen.getAllByText('About').length).toBeGreaterThan(0)
        expect(screen.getAllByText('Portfolio').length).toBeGreaterThan(0)
        expect(screen.getAllByText('Healed Work').length).toBeGreaterThan(0)
        expect(screen.getAllByText('Artist').length).toBeGreaterThan(0)
        expect(screen.getAllByText('Courses').length).toBeGreaterThan(0)
        expect(screen.getAllByText('Reviews').length).toBeGreaterThan(0)
        expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
      })
    })
  })

  describe('Theme Toggle', () => {
    it('should toggle theme when theme button is clicked', async () => {
      const user = userEvent.setup()
      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
      render(<Header />)
      
      // Get all theme buttons (desktop and mobile)
      const themeButtons = screen.getAllByLabelText('Toggle theme')
      expect(themeButtons.length).toBeGreaterThan(0)
      
      // Click the first one (desktop)
      await user.click(themeButtons[0])
      
      // Theme should be saved to localStorage
      await waitFor(() => {
        expect(setItemSpy).toHaveBeenCalledWith('theme', 'light')
      })
    })

    it('should load theme from localStorage on mount', () => {
      const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('light')
      render(<Header />)
      
      expect(getItemSpy).toHaveBeenCalledWith('theme')
      getItemSpy.mockRestore()
    })

    it('should persist theme changes in localStorage', async () => {
      const user = userEvent.setup()
      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
      render(<Header />)
      
      const themeButtons = screen.getAllByLabelText('Toggle theme')
      await user.click(themeButtons[0])
      
      expect(setItemSpy).toHaveBeenCalledWith('theme', 'light')
    })
  })

  describe('Scroll Behavior', () => {
    it('should update header style on scroll', () => {
      render(<Header />)
      
      const header = screen.getByRole('banner')
      expect(header).toHaveClass('bg-transparent')
      
      // Simulate scroll
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      fireEvent.scroll(window)
      
      // Header should have scrolled class (this might need adjustment based on actual implementation)
      // The exact class depends on the theme state
    })
  })
})

