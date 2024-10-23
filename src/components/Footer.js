const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p>
                <a href="/about">About Us</a> | 
                <a href="/contactus">Contact Us</a>
            </p>
        </footer>
    );
};

export default Footer