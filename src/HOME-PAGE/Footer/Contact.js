//importing CSS for styling the footer components
import './Footer.css';

//Contact components: this displays contact infos including logo, phone, emaila and address 
function Contact(){
    //path for the footer image
    const footerLogo = "./images/Toplogo.png";
    return(
        <div className="footerItems">
            {/*logo with a specified dimensions */}
            <div>
                <img src={footerLogo} width={100} height={100} alt="footer banner" className='logo' />
            </div>
            {/*Contact detais section */}
                <h4>Contact</h4>
                <i>Phone: +971524823912</i>
                <p><a href="mailto:Kingsrestaurant.org">Email us</a></p>
                
            {/* Address section */}
                <h4>Address:</h4>
                <p>Dubai, UAE</p>
        </div>
    )
}

export default Contact;