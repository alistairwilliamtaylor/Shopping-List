import React from 'react';
import {Button, Checkbox} from '@mui/material';

function Item({item, crossOut, index} : any) {


    return (
        <div className ="box">
            <label className = {item.crossed ? "StrikeThrough" : "label"}>
                {item.name}
            </label>
            <Checkbox disabled={item.crossed} className="tick" onChange={() => crossOut(index)} />
            {/*<button disabled={item.crossed} className="tick" onClick={() => crossOut(index)}>Tick!</button>*/}
        </div>
    );
}
export default Item;



