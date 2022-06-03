import React, {useState} from 'react';
import InputBox from './Components/InputBox';
import './App.css';
import ShoppingList from "./Components/ShoppingList";
import { Item } from "./Interfaces/Interfaces";

function App() {

    const [items, setItems] = useState([
        {name: "Milk", crossed: false}
    ]);


    const AddNewItemToList = (itemName: string) => {

        const newItem = {
            name: itemName,
            crossed: false,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
    }

    const crossOut = (indexOfItemToCrossOut: number) => {

        const newItems = items.map((item, index) => {
            return index === indexOfItemToCrossOut ? crossoutItem(item) : item;
        })

        setItems(newItems);
    }

    const crossoutItem = (oldItem: Item) => {
            const newItem = {
            name: oldItem.name,
            crossed: true,
            };
        return newItem;
    }

    return (
        <body>
        <h1>My Shopping List</h1>
            <InputBox AddNewItemToList={AddNewItemToList}/>
            <ShoppingList items={items} crossOut={crossOut}/>
        </body>
    );
}

export default App;
