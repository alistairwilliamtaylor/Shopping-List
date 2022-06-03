import React from 'react';
import Item from './Item';

function ShoppingList({items, crossOut} : any) {


    return (
        <section className="common-items">
            {items.map((item : any, index : number) => (
                <Item item={item} crossOut ={crossOut} index={index}/>
            ))}
        </section>
    );
}

export default ShoppingList;
