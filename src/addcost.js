// Kfir Tayar 208991430
// Adi Gertel 206481129

import React from 'react';
import './addcost.css';
import {useState, useEffect} from 'react';
import localStorage from "./localstorage";

// Imports from MUI lib
import Button from '@mui/material/Button';
import AddCard from '@mui/icons-material/AddCard';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Table style configuration
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));
const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#cfd8dc',
    },
}));

const AddCostPage = () => {

    // The title and the local storage table will update at every refresh
    useEffect(() => {
        document.title = 'Cost Manager App';

        async function updatedTable() {
            const newTable = await localStorage.getCosts('costs');
            if(newTable)
                setCosts(newTable);
        }
        updatedTable().then().catch(reportError);

    }, []);

    // Creating variables with an initial state
    const [date, setDate] = useState('');
    const [sum, setSum] = useState(0);
    const [category, setCategory] = useState('food');
    const [currency, setCurrency] = useState('ILS');
    const [description, setDescription] = useState('');
    const [costs, setCosts] = useState([]);

    // Clearing the fields after pressing the button "ADD COST"
    function clearButtons(){
        setDate('');
        setSum(0);
        setCategory('food');
        setCurrency('ILS');
        setDescription('');
    }

    async function addCost() {
        // Validates if the necessary categories are exist
        if (!sum || !category || !description) {
            alert('One or more of the required fields are not found!');
            return;
        }

        // Validates the input of the sum property
        if (sum < 0){
            alert('The sum property has invalid input');
            return;
        }

        // Using local Storage to save the input parameters
        setCosts([...costs, {date, sum, category, currency, description}]);
        await localStorage.addCost('costs', [...costs, {date, sum, category, currency, description}]);

        // Clearing the content of buttons
        clearButtons();
        alert('New cost has been created!');
    }

    let index = 1; // Creates index for the costs table
    const today = new Date().toISOString().split('T')[0]; // Creates current date for date validation

    return (
        <div className='add-cost-page'>
            <h2>Please insert your costs</h2>

            {/* Creates a form that collects information on the costs */}
            <div className='add-cost-form'>
                <div>
                    <div className='add-cost-form-fields'>
                        <label className='add-cost-form-labels'>Date:</label>
                        <input type='date' value={date}
                               onChange={e => setDate(e.target.value)}
                               max={today}/>
                    </div>
                    <div className='add-cost-form-fields'>
                        <label className='add-cost-form-labels'>Sum:</label><input type='number' value={sum}
                                                                                   onChange={e => setSum(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <div className='add-cost-form-fields'>
                        <label className='add-cost-form-labels'>Category:</label>
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                            <option value='food'>Food</option>
                            <option value='health'>Health</option>
                            <option value='housing'>Housing</option>
                            <option value='sport'>Sport</option>
                            <option value='education'>Education</option>
                            <option value='transportation'>Transportation</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div className='add-cost-form-fields'>
                        <label className='add-cost-form-labels'>Currency:</label>
                        <select value={currency} onChange={e => setCurrency(e.target.value)}>
                            <option value='ILS'>ILS</option>
                            <option value='USD'>USD</option>
                            <option value='GPB'>GPB</option>
                            <option value='EUR'>EUR</option>
                            <option value='CNY'>CNY</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className='add-cost-form-fields'>
                        <label className='add-cost-form-labels'>Description: </label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <Button fullWidth='True' variant='contained' color='secondary' endIcon={<AddCard />}
                            onClick={addCost}> Add cost
                    </Button>
                </div>
            </div>

            {/* Creates a table that represents the current local storage */}
            <div className='add-cost-form-table'>
                <TableContainer component={Paper}>
                    <Table size={'small'}  sx={{ minWidth: 700 }} aria-label='customized table'>
                        <TableHead className='add-cost-form-header'>
                            <TableRow>
                                <StyledTableCell>Index</StyledTableCell>
                                <StyledTableCell align='right'>Sum</StyledTableCell>
                                <StyledTableCell align='right'>Category</StyledTableCell>
                                <StyledTableCell align='right'>Currency</StyledTableCell>
                                <StyledTableCell align='right'>Date</StyledTableCell>
                                <StyledTableCell align='right'>Description</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {costs.map((cost) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component='th' scope='row'>{index++}</StyledTableCell>
                                    <StyledTableCell align='right'>{cost.sum}</StyledTableCell>
                                    <StyledTableCell align='right'>{cost.category}</StyledTableCell>
                                    <StyledTableCell align='right'>{cost.currency}</StyledTableCell>
                                    <StyledTableCell align='right'>{cost.date}</StyledTableCell>
                                    <StyledTableCell align='right'>{cost.description}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
export default AddCostPage;
