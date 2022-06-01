import React, {useState} from 'react';
import './App.css';

function App() {

    const [items, setItems] = useState([
        {name: "Milk", crossed: false}
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleAddButton = () => {
        const newItem = {
            name: inputValue,
            crossed: false,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
    }

    const crossOut = (indexOfItemToCrossOut: any) => {
        const newItems = items.map((item,index) => {
            return index === indexOfItemToCrossOut ? crossoutItem(item) : item;
        })
        setItems(newItems);
    }

    const crossoutItem = (oldItem : any) => {
            const newItem = {
            name: oldItem.name,
            crossed: true,
            };
        return newItem;
    }
    const handleSubmit = (event : any) => {
        event.preventDefault();
        return false;
    }

    return (
        <body>
        <h1>My Shopping List</h1>
          <form className="item-adder" onSubmit={(event) => handleSubmit(event)}>
            <label>What would you like to add?</label>
            <input className="user-input" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
              <button className="add-button" onClick={() => handleAddButton()}>Add me!</button>
          </form>
        <section className="common-items">
            {items.map((item, index) => (
                <div className ="box">
                    <label className = {item.crossed ? "StrikeThrough" : "label"}>
                        {item.name}
                    </label>
                    <button disabled={item.crossed} className="tick" onClick={() => crossOut(index)}>Tick!</button>
                </div>
                ))}
        </section>
        </body>
    );
}

export default App;
