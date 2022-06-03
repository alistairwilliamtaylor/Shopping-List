import React from 'react';
import { Checkbox } from '@mui/material';
import { ItemProps } from "../Interfaces/Interfaces";

function Item({item, crossOut, index}: ItemProps) {


    return (
        <div className ="box">
            <label className = {item.crossed ? "StrikeThrough" : "label"}>
                {item.name}
            </label>
            <Checkbox disabled={item.crossed} className="tick" onChange={() => crossOut(index)} />
        </div>
    );
}

export default Item;



