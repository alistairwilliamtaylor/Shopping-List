import React, {useState} from 'react';
import InputBox from './Components/InputBox';
import './App.css';
import ShoppingList from "./Components/ShoppingList";
import { ItemType } from "./Interfaces/Interfaces";

function App() {

    const [items, setItems] = useState([
        {name: "Milk", crossed: false}
    ]);


    const addNewItemToList = (itemName: string) => {
        const newItems = [ ...items, { name: itemName, crossed: false} ];
        setItems(newItems);
    }

    const crossOut = (indexOfItemToCrossOut: number) => {
        const newItems = items.map((item, index) => index === indexOfItemToCrossOut ? crossoutItem(item) : item)
        setItems(newItems);
    }

    const crossoutItem = (oldItem: ItemType) => ({
        name: oldItem.name,
        crossed: true,
    })

    return (
        <>
        <h1>My Shopping List</h1>
            <InputBox addNewItemToList={addNewItemToList}/>
            <ShoppingList items={items} crossOut={crossOut}/>
        </>
    );
}

export default App;