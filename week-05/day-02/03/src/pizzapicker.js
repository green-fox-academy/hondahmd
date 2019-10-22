import React, { useState } from 'react';

function PizzaPicker() {
    const [, setBase] = useState('Plain');
    const [toppings, setToppings] = useState([]);
    const [, setCut] = useState(false);
    const [, setComment] = useState('');

    function handleSelect(event) {
        setBase(event.target.value);
    }

    function handleCheck(event) {
        const {value} = event.target;
        if (toppings.indexOf(value) === -1) {
            setToppings([
                ...toppings,
                value
            ])
        }
    } 

    function handleCut(event) {
        setCut(event.target.value);
    }

    function handleComment(event) {
        setComment(event.target.value);
    }

    function handleSubmit(event) {
        alert("Done!");
        event.preventDefault();
    }

    return (
        <>
            <h1>Pizza Picker</h1>
            <form>
                <label>
                    <h3>Base: </h3>  
                    <select type="select" onChange={handleSelect}>
                        <option>Plain</option>
                        <option>Cheese</option>
                        <option>Teppan</option>
                    </select>
                </label>
                <div onChange={handleCheck}>
                    <h3>Toppings:</h3>
                    <label><input type="checkbox" name="toppings" value="Beef"/>Beef</label>
                    <label><input type="checkbox" name="toppings" value="Tomato"/>Tomato</label>
                    <label><input type="checkbox" name="toppings" value="Pepper"/>Pepper</label>
                    <label><input type="checkbox" name="toppings" value="Pineapple  "/>Pineapple</label>
                </div>
                <div onChange={handleCut}>
                    <h3>Cut or not: </h3>
                    <label><input type="radio" name="cut" value={true}/>Yes</label>
                    <label><input type="radio" name="cut" value={false}/>No</label>
                </div>
                <div>
                    <h3>Comment: </h3>
                    <textarea placeholder="comments" onChange={handleComment}/>
                </div>
                <input type="submit" onClick={handleSubmit}/>
            </form>
        </>
    )
}

export default PizzaPicker;
