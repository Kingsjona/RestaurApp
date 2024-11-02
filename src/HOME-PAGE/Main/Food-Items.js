import { FriedRiceForm, PizzaForm, FalafelForm } from "./Forms"
import './Main.css';


/*const headText = {
    friedRice: "Fried Rice",
    pizza:  "Pizza",
    falafel:    "Falafel",
}*/

function FriedRice ({showform, hideform, formRef}){
    const ricePhoto = "./images/fried_rice.jpg";

    return(
        <div className='food-items'>
            <div className="section">
                <h3>Fried Rice</h3>
                <img src={ricePhoto} width={100} height={100} alt="A fried rice"/>
                <b>Price: $13</b>
                <div className="descript">
                    <p className='descript-item'>Made of: Fragrant cooked rice, expertly stir-fried with an array of colorful vegetables, scrambled eggs, and a tantalizing blend of savory and aromatic sauces.</p>
                </div>
                <button onClick={showform}>Place Order</button>
            </div>
            <div className="food-items-form" ref={formRef}>
                    <FriedRiceForm hideform={hideform} />
            </div>
        </div>
    )
}

function Pizza ({showform, hideform, formRef}){
    const pizzaPhoto ="./images/pizza.jpg";
    return(
        <div className='food-items'>
            <div className="section">
                    <h3>Pizza</h3>
                    <img src={pizzaPhoto} height={100} width={100} alt="a creamy pizza"/>
                    <b>Price: $7</b>
                <div className="descript">
                    <p className='descript-item'> Made of: A flatbread topped with tomato sauce, melted cheese, and various toppings such as pepperoni, mushrooms, and bell peppers.</p>
                </div>
                <button onClick={showform}>Place Order</button>
            </div>
            <div className="food-items-form" ref={formRef}>
                <PizzaForm hideform={hideform}/>
            </div>
        </div>
    )
}

function Falafel ({showform, hideform, formRef}){
    const falafelPhoto = "./images/falafel.jpg";
    return(
        <div className='food-items'>
            <div className="section">
                <h3>Falafel</h3>
                <img src={falafelPhoto} width={100} height={100} alt="cruchy delicious falafel" />
                <b>Price: $10</b>
                <div className="descript">
                    <p className='descript-item'> Made of: Deep-fried patties or balls made from ground chickpeas or fava beans, mixed with herbs and spices. </p>
                </div>
                <button onClick={showform}>Place Order</button>
            </div>
            <div className="food-items-form" ref={formRef}>
                <FalafelForm hideform={hideform} />
            </div>
        </div>
    )
}

export {FriedRice, Pizza, Falafel}