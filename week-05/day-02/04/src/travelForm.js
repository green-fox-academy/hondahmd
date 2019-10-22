import React, { useState } from 'react';

function TravelForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [diet, setDiet] = useState([]);

    function handleInput(event) {
        const {name, value} = event.target;
        if (name === 'firstName') {
            setFirstName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        } else if (name === 'age') {
            setAge(Number(value));
        } else if (name === 'gender') {
            setGender(value);
        } else if (name === 'diet') {
            if (diet.indexOf(value) === -1) {
                setDiet([
                    ...diet,
                    value
                ])
            }
        }
    }

    function handleSelect(event) {
        setLocation(event.target.value);
    }

    function handleSubmit(event) {
        alert(`
            First name: ${firstName}\n
            Last Name: ${lastName}\n
            Age: ${age}\n
            Gender: ${gender}\n
            Location: ${location}\n
            Dietary restrictions: ${diet.map(food => food)}
        `);
        event.preventDefault();
    }

    return (
        <>
            <h1>Travel Form</h1>
            <form>
                <label onChange={handleInput}>
                    <p>First Name</p>
                    <input type="text" name="firstName" />
                </label>
                <label onChange={handleInput}>
                    <p>Last Name</p>
                    <input type="text" name="lastName" />
                </label>
                <label onChange={handleInput}>
                    <p>Age</p>
                    <input type="text" name="age" />
                </label>
                <h3>Gender: </h3>
                <div onChange={handleInput}>
                    <label><input type="radio" value="male" name="gender"/>Male</label>
                    <label><input type="radio" value="female" name="gender"/>Female</label>
                    <label><input type="radio" value="secret" name="gender"/>Secret</label>
                </div>
                <h3>Location: </h3>
                <select name="location" onChange={handleSelect}>
                    <option>Shenzhen</option>
                    <option>Beijing</option>
                    <option>Budapest</option>
                </select>
                <h3>Dietary restrictions: </h3>
                <div onChange={handleInput}>
                    <label><input type="checkbox" value="vegetarian" name="diet"/>vegetarian</label>
                    <label><input type="checkbox" value="kosher" name="diet"/>kosher</label>
                    <label><input type="checkbox" value="lactose free" name="diet"/>lactose free</label>
                </div>
                <input type="submit" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default TravelForm;
