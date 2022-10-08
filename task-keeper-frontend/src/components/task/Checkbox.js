import './Checkbox.css'
import { useState } from 'react';


function Checkbox() {



    let [checkboxClicked, setCheckbox] = useState(false);

    const checkboxHandler = () => {
        setCheckbox((prevState) => {
            return (!prevState);
        });
        // console.log(checkboxClicked);
    }
    return (
        //inline dynamic style method
        < i className="fa fa-check custom-checkbox" onClick={checkboxHandler} style={
            { background: checkboxClicked && 'rgb(116, 191, 244)', color: checkboxClicked && 'black' }
        }>
        </i >

        // css file dynamic method
        // < i className={`fa fa-check custom-checkbox ${checkboxClicked ? 'clicked' : ''}`} onClick={checkboxHandler}> </i>
    );
}


export default Checkbox;