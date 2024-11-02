import { useState } from "react";//importing useState form data state management
import Footer from "../HOME-PAGE/Footer/Footer";//Footer component for consistent page
import './Bookings.css';//importing CSS for form styling

function BookATable () {
    //Form state: ihis holds all the user input values with default settings
    const [tableForm, setTableForm] = useState({
        headingText:    "Book A Table",//this is firm header text
        nosOfPersons:    2,             //Default guest count, minimum is 2
        position:    "indoor",          // Seating position defaultly sets to indoor
        location: "",                   //Location field initialixed empty
        name:   "",                     //User's name, initailly blank
        mobileNum:  "",                 //User's mobile number, initailly blank
    })

    //this updates guest count based on slider input
    function UpdatenosOfPersons (e){
        setTableForm({...tableForm, nosOfPersons: e.target.value})
    }

    //Updates seating postion in state (indoor/outdoor radio buttons)
    function UpdatePosition (e){
        setTableForm({...tableForm, position: e.target.value})
    }

    //Updates preffered location based on dropdown selection
    function UpdateLocation (e){
        setTableForm({...tableForm, location: e.target.value})
    }

    //Updates user's name in the state as they type
    function UpdateName (e){
        setTableForm({...tableForm, name: e.target.value})
    }

    //Updates user's moblie number in the state as the type
    function UpdateMobileNum (e){
        setTableForm({...tableForm, mobileNum: e.target.value})
    }

    return(
        <div className="table-form">
            <form>
                <h3>{tableForm.headingText}</h3>
                <div className="tableform-group">
                    <label>Number Of Persons:</label>
                    <input type="range" min={2} max={10} value={tableForm.nosOfPersons} onInput={UpdatenosOfPersons} />
                </div>
                <div className="tableform-group">
                    {tableForm.nosOfPersons} Persons
                </div>
                <div className="tableform-group">
                    <fieldset>
                        <label className="radio">
                            <input type="radio"   value="indoor" checked={tableForm.position === "indoor"} onChange={UpdatePosition}/>Indoor
                        </label>
                        <label>
                            <input type="radio" value="outdoor" checked={tableForm.position === "outdoor"} onChange={UpdatePosition}/>Outdoor
                        </label>
                    </fieldset>
                </div>
                <div className="tableform-group">
                    <label>Preffered Location:</label>
                    <input list="locations" value={tableForm.location} onChange={UpdateLocation} required />
                    <datalist id="locations">
                        <option value="Burj Khalifa" />
                        <option value="Dubai-Downtown" />
                        <option value="Palm Jumeirah" />
                    </datalist>
                </div>
                <div className="tableform-group">
                    <label>Your name:</label>
                    <input type="text" value={tableForm.name} required min={2} max={40} onChange={UpdateName} placeholder="e.g John"  />
                </div>
                <div className="tableform-group">
                    <label>Mobile Number</label>
                    <input type="number" value={tableForm.mobileNum} required  min={7} max={13} onChange={UpdateMobileNum} placeholder="e.g 0524823912" />
                </div>

                {/*This is the button to submit booking */}
                <div>
                    <button className="tableform-button">Book Table</button>
                </div>
            </form>

            {/*displays footer at the bottom */}
            <div className="table-footer">
                <Footer />
            </div>
        </div>
    )
}

export default BookATable