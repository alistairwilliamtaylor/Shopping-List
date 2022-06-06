import React from 'react';
import Item from './Item';
import { ShoppingListProps, ItemType } from "../Interfaces/Interfaces";

function ShoppingList({items, crossOut}: ShoppingListProps) {


    return (
        <section className="shopping-list">
            {items.map((item : ItemType, index : number) => (
                <Item item={item} crossOut ={crossOut} index={index}/>
            ))}
        </section>
    );
}

export default ShoppingList;
