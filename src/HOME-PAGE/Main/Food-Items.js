import { FriedRiceForm, PizzaForm, FalafelForm, CoffeeForm, BurgerForm, ChickenForm } from "./Forms"
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
                <img src={ricePhoto} height={150} width={200} alt="A fried rice"/>
                <b>Price: $13</b>
                <div className="descript">
                    <p className='descript-item'><b>Made of</b>: Fragrant cooked rice, expertly stir-fried with an array of colorful vegetables, scrambled eggs, and a tantalizing blend of savory and aromatic sauces.</p>
                </div>
                <button onClick={showform}>Order Delivery</button>
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
                    <img src={pizzaPhoto} height={150} width={200} alt="a creamy pizza"/>
                    <b>Price: $7</b>
                <div className="descript">
                    <p className='descript-item'><b>Made of</b>: A flatbread topped with tomato sauce, melted cheese, and various toppings such as pepperoni, mushrooms, and bell peppers.</p>
                </div>
                <button onClick={showform}>Order Delivery</button>
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
                <img src={falafelPhoto} height={150} width={200} alt="cruchy delicious falafel" />
                <b>Price: $10</b>
                <div className="descript">
                    <p className='descript-item'><b>Made of</b>: Deep-fried patties or balls made from ground chickpeas or fava beans, mixed with herbs and spices. </p>
                </div>
                <button onClick={showform}>Order Delivery</button>
            </div>
            <div className="food-items-form" ref={formRef}>
                <FalafelForm hideform={hideform} />
            </div>
        </div>
    )
}

function Coffee ({showform, hideform, formRef}){
    const coffeePhoto = "./images/Coffee.jpg";
    return(
        <div className="food-items">
            <div className="section">
                <h3> Coffee </h3>
                <img src={coffeePhoto} height={150} width={200} alt="A cup of coffee"/>
                <b>Price: $3</b>
                <div className="descript">
                    <p className='descript-item'><b>Made of</b>: Premium roasted coffee beans brewed to perfection, delivering a rich, aromatic cup of bold flavor and velvety smoothness, with a delicate creama on top.</p>
                </div>
                <button onClick={showform}>Order Delivery</button>
            </div>
            <div className="food-items-form" ref={formRef}>
                <CoffeeForm hideform={hideform}  />
            </div>
        </div>
    )
}

function Burger ({showform, hideform, formRef}){
    const burgerPhoto = "./images/Burger.jpg";
    return(
        <div className="food-items">
            <div className="section">
                <h3> Burger </h3>
                <img src={burgerPhoto} height={150} width={200} alt="creamy burger"/>
                <b>Price: $8</b>
                <div className="descript">
                    <p className='descript-item'><b>Made of</b>: A juicy, perfectly seasoned beef patty nestled in a soft, toasted bun, layered with fresh lettuce, ripe tomatoes, melted cheese, and a tangy signature sauce.</p>
                </div>
                <button onClick={showform}>Order Delivery</button>
            </div>
            <div className="food-items-form" ref={formRef}>
                <BurgerForm hideform={hideform} />
            </div>
        </div>
    )
}

function Salad ({showform, hideform, formRef}){
    const saladPhoto = "./images/Salad.jpg";
    return(
        <div className="food-items">
            <div className="section">
                <h3> Greek Salad </h3>
                <img src={saladPhoto} height={150} width={200} alt="greek salad"/>
                <b>Price: $12</b>
                <div className="descript">
                    <p className='descript-item'><b>Made of</b>: Crisp romaine lettuce, juicy tomatoes, refreshing cucumbers, tangy feta cheese, and briny olives, all tossed with a zesty oregano olive oil dressing.</p>
                </div>
                <button onClick={showform}>Order Delivery</button>
            </div>
            <div className="food-items-form" ref={formRef}>
                <ChickenForm hideform={hideform} />
            </div>
        </div>
    )
}

export {FriedRice, Pizza, Falafel, Coffee, Burger, Salad}