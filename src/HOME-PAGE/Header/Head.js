// importing child component and Helmet for adding meta tags
import Promo from "./Promo";
import {Helmet} from "react-helmet";


//Head component: Sets up Search Engine Optimization(SEO) meta tags and display promo component
function Head (){
    return(
        <div className="Head">
            {/* Helmet allow adding metadata to the document head*/}
            <Helmet>
                <meta name="author" content="Chukwudi Kingsley Ibe" />
                <meta name="description" content="Kings Restaurant" />
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Open Graph Protocols for Social media previews */}
                <meta property="og:title" content="Kings Restaurant" />
                <meta property="og:type" content="Restaurant platform" />
                <meta property="og:url" content="https://Kingsrestaurant.com/" />
                <meta property="og:image" content="https://kingsrestaurant.com/logo/" />
            </Helmet>

            {/* Promo component that displays promotional message */}
            <Promo/>
        </div>
    )
}
export default Head;