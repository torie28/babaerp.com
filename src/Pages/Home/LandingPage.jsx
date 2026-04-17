import { useState, useEffect } from 'react'
import SEO from '../../components/SEO.jsx'
import Footer from '../footer/Footer.jsx'
import BabaERPLogo from '../../assets/images/BabaERP.png'

function LandingPage() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeTab, setActiveTab] = useState('overview')
    const [formErrors, setFormErrors] = useState({})
    const [showPopup, setShowPopup] = useState(false)
    const [activeSection, setActiveSection] = useState('overview')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Track active section for navigation highlighting
            const sections = ['overview', 'features', 'erp-consultation', 'industries']
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const elementTop = rect.top + window.scrollY - headerHeight
                    const elementBottom = elementTop + element.offsetHeight

                    if (window.scrollY >= elementTop - 100 && window.scrollY < elementBottom - 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        // Close mobile menu when clicking outside
        const handleClickOutside = (event) => {
            const nav = document.querySelector('.nav')
            const menuToggle = document.querySelector('.mobile-menu-toggle')

            if (isMobileMenuOpen && nav && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
                setIsMobileMenuOpen(false)
            }
        }

        // Handle touch events for mobile interactions
        const handleTouchStart = (e) => {
            const target = e.target.closest('.overview-item, .feature-card, .industry-item, .stat-card')
            if (target) {
                target.style.transform = 'scale(0.98)'
            }
        }

        const handleTouchEnd = (e) => {
            const target = e.target.closest('.overview-item, .feature-card, .industry-item, .stat-card')
            if (target) {
                setTimeout(() => {
                    target.style.transform = ''
                }, 150)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleTouchStart, { passive: true })
        document.addEventListener('touchend', handleTouchEnd, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleTouchStart)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [isMobileMenuOpen])

    const validateForm = () => {
        const errors = {}

        // Get form values
        const nameField = document.querySelector('input[placeholder="Your Name"]');
        const emailField = document.querySelector('input[type="email"]');
        const phoneField = document.querySelector('input[type="tel"]');
        const companyNameField = document.querySelector('input[placeholder="Company Name"]');

        const name = nameField?.value?.trim() || '';
        const email = emailField?.value?.trim() || '';
        const phone = phoneField?.value?.trim() || '';
        const companyName = companyNameField?.value?.trim() || '';

        // Validation
        if (!name) {
            errors.name = 'Please enter your name';
        }

        if (!email) {
            errors.email = 'Please enter your email address';
        } else {
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.email = 'Please enter a valid email address';
            }
        }

        if (!phone) {
            errors.phone = 'Please enter your phone number';
        }

        if (!companyName) {
            errors.companyName = 'Please enter your company name';
        }

        // Get selected modules
        const checkboxes = document.querySelectorAll('.module-checkbox input[type="checkbox"]:checked');
        const selectedModules = Array.from(checkboxes).map(cb => cb.value);

        // Check if at least one module is selected or custom requirements provided
        const customRequirements = document.querySelector('.custom-modules textarea')?.value?.trim() || '';
        if (selectedModules.length === 0 && !customRequirements) {
            errors.modules = 'Please select at least one module or provide custom requirements';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const clearErrors = () => {
        setFormErrors({});
    }

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
            <SEO />
            <div className="erp-landing">
                {/* Header */}
                <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
                    <div className="container">
                        <div className="header-content">
                            <div className="logo">
                                <a href="#overview" onClick={(e) => handleSmoothScroll(e, 'overview')} className="logo-link">
                                    <img src={BabaERPLogo} alt="BabaERP" className="logo-image" />
                                </a>
                            </div>
                            <button
                                className="mobile-menu-toggle"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle mobile menu"
                            >
                                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                                <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                            </button>
                            <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`} role="navigation" aria-label="Main navigation">
                                <a
                                    href="#overview"
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'overview')
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className={activeSection === 'overview' ? 'active-section' : ''}
                                >
                                    Overview
                                </a>
                                <a
                                    href="#features"
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'features')
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className={activeSection === 'features' ? 'active-section' : ''}
                                >
                                    Features
                                </a>
                                <a
                                    href="#erp-consultation"
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'erp-consultation')
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className={activeSection === 'erp-consultation' ? 'active-section' : ''}
                                >
                                    Consultation
                                </a>
                                <a
                                    href="#industries"
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'industries')
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className={activeSection === 'industries' ? 'active-section' : ''}
                                >
                                    Industries
                                </a>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="hero" role="main">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h2 className="hero-title">Enterprise Resource Planning</h2>
                                <p className="hero-subtitle">
                                    Transform your business with our comprehensive ERP solution. Streamline operations,
                                    increase efficiency, and drive growth with integrated business management.
                                </p>
                                <div className="hero-buttons">
                                    {/* <button className="btn-primary">Request Demo</button> */}
                                    <button className="btn-secondary">Watch Video</button>
                                </div>
                            </div>
                            <div className="hero-visual">
                                <div className="dashboard-preview">
                                    <div className="dashboard-header">
                                        <div className="dashboard-nav">
                                            <div className="nav-item active">Dashboard</div>
                                            <div className="nav-item">Analytics</div>
                                            <div className="nav-item">Reports</div>
                                        </div>
                                    </div>
                                    <div className="dashboard-content">
                                        <div className="stat-card">
                                            <div className="stat-number">$2.4M</div>
                                            <div className="stat-label">Total Revenue</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-number">1,247</div>
                                            <div className="stat-label">Active Users</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-number">98.5%</div>
                                            <div className="stat-label">Efficiency</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section id="overview" className="overview">
                    <div className="container">
                        <h2 className="section-title">Complete Business Management Solution</h2>
                        <p className="section-subtitle">
                            Our ERP system integrates all aspects of your business operations into one unified platform
                        </p>

                        <div className="tab-navigation">
                            <button
                                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
                                onClick={() => setActiveTab('benefits')}
                            >
                                Benefits
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'implementation' ? 'active' : ''}`}
                                onClick={() => setActiveTab('implementation')}
                            >
                                Implementation
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'overview' && (
                                <div className="tab-pane">
                                    <div className="overview-grid">
                                        <div className="overview-item">
                                            <h3>Real-time Analytics</h3>
                                            <p>Make informed decisions with live data insights and customizable reports</p>
                                        </div>
                                        <div className="overview-item">
                                            <h3>Process Automation</h3>
                                            <p>Automate repetitive tasks and streamline workflow processes</p>
                                        </div>
                                        <div className="overview-item">
                                            <h3>Cloud-Based</h3>
                                            <p>Access your business data from anywhere, anytime with secure cloud infrastructure</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'benefits' && (
                                <div className="tab-pane">
                                    <div className="benefits-list">
                                        <div className="benefit-item">
                                            <h4>30% Increase in Productivity</h4>
                                            <p>Streamline operations and eliminate redundant tasks</p>
                                        </div>
                                        <div className="benefit-item">
                                            <h4>40% Reduction in Costs</h4>
                                            <p>Optimize resource allocation and reduce operational expenses</p>
                                        </div>
                                        <div className="benefit-item">
                                            <h4>99.9% Uptime Guarantee</h4>
                                            <p>Reliable service with 24/7 monitoring and support</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'implementation' && (
                                <div className="tab-pane">
                                    <div className="implementation-steps">
                                        <div className="step">
                                            <div className="step-number">1</div>
                                            <h4>Discovery & Planning</h4>
                                            <p>Analysis of business requirements and system design</p>
                                        </div>
                                        <div className="step">
                                            <div className="step-number">2</div>
                                            <h4>Configuration</h4>
                                            <p>System setup and customization to your needs</p>
                                        </div>
                                        <div className="step">
                                            <div className="step-number">3</div>
                                            <h4>Training & Deployment</h4>
                                            <p>Staff training and go-live support</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features">
                    <div className="container">
                        <h2 className="section-title">Powerful Features</h2>
                        <p className="section-subtitle">
                            Everything you need to manage your business efficiently
                        </p>

                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Financial Management</h3>
                                <p>Complete accounting, budgeting, and financial reporting</p>
                                <ul>
                                    <li>General Ledger</li>
                                    <li>Accounts Payable/Receivable</li>
                                    <li>Financial Reporting</li>
                                    <li>Budget Management</li>
                                </ul>
                            </div>
                            <div className="feature-card">
                                <h3>Inventory Management</h3>
                                <p>Real-time inventory tracking and optimization</p>
                                <ul>
                                    <li>Stock Management</li>
                                    <li>Warehouse Management</li>
                                    <li>Supply Chain</li>
                                    <li>Quality Control</li>
                                </ul>
                            </div>

                            <div className="feature-card">
                                <h3>Sales & CRM</h3>
                                <p>Manage customer relationships and sales pipeline</p>
                                <ul>
                                    <li>Lead Management</li>
                                    <li>Sales Analytics</li>
                                    <li>Customer Support</li>
                                    <li>Order Processing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Serving Diverse Industries Section */}
                <section id="industries" className="serving-industries">
                    <div className="container">
                        <div className="section-header">
                            <div className="industry-tag">Industry Expertise</div>
                            <h2 className="section-title">Serving Diverse Industries</h2>
                            <p className="section-subtitle">
                                Our solutions are trusted by businesses across multiple sectors in Kerala and beyond, serving clients globally.
                            </p>
                        </div>

                        <div className="industries-grid-new">
                            <div className="industry-item">
                                <div className="industry-icon-wrapper red">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 21h18M3 10h18M3 7l9-4 9 4M9 21v-11M15 21v-11" />
                                    </svg>
                                </div>
                                <span className="industry-label">Supermarkets</span>
                            </div>

                            <div className="industry-item">
                                <div className="industry-icon-wrapper orange">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a2 2 0 00-2-2h-1v0" />
                                        <path d="M21 15v0a2 2 0 01-2 2h-1v0M3 15h18" />
                                    </svg>
                                </div>
                                <span className="industry-label">Restaurants</span>
                            </div>
                            <div className="industry-item">
                                <div className="industry-icon-wrapper green">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <path d="M3 9h18M9 21V9" />
                                    </svg>
                                </div>
                                <span className="industry-label">Finance & Accounting</span>
                            </div>
                            <div className="industry-item">
                                <div className="industry-icon-wrapper grey">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <span className="industry-label">Workshops</span>
                            </div>
                            <div className="industry-item">
                                <div className="industry-icon-wrapper blue">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                                    </svg>
                                </div>
                                <span className="industry-label">Sales and Parcheses</span>
                            </div>
                            <div className="industry-item">
                                <div className="industry-icon-wrapper purple">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2" />
                                        <path d="M8 21h8M12 17v4" />
                                    </svg>
                                </div>
                                <span className="industry-label">Auto-parts Shops</span>
                            </div>
                            <div className="industry-item">
                                <div className="industry-icon-wrapper light-green">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 3v18h18" />
                                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                                    </svg>
                                </div>
                                <span className="industry-label">Reports & Analytics</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ERP System & Consultation Section */}
                <section id="erp-consultation" className="erp-consultation">
                    <div className="container">
                        <h2 className="section-title">How Our ERP System Works</h2>
                        <p className="section-subtitle">
                            Discover our streamlined approach to transforming your business operations
                        </p>

                        <div className="erp-workflow">
                            <div className="workflow-steps">
                                <div className="step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h3>Discovery & Analysis</h3>
                                        <p>We analyze your current business processes and identify areas for improvement</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h3>Custom Module Selection</h3>
                                        <p>Choose from our comprehensive module library tailored to your industry needs</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h3>Implementation & Training</h3>
                                        <p>Seamless deployment with comprehensive team training and support</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h3>Ongoing Optimization</h3>
                                        <p>Continuous monitoring and optimization to ensure maximum efficiency</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="consultation-form-section">
                            <div className="form-intro">
                                <h3>Select Your Interest Modules</h3>
                                <p>Choose the ERP modules that best fit your business needs. We'll help you customize the perfect solution.</p>
                            </div>

                            <div className="module-form-container">
                                <div className="modules-section">
                                    <h4>Select Your Interest Modules</h4>
                                    <div className="modules-grid">
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="inventory" onChange={clearErrors} />
                                            <span>Inventory Management</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="accounting" onChange={clearErrors} />
                                            <span>Accounting & Finance</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="hr" onChange={clearErrors} />
                                            <span>Human Resources</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="crm" onChange={clearErrors} />
                                            <span>Customer Relations</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="procurement" onChange={clearErrors} />
                                            <span>Procurement</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="manufacturing" onChange={clearErrors} />
                                            <span>Manufacturing</span>
                                        </label>
                                    </div>
                                    {formErrors.modules && <span className="error-message">{formErrors.modules}</span>}
                                </div>

                                <div className="custom-modules">
                                    <h4>Custom Module Requirements</h4>
                                    <textarea
                                        placeholder="Describe any specific modules or features you need that aren't listed above..."
                                        rows="4"
                                        onChange={clearErrors}
                                    ></textarea>
                                </div>

                                <div className="action-buttons">
                                    <button
                                        type="button"
                                        className="btn-primary"
                                        onClick={() => {
                                            // Get selected modules
                                            const checkboxes = document.querySelectorAll('.module-checkbox input[type="checkbox"]:checked');
                                            const selectedModules = Array.from(checkboxes).map(cb => cb.value);

                                            // Get custom requirements
                                            const customRequirements = document.querySelector('.custom-modules textarea')?.value?.trim() || '';

                                            // Check if at least one module is selected or custom requirements provided
                                            if (selectedModules.length === 0 && !customRequirements) {
                                                setFormErrors({ modules: 'Please select at least one module or provide custom requirements' });
                                                return;
                                            }

                                            // Clear errors and show popup
                                            setFormErrors({});
                                            setShowPopup(true);
                                        }}
                                    >
                                        Submit Requirements
                                    </button>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=+255675303030&text=Hi!%20I'm%20interested%20in%20your%20ERP%20solutions%20and%20would%20like%20a%20consultation"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp"
                                    >

                                        WhatsApp Consultation
                                    </a>
                                </div>
                            </div>

                            {/* Popup Dialog */}
                            {showPopup && (
                                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                                    <div className="popup-dialog" onClick={(e) => e.stopPropagation()}>
                                        <div className="popup-header">
                                            <h3>Complete Your Information</h3>
                                            <button className="popup-close" onClick={() => setShowPopup(false)}>
                                                ×
                                            </button>
                                        </div>
                                        <div className="popup-content">
                                            <div className="popup-form">
                                                <div className="form-row">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            placeholder="Your Name"
                                                            required
                                                            onChange={clearErrors}
                                                            className={formErrors.name ? 'error' : ''}
                                                        />
                                                        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            placeholder="Email Address"
                                                            required
                                                            onChange={clearErrors}
                                                            className={formErrors.email ? 'error' : ''}
                                                        />
                                                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group">
                                                        <input
                                                            type="tel"
                                                            placeholder="Phone Number"
                                                            onChange={clearErrors}
                                                            className={formErrors.phone ? 'error' : ''}
                                                        />
                                                        {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            placeholder="Company Name"
                                                            onChange={clearErrors}
                                                            className={formErrors.companyName ? 'error' : ''}
                                                        />
                                                        {formErrors.companyName && <span className="error-message">{formErrors.companyName}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popup-actions">
                                            <button
                                                type="button"
                                                className="btn-secondary"
                                                onClick={() => setShowPopup(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-primary"
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                    // Validate form
                                                    if (!validateForm()) {
                                                        return;
                                                    }

                                                    // Get form values
                                                    const nameField = document.querySelector('.popup-dialog input[placeholder="Your Name"]');
                                                    const emailField = document.querySelector('.popup-dialog input[type="email"]');
                                                    const phoneField = document.querySelector('.popup-dialog input[type="tel"]');
                                                    const companyNameField = document.querySelector('.popup-dialog input[placeholder="Company Name"]');

                                                    const name = nameField?.value?.trim() || '';
                                                    const email = emailField?.value?.trim() || '';
                                                    const phone = phoneField?.value?.trim() || '';
                                                    const companyName = companyNameField?.value?.trim() || '';

                                                    // Get selected modules
                                                    const checkboxes = document.querySelectorAll('.module-checkbox input[type="checkbox"]:checked');
                                                    const selectedModules = Array.from(checkboxes).map(cb => cb.value);

                                                    // Get custom requirements
                                                    const customRequirements = document.querySelector('.custom-modules textarea')?.value?.trim() || '';

                                                    // Build message
                                                    let message = "Hi! I'm interested in your ERP solutions and would like a consultation.\n\n";
                                                    message += "Company Information:\n";
                                                    message += `Company: ${companyName}\n`;
                                                    message += `Contact Person: ${name}\n`;
                                                    message += `Email: ${email}\n`;
                                                    message += `Phone: ${phone}\n\n`;

                                                    if (selectedModules.length > 0) {
                                                        message += "Required Modules:\n";
                                                        selectedModules.forEach(module => {
                                                            message += `- ${module.charAt(0).toUpperCase() + module.slice(1)}\n`;
                                                        });
                                                    }

                                                    if (customRequirements) {
                                                        message += `\nCustom Requirements:\n${customRequirements}\n`;
                                                    }

                                                    // Open WhatsApp with the message
                                                    const whatsappUrl = `https://api.whatsapp.com/send?phone=+255 675 303 030&text=${encodeURIComponent(message)}`;
                                                    window.open(whatsappUrl, '_blank');
                                                    setShowPopup(false);
                                                }}
                                            >
                                                Send to WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LandingPage
