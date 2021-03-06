import React from 'react';
import { Checkbox } from '@mui/material';
import { ItemProps } from "../Interfaces/Interfaces";

function Item({item, crossOut, index}: ItemProps) {


    return (
        <div className ="shopping-list-item">
            <label className={item.crossed ? "strike-through" : "label"} htmlFor={item.name}>
                {item.name}
            </label>
            <Checkbox disabled={item.crossed} id={item.name} className="tick" onChange={() => crossOut(index)} />
        </div>
    );
}

export default Item;



