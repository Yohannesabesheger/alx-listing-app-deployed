import React from "react";

const Footer: React.FC = () => (
    <footer style={{
        width: "100%",
        padding: "1rem 0",
        textAlign: "center",
        background: "#f5f5f5",
        borderTop: "1px solid #eaeaea",
        marginTop: "auto"
    }}>
        <span>
            &copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.
        </span>
    </footer>
);

export default Footer;