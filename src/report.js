import React from 'react';
import './addcost.css';
import {useState, useEffect} from 'react';
import LocalStorage from "./localStorage";
import AddCostPage from "./addcost";
import './report.css'

// Components from MUI lib
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Assessment from "@mui/icons-material/Assessment";
import DeleteIcon from "@mui/icons-material/Delete";

function valuetext(value) {
    return `${value}`;
}

const GetReportPage = () => {

    useEffect(() => {
        document.title = 'Get Report';
    }, []);

    useEffect(() => {
        // This useEffect hook retrieves the inputs saved in local storage and sets them to the inputs state variable
        const inputsFromLocalStorage = LocalStorage.get('inputs');
        if (inputsFromLocalStorage) {
            setInputs(inputsFromLocalStorage);
        }
    }, []);
    
    // These state variables are used to store the values of the inputs
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [inputs, setInputs] = useState([]);

    var index = 1;

    return (
        <div className="get-report-page">
            <h1>Cost Manager App<br/>
                Please insert the date you want to get report</h1>
            <div className="get-report-form">
                    <div className="get-report-year">
                        <label className='get-report-form-labels'>Year:</label>
                        <Stack sx={{ width: 300 }} spacing={1} direction="row">
                            <Slider
                                aria-label="year"
                                color={"secondary"}
                                aria-labelledby={'year'}
                                orientation="horizontal"
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                min={1900}
                                max={2023}
                                defaultValue={1900}
                                onChange={e => setYear(e.target.value)} required
                            />
                        </Stack>
                    </div>

                <div className="get-report-month">
                    <label className='get-report-form-labels'>Month:</label>
                    <Stack sx={{ width: 300 }} spacing={1} direction="row">
                        <Slider
                            aria-label="year"
                            color={"secondary"}
                            aria-labelledby={'year'}
                            orientation="horizontal"
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            min={1}
                            max={12}
                            defaultValue={1}
                            onChange={e => setMonth(e.target.value)} required
                        />
                    </Stack>
                </div>

                <div className="get-report-form-button">
                    <Button fullWidth='True' variant="outlined" color="secondary" endIcon={<Assessment />}
                    onClick={() => {

                        // Passing the inputs into an array
                        setInputs([...inputs, {year, month}]);

                        alert("Report");

                    }}>Get Report
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

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetReportPage;