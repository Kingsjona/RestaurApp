//importing styles specific for the Header component 
import './Header.css';

//Promo component: this displays the restaurant promotional text
function Promo (){

    return(
        <div className="promo">
            <h1>Kings Restaurant</h1>
            <p>30% discount this week on all our menu </p>
        </div>
    )
}

export default Promo;