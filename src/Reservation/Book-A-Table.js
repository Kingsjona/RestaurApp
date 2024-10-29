import { useState } from "react";
import Footer from "../HOME-PAGE/Footer/Footer";
import './Bookings.css';

function BookATable () {
    const [tableForm, setTableForm] = useState({
        headingText:    "Book A Table",
        nosOfPersons:    2,
        defaultPosition:    "indoor",
        secondaryPosition:  "outdoor",
        location1:   "Burj Khalifa",
        location2:  "Dubai-Downtown",
        location3:  "Palm Jumeirah",
        name:   "",
        mobileNum:  "",
    })

    function UpdatenosOfPersons (e){
        setTableForm({...tableForm, nosOfPersons: e.target.value})
    }

    function UpdatePosition (e){
        setTableForm({...tableForm, IndoorOROutdoor: e.target.value})
    }

    function UpdateLocation (e){
        setTableForm({...tableForm, location: e.target.value})
    }

    function UpdateName (e){
        setTableForm({...tableForm, name: e.target.value})
    }

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
                            <input type="radio"   value={tableForm.defaultPosition} checked/>Indoor
                        </label>
                        <label>
                            <input type="radio" value={tableForm.secondaryPosition}/>Outdoor
                        </label>
                    </fieldset>
                </div>
                <div className="tableform-group">
                    <label>Preffered Location:</label>
                    <input list="locations" value={tableForm.prefferedLocation} required />
                    <datalist id="locations">
                        <option value={tableForm.location1} />
                        <option value={tableForm.location2} />
                        <option value={tableForm.location3} />
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
                <div>
                    <button className="tableform-button">Book Table</button>
                </div>
            </form>
            <div className="table-footer">
                <Footer />
            </div>
        </div>
    )
}

export default BookATable