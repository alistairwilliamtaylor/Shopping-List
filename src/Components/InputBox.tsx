import React, {useState} from 'react';
import { InputBoxProps } from "../Interfaces/Interfaces";

function InputBox({ addNewItemToList } : InputBoxProps) {

    const [inputValue, setInputValue] = useState('');

    const handleAddButton = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addNewItemToList(inputValue);
        setInputValue("");
    }

    return(
        <form className="item-adder" >
            <label>What would you like to add?</label>
            <input className="user-input" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            <button className="add-button" onClick={handleAddButton}>Add me!</button>
        </form>
    );
}
export default InputBox;



