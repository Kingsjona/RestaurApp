//the parent component that returns all components in the About folder
import Footer from "../HOME-PAGE/Footer/Footer";
import { Helmet } from "react-helmet";

function AboutUs (){

    return(
        <div>
            <Helmet>
                <meta name="author" content="Chukwudi Kingsley Ibe" />
                <meta name="description" content=" About Kings Restaurant" />
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content="About Kings Restaurant" />
                <meta property="og:type" content="Infos about Kings Restaurant" />
                <meta property="og:url" content="https://Kingsrestaurant.com/about-us/" />
                <meta property="og:image" content="https://kingsrestaurant.com/logo/" />
            </Helmet>
           <h3>About Kings Reataurant</h3> 
           <p>Kings restaurant is dedicated to offering the best dinning experience with varities of continental dishes to satisfy every person. We pride ourselves of quality service and delicious meals from fresh ingrdients</p>
           <p>This project is developed by <b>Chukwudi Kingsley Ibe</b> as part of a proffesional portfolio</p>
           <Footer />
        </div>
    )
}

export default AboutUs;