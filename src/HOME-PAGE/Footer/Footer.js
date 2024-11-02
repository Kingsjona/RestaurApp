//This is Parent that organises and renders all the footer items
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