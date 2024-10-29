//This is Parent coponents af all the footer components
import Contact from "./Contact"
import {CopyrightsPolicy} from "./Copyright";
import './Footer.css';

function Footer (){

    return(
        <div className="footer">
            <Contact />
            <CopyrightsPolicy />
        </div>
    )
};

export default Footer;