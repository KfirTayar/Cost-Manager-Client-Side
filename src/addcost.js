// Kfir Tayar 208991430
//

import React from 'react';
import './addcost.css';
import {useState, useEffect} from 'react';
import LocalStorage from "./localStorage";

// Components from MUI lib
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCard from '@mui/icons-material/AddCard';

const AddCostPage = () => {
    // This useEffect hook updates the document title to 'Cost Manager'
    useEffect(() => {
        document.title = 'Cost Manager App';
    }, []);

    useEffect(() => {
        // This useEffect hook retrieves the inputs saved in local storage and sets them to the inputs state variable
        const inputsFromLocalStorage = LocalStorage.get('inputs');
        if (inputsFromLocalStorage) {
            setInputs(inputsFromLocalStorage);
        }
    }, []);

    // These state variables are used to store the values of the inputs
    const [date, setDate] = useState('');
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [currency, setCurrency] = useState('');
    const [description, setDescription] = useState('');
    const [inputs, setInputs] = useState([]);

    // This function is called when the user clicks the add cost button
    var index = 1;

    return (
        <div className="add-cost-page">
            <h1>Cost Manager App<br/>
                Please insert your costs</h1>
            <div className="add-cost-form">

                <div>
                    <div className="add-cost-form-fields">
                        <label className='add-cost-form-labels'>Date:</label>
                        <input type="date" value={date}
                               onChange={e => setDate(e.target.value)} required
                               autoComplete={'off'} />
                    </div>
                    <div className="add-cost-form-fields">
                        <label className='add-cost-form-labels'>Sum: </label><input type="number" value={sum}
                                                     onChange={e => setSum(e.target.value)}/>
                    </div>
                </div>

                <div>
                    <div className="add-cost-form-fields">
                        <label className='add-cost-form-labels'>Category:</label>
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="food">Food</option>
                            <option value="health">Health</option>
                            <option value="housing">Housing</option>
                            <option value="sport">Sport</option>
                            <option value="education">Education</option>
                            <option value="transportation">Transportation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="add-cost-form-fields">
                        <label className='add-cost-form-labels'>Currency:</label>
                        <select value={currency} onChange={e => setCurrency(e.target.value)}>
                            <option value="ILS">ILS</option>
                            <option value="USD">USD</option>
                            <option value="GPB">GPB</option>
                            <option value="EUR">EUR</option>
                            <option value="CNY">CNY</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="add-cost-form-fields">
                        <label className='add-cost-form-labels'>Description: </label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)}
                                  placeholder="Enter description"></textarea>
                    </div>


                    <Button fullWidth='True' variant="contained" color="secondary" endIcon={<AddCard />}
                            onClick={() => {

                        // Validate if the necessary categories are exist
                        if (!sum || !category || !description) {
                            alert("please enter all field")
                            return;
                        }

                        // Passing the inputs into an array
                        setInputs([...inputs, {date, sum, category, currency, description}]);

                        //Using localStorage to save the input parameters
                        localStorage.setItem('inputs', JSON.stringify([...inputs, {
                            date,
                            sum,
                            category,
                            currency,
                            description
                        }]));

                        setSum(''); // Clear the date input
                        setCurrency(''); // Clear the item input
                        setCategory(''); // Clear the price input
                        setDate(''); // Reset the category to default
                        setDescription(''); // Clear the description input
                        alert("Cost added successfully");

                    }}>Add cost
                    </Button>
                </div>
            </div>


            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Sum</th>
                        <th>Category</th>
                        <th>Currency</th>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {inputs.map((input) => (
                    <tr>
                        <td>{index++}</td>
                        <td>{input.sum}</td>
                        <td>{input.category}</td>
                        <td>{input.currency}</td>
                        <td>{input.date}</td>
                        <td>{input.description}</td>

                        <Button
                                variant="outlined" startIcon={<DeleteIcon />} size="medium" color="error" onClick={() => {
                                    inputs.splice(inputs[index], 1); // Remove the item from the inputs state variable
                                    setInputs([...inputs]); // Update the inputs state variable
                                    LocalStorage.set('inputs', inputs); // Update local storage
                                }}
                        >
                            Delete cost
                        </Button>

                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
export default AddCostPage;
