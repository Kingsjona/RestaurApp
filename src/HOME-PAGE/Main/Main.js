//import useState for referencing form elements
import { useRef } from 'react';
import './Main.css';

//import each individual food item components
import { FriedRice, Pizza, Falafel } from "./Food-Items";

function Main (){
    //creates indivdual refs for each food items forms.
    const riceformRef = useRef(null);
   const pizzaformRef = useRef(null);
   const falafelformRef = useRef(null);
    
   //function that displays the form by settings its display to "flex"
   const DisplayForm = (formRef) =>{
    if (formRef.current){
        formRef.current.style.display="flex";
    }
   }

   //function that hides a form by settings its display style to "none"
   const HideForm = (formRef) =>{
    if (formRef.current){
        formRef.current.style.display="none";
    }
   }
    
   /* this returns each food item component with props for displaying and hiding form using refs for each form */
    return(
        <div className="menu-items">
           <FriedRice showform={()=>DisplayForm(riceformRef)} hideform={()=>HideForm(riceformRef)} formRef={riceformRef} />
            <Pizza showform={()=>DisplayForm(pizzaformRef)} hideform={()=>HideForm(pizzaformRef)} formRef={pizzaformRef}/>    
            <Falafel showform={()=>DisplayForm(falafelformRef)} hideform={()=>HideForm(falafelformRef)} formRef={falafelformRef}/> 
        </div>
    )
}

export default Main;