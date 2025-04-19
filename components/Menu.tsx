import React, { useState, useEffect } from 'react';
import styles from "../styles/comp/Menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Set initial width
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuInteraction = (menu: string) => {
        if (windowWidth <= 1024) {
            setActiveMenu(activeMenu === menu ? null : menu);
        }
    };

    const handleMouseEnter = (menu: string) => {
        if (windowWidth > 1024) {
            setActiveMenu(menu);
        }
    };

    const handleMouseLeave = () => {
        if (windowWidth > 1024) {
            setActiveMenu(null);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
    };

    const menuItems = [
        {
            id: 'products',
            title: 'Products',
            columns: [
                {
                    title: 'Featured Products',
                    links: [
                        { text: 'App Studio', href: '/product/NewAppstudio/' },
                        { text: 'Agent Studio', href: '/product/NewAgentStudio/' },
                        { text: 'AI Studio', href: '/product/NewAistudio/' }
                    ]
                }
            ]
        },
        {
            id: 'Solutions',
            title: 'Solutions',
            columns: [
                {
                    title: 'By Solution',
                    links: [
                        { text: 'Process Automation', href: '/solutions/ProcessAutomation/' },
                        { text: 'Legacy Moderation', href: '/solutions/LegacyModernization/' },
                        { text: 'Customer Experience', href: '/solutions/CustomerExperience/' },
                        { text: 'Integrations', href: '/solutions/Integrations/' }
                    ]
                },
                {
                    title: 'By Industry',
                    links: [
                        { text: 'Medical', href: '/industry/Medical/' },
                        { text: 'Education', href: '/industry/Education/' },
                        { text: 'Financial Service', href: '/industry/FinancialServices/' },
                        { text: 'Telecommunications', href: '/industry/TeleCommunication/' },
                        { text: 'Technologies', href: '/industry/Technologies/' },
                        { text: 'Banking', href: '/industry/Banking/' },
                        { text: 'Government', href: '/industry/Government/' },
                        { text: 'Manufacturing', href: '/industry/Manufacturing/' }
                    ]
                }
            ]
        },
        {
            id: 'partners',
            title: 'Partners',
            columns: [
                {
                    title: 'Partners',
                    links: [
                        { text: 'Partner program', href: '/partners/PartnerProgram/' },
                        { text: 'Become a partner', href: '/partners/BecomePartner/' }
                    ]
                }
            ]
        },
        {
            id: 'resources',
            title: 'Resources',
            columns: [
                {
                    title: 'Documentation',
                    links: [
                        { text: 'App Studio docs', href: 'https://docs.digisquares.com/' },
                        { text: 'Agent Studio docs', href: 'https://docs.digisquares.com/' },
                        { text: 'AI Studio docs', href: 'https://docs.digisquares.com/' }
                    ]
                },
                {
                    title: 'Common',
                    links: [
                        { text: 'Blog', href: '/more/Blog/' },
                        { text: 'Podcast', href: '/resources/Podcast/' },
                        { text: 'FAQs', href: '/resources/FAQ/' }
                    ]
                }
            ]
        },
        {
            id: 'pricing',
            title: 'Pricing',
            columns: [
                {
                    title: 'Pricing',
                    links: [
                        { text: 'App Studio', href: '/pricing/AppStudio' },
                        { text: 'Agent Studio', href: '/pricing/AgentStudio' }
                    ]
                }
            ]
        }
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/assets/logo/Logo.svg"
                            width={30}
                            height={30}
                            alt="DIGISQUARES Logo"
                        />
                        <span className={styles.logoText}>DIGISQUARES</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {menuItems.map((item) => (
                        <div key={item.id} className={styles.navItem}>
                            <button
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                                className={styles.navButton}
                            >
                                {item.title}
                            </button>
                            {activeMenu === item.id && (
                                <div className={styles.dropdownMenu}
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}>
                                    {item.columns.map((column, colIndex) => (
                                        <div key={colIndex} className={styles.dropdownColumn}>
                                            <h3 className={styles.dropdownTitle}>{column.title}</h3>
                                            {column.links.map((link, linkIndex) => (
                                                <Link
                                                    key={linkIndex}
                                                    href={link.href}
                                                    className={styles.dropdownLink}
                                                >
                                                    {link.text}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href="/contact/ContactUs/" className={styles.contactLink}>
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Hamburger - Only shows on mobile */}
                <button
                    className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Navigation - Only shows when menu is open */}
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        {menuItems.map((item) => (
                            <div key={item.id} className={styles.mobileNavItem}>
                                <button
                                    onClick={() => handleMenuInteraction(item.id)}
                                    className={styles.mobileNavButton}
                                >
                                    {item.title}
                                    <span className={styles.dropdownArrow}>
                                        {activeMenu === item.id ? '−' : '+'}
                                    </span>
                                </button>
                                {activeMenu === item.id && (
                                    <div className={styles.mobileDropdown}>
                                        {item.columns.map((column, colIndex) => (
                                            <div key={colIndex} className={styles.mobileDropdownColumn}>
                                                <h3 className={styles.mobileDropdownTitle}>{column.title}</h3>
                                                {column.links.map((link, linkIndex) => (
                                                    <Link
                                                        key={linkIndex}
                                                        href={link.href}
                                                        className={styles.mobileDropdownLink}
                                                        onClick={closeMobileMenu}
                                                    >
                                                        {link.text}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact/ContactUs/"
                            className={styles.mobileContactLink}
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </div>
                )}

                {/* Auth Buttons - Desktop Only */}
                <div className={styles.authButtons}>
                    <button type="button" className={styles.globalButton}>
                        <Image
                            src="/svg/global-svg.svg"
                            alt="Global"
                            width={30}
                            height={30}
                        />
                    </button>
                    <Link href="https://app.digisquares.com/login" className={styles.signInBtn}>
                        Sign in
                    </Link>
                    <Link href="https://app.digisquares.com/register" className={styles.signUpBtn}>
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Menu;