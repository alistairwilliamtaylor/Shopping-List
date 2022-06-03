import React, {useState} from 'react';


function InputBox(props : any) {

    const [inputValue, setInputValue] = useState('');

    const handleAddButton = (e : any) => {
        e.preventDefault();
        props.AddNewItemToList(inputValue);
        setInputValue("");
    }

    return(
        <form className="item-adder" >
            <label>What would you like to add?</label>
            <input className="user-input" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            <button className="add-button" onClick={(e) => handleAddButton(e)}>Add me!</button>
        </form>
    );
}
export default InputBox;



