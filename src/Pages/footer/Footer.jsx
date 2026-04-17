import { useState, useEffect } from 'react'

function Footer() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
                                <li><a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')}>Features</a></li>
                                <li><a href="#erp-consultation" onClick={(e) => handleSmoothScroll(e, 'erp-consultation')}>Consultation</a></li>
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
    )
}

export default Footer