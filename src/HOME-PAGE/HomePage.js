//This is the parent components of the HOME-PAGE components
import Head from "./Header/Head";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function HomePage (){

    return(
        <div>
            <Head/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default HomePage;