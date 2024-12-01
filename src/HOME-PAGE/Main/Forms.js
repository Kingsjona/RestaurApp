//importing useState hook for state management and styles for main component
import {useState} from "react";
import './Main.css';

//food prices and details
const foodPrices ={
    Pizza: 7,
    FriedRice: 13,
    Falafel: 10,
    Coffee: 3,
    Burger: 8,
    Chicken: 12,
}

//food items and units of their measurements
const foodOrderMeasure = {
    Pizza: "Pizza(s)",
    FriedRice: "Plate(s)",
    Falafel: "Plate(s)",
    Coffee: "Coffee(s)",
    Burger: "Burger(s)",
    Chicken: "Chicken(s)",
}

//headings for each food item
const foodheadText = {
    friedrice:  "Fried Rice",
    pizza:  "Pizza",
    falafel:    "Falafel",
    coffee: "Coffee",
    burger: "Burger",
    salad:    "Greek Salad",
}

//image path for the cancel icon
const cancelLogo = "./images/close.png";

//MyForm component: This renders a form for placing food orders
function MyForm ({pricePerItem, headText, quantityType, hideform}){
    const InitialQuantity = 2;
     const [form, setForm]= useState({
        quantity: InitialQuantity,
        yourName: "",
        mobileNumber:  "",
        address: "",
        price:  pricePerItem * InitialQuantity,
        qntyMeasure: quantityType,
        headtext: headText,  
     });

        // this updates quantity and price based on quantity selected
        function UpdateQuantityAndPrice (e){
            const newQuantity = e.target.value;
            setForm({
                ...form, quantity: newQuantity,
                price: newQuantity * pricePerItem,//updates price based on selected quantity
            
            })
        }

        //Upadtes the user's name
        function UpdateYourName(e){
            setForm({...form, yourName: e.target.value})
        }

        //Updates the user's mobile number
        function UpdateMobileNumber(e){
            setForm({...form, mobileNumber: e.target.value})
        }

        //Updates the user's address
        function UpdateAddress(e){
            setForm({...form, address: e.target.value})
        }

    return(
        <div className="form">
            <form>
                <img src={cancelLogo} onClick={hideform} className="close" width={20} height={20} alt="close icon" />
                <h3>{form.headtext}</h3>
                <div className="form-group">
                    <label>Quantity :</label>
                    <input type="range" min={1} max={5}  value={form.quantity} onChange={UpdateQuantityAndPrice} required />
                </div>
                <div className="form-group">
                    <output><b>{form.quantity}</b> {form.qntyMeasure}</output>
                </div>
                <div className="form-group">
                     <>Price:</><b> ${form.price}</b>
                </div>
                <div className="form-group">
                    <label>Your name:</label>
                    <input type="text" value={form.UpdateYourName} onChange={UpdateYourName} placeholder="e.g john" required />
                </div>
                <div className="form-group">
                    <label>Moblile number:</label>
                    <input type="number" value={form.mobileNumber} onChange={UpdateMobileNumber} placeholder="e.g 0524823912" required/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" value={form.address} onChange={UpdateAddress} placeholder="e.g 15th marina street, Dubai" required/>
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    )
}

//Forms specific for each food item
function FriedRiceForm ({hideform}){
    return(
        <div>
            <MyForm headText={foodheadText.friedrice} pricePerItem ={foodPrices.FriedRice} quantityType ={foodOrderMeasure.FriedRice} hideform={hideform} />
        </div>
    )
}

function PizzaForm ({hideform}){

    return(
        <div>
            <MyForm headText={foodheadText.pizza}  pricePerItem ={foodPrices.Pizza} quantityType={foodOrderMeasure.Pizza} hideform={hideform} />
        </div>
    )
}

function FalafelForm ({hideform}){

    return(
        <div>
           <MyForm headText={foodheadText.falafel} pricePerItem={foodPrices.Falafel} quantityType={foodOrderMeasure.Falafel} hideform={hideform} />
        </div>
    )
}

function CoffeeForm ({hideform}){

    return(
        <div>
            <MyForm headText={foodheadText.coffee} pricePerItem={foodPrices.Coffee} quantityType={foodOrderMeasure.Coffee} hideform={hideform}/>
        </div>
    )
}

function BurgerForm ({hideform}){

    return(
        <div>
            <MyForm headText={foodheadText.burger} pricePerItem={foodPrices.Burger} quantityType={foodOrderMeasure.Burger} hideform={hideform}/>
        </div>
    )
}

function ChickenForm({hideform}){

    return(
        <div>
            <MyForm headText={foodheadText.salad} pricePerItem={foodPrices.Chicken} quantityType={foodOrderMeasure.Chicken} hideform={hideform}/>
        </div>
     )
}

export {FriedRiceForm, PizzaForm, FalafelForm, CoffeeForm, ChickenForm, BurgerForm}
