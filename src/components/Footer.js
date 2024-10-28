const Footer = () => {
    return (
        <footer className="bg-black text-white text-center p-8">
            <p>&copy; {new Date().getFullYear()} Foddie. All rights reserved.</p>
            <p className="semi-bold ">
                <a href="/about">About Us</a> | 
                <a href="/contactus"> Contact Us</a>
            </p>
        </footer>
    );
};

export default Footer;