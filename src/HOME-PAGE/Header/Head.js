// parent component for all heading components
import Promo from "./Promo";
import {Helmet} from "react-helmet";
function Head (){

    return(
        <div className="Head">
            <Helmet>
                <meta name="author" content="Chukwudi Kingsley Ibe" />
                <meta name="description" content="Kings Restaurant" />
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content="Kings Restaurant" />
                <meta property="og:type" content="Restaurant platform" />
                <meta property="og:url" content="https://Kingsrestaurant.com/" />
                <meta property="og:image" content="https://kingsrestaurant.com/logo/" />
            </Helmet>
            <Promo/>
        </div>
    )
}
export default Head;