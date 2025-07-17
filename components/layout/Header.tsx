import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>BookingApp</div>
            <nav style={styles.nav}>
                <a href="/" style={styles.link}>Home</a>
                <a href="/listings" style={styles.link}>Listings</a>
                <a href="/booking" style={styles.link}>Booking</a>
                <a href="/contact" style={styles.link}>Contact</a>
            </nav>
        </header>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
    },
    logo: {
        fontWeight: 700,
        fontSize: '1.5rem',
        color: '#2d3748',
    },
    nav: {
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        textDecoration: 'none',
        color: '#4a5568',
        fontWeight: 500,
        fontSize: '1rem',
        transition: 'color 0.2s',
    },
};

export default Header;