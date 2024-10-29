//This is the Parent component that renders all componenets of the 'Main' folder
import { useRef } from 'react';
import './Main.css';

import { FriedRice, Pizza, Falafel } from "./Food-Items";

function Main (){
    
    //creating indivdual refs for each food items forms.
   const riceformRef = useRef(null);
   const pizzaformRef = useRef(null);
   const falafelformRef = useRef(null);
    
   //An instance that displays a form
   const DisplayForm = (formRef) =>{
    if (formRef.current){
        formRef.current.style.display="flex";
    }
   }

   //An instance function that hides a form
   const HideForm = (formRef) =>{
    if (formRef.current){
        formRef.current.style.display="none";
    }
   }
    
   /*returns each form with a prop which leverages DisplayForm and HideForm above to display and hide each forms using their individual formRefs */

    return(
        <div className="menu-items">
           <FriedRice showform={()=>DisplayForm(riceformRef)} hideform={()=>HideForm(riceformRef)} formRef={riceformRef} />
            <Pizza showform={()=>DisplayForm(pizzaformRef)} hideform={()=>HideForm(pizzaformRef)} formRef={pizzaformRef}/>    
            <Falafel showform={()=>DisplayForm(falafelformRef)} hideform={()=>HideForm(falafelformRef)} formRef={falafelformRef}/> 
        </div>
    )
}

export default Main;