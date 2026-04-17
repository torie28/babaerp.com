import { useState, useEffect } from 'react'

function LandingPage() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeTab, setActiveTab] = useState('overview')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="erp-landing">
            {/* Header */}
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <h1>ERP Solutions</h1>
                        </div>
                        <nav className="nav">
                            <a href="#overview">Overview</a>
                            <a href="#features">Features</a>
                            <a href="#modules">Modules</a>
                            <a href="#industries">Industries</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">Enterprise Resource Planning</h1>
                            <p className="hero-subtitle">
                                Transform your business with our comprehensive ERP solution. Streamline operations,
                                increase efficiency, and drive growth with integrated business management.
                            </p>
                            <div className="hero-buttons">
                                <button className="btn-primary">Request Demo</button>
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
                            <h3>Tell Us About Your Module Requirements</h3>
                            <p>If our standard modules don't meet your specific needs, let us know what you're looking for. We'll create a custom solution for your business.</p>
                        </div>

                        <div className="module-form-container">
                            <form className="module-interest-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Company Name" />
                                    </div>
                                </div>

                                <div className="modules-section">
                                    <h4>Select Your Interest Modules</h4>
                                    <div className="modules-grid">
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="inventory" />
                                            <span>Inventory Management</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="accounting" />
                                            <span>Accounting & Finance</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="hr" />
                                            <span>Human Resources</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="crm" />
                                            <span>Customer Relations</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="procurement" />
                                            <span>Procurement</span>
                                        </label>
                                        <label className="module-checkbox">
                                            <input type="checkbox" value="manufacturing" />
                                            <span>Manufacturing</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="custom-modules">
                                    <h4>Custom Module Requirements</h4>
                                    <textarea
                                        placeholder="Describe any specific modules or features you need that aren't listed above..."
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="action-buttons">
                                    <button
                                        type="button"
                                        className="btn-primary"
                                        onClick={(e) => {
                                            e.preventDefault();

                                            // Get selected modules
                                            const checkboxes = document.querySelectorAll('.module-checkbox input[type="checkbox"]:checked');
                                            const selectedModules = Array.from(checkboxes).map(cb => cb.value);

                                            // Get custom requirements
                                            const customRequirements = document.querySelector('.custom-modules textarea')?.value || '';

                                            // Get company info
                                            const companyName = document.querySelector('input[placeholder="Company Name"]')?.value || '';
                                            const contactPerson = document.querySelector('input[placeholder="Contact Person"]')?.value || '';
                                            const email = document.querySelector('input[type="email"]')?.value || '';
                                            const phone = document.querySelector('input[type="tel"]')?.value || '';

                                            // Build message
                                            let message = "Hi! I'm interested in your ERP solutions and would like a consultation.\n\n";
                                            message += "Company Information:\n";
                                            message += `Company: ${companyName}\n`;
                                            message += `Contact Person: ${contactPerson}\n`;
                                            message += `Email: ${email}\n`;
                                            message += `Phone: ${phone}\n\n`;

                                            if (selectedModules.length > 0) {
                                                message += "Required Modules:\n";
                                                selectedModules.forEach(module => {
                                                    message += `- ${module.charAt(0).toUpperCase() + module.slice(1)}\n`;
                                                });
                                            }

                                            if (customRequirements.trim()) {
                                                message += `\nCustom Requirements:\n${customRequirements}\n`;
                                            }

                                            // Open WhatsApp with the message
                                            const whatsappUrl = `https://api.whatsapp.com/send?phone=+255 675 303 030&text=${encodeURIComponent(message)}`;
                                            window.open(whatsappUrl, '_blank');
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
                                        <span className="whatsapp-icon">??</span>
                                        WhatsApp Consultation
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    {/* Footer CTA Section */}
                    <div className="footer-cta">
                        <div className="footer-cta-content">
                            <h2 className="footer-cta-title">Ready to Transform Your Business?</h2>
                            <p className="footer-cta-subtitle">
                                Join thousands of companies that have revolutionized their operations with our ERP solution
                            </p>

                        </div>
                        <div className="footer-cta-visual">
                            <div className="cta-stats-mini">
                                <div className="stat-mini">
                                    <div className="stat-number-mini">10K+</div>
                                    <div className="stat-label-mini">Active Users</div>
                                </div>
                                <div className="stat-mini">
                                    <div className="stat-number-mini">99.9%</div>
                                    <div className="stat-label-mini">Uptime</div>
                                </div>
                                <div className="stat-mini">
                                    <div className="stat-number-mini">24/7</div>
                                    <div className="stat-label-mini">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Footer Content */}
                    <div className="footer-main">
                        <div className="footer-content">
                            {/* Company Info */}
                            <div className="footer-section footer-company">
                                <div className="footer-logo">
                                    <h3>ERP Solutions</h3>
                                    <p className="footer-tagline">
                                        Empowering businesses with intelligent enterprise resource planning solutions
                                    </p>
                                </div>
                                <div className="footer-social">
                                    <h4>Connect With Us</h4>
                                    <div className="social-links">
                                        <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="#twitter" className="social-link" aria-label="Twitter">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                        <a href="#youtube" className="social-link" aria-label="YouTube">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </a>
                                        <a href="#facebook" className="social-link" aria-label="Facebook">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Product Links */}
                            <div className="footer-section">
                                <h4>Product</h4>
                                <ul>
                                    <li><a href="#features">Features</a></li>
                                    <li><a href="#modules">Modules</a></li>
                                    <li><a href="#pricing">Pricing</a></li>
                                    <li><a href="#demo">Request Demo</a></li>
                                    <li><a href="#integration">Integrations</a></li>
                                    <li><a href="#updates">What's New</a></li>
                                </ul>
                            </div>

                            {/* Company Links */}
                            <div className="footer-section">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#careers">Careers</a></li>
                                    <li><a href="#partners">Partners</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#press">Press</a></li>
                                    <li><a href="#events">Events</a></li>
                                </ul>
                            </div>

                            {/* Support Links */}
                            <div className="footer-section">
                                <h4>Support</h4>
                                <ul>
                                    <li><a href="#help">Help Center</a></li>
                                    <li><a href="#documentation">Documentation</a></li>
                                    <li><a href="#training">Training</a></li>
                                    <li><a href="#community">Community</a></li>
                                    <li><a href="#status">System Status</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div className="footer-section">
                                <h4>Legal</h4>
                                <ul>
                                    <li><a href="#privacy">Privacy Policy</a></li>
                                    <li><a href="#terms">Terms of Service</a></li>
                                    <li><a href="#security">Security</a></li>
                                    <li><a href="#compliance">Compliance</a></li>
                                    <li><a href="#cookies">Cookie Policy</a></li>
                                    <li><a href="#gdpr">GDPR</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>


                </div>
            </footer>
        </div>
    )
}

export default LandingPage