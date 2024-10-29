import './Footer.css';

function Contact(){
    const footerLogo = "./images/Toplogo.png";
    return(
        <div className="footerItems">
            <img src={footerLogo} width={100} height={100} alt="footer banner" className='logo' />
            <h4>Contact</h4>
            <i>Phone: +971524823912</i>
            <p><a href="mailto:Kingsrestaurant.org">Email us</a></p>
            <h4>Address:</h4>
            <p>Dubai, UAE</p>
        </div>
    )
}

export default Contact;