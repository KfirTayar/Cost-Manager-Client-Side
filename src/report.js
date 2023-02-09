import React from 'react';
import './addcost.css';
import './report.css'
import {useState, useEffect} from 'react';
import localStorage from "./localStorage";

// Imports from MUI lib
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Assessment from "@mui/icons-material/Assessment";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

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
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#cfd8dc',
    },
}));

const GetReportPage = () => {

    // The title will update at every refresh
    useEffect(() => {
        document.title = 'Get Report';
    }, []);

    // Creating variables with an initial state
    const [year, setYear] = useState('1990');
    const [month, setMonth] = useState('1');
    const [costs, setCosts] = useState([]);

    // Getting a filtered report from the local storage
    async function getReport() {
        const report = await localStorage.getFilteredReport(month, year, 'costs');
        const reportTotalSum = await localStorage.getFilteredTotalSum(month, year, 'costs');
        console.log(reportTotalSum);
        if(report.length > 0) {
            setCosts(report);
            alert("Report filtered by: year=" + year + " month=" + month +
                "\nThe total sum of this report is=" + reportTotalSum);
        }
        else {
            alert("There are no costs on this date");
        }
    }

    // Creates index for the report table
    let index = 1;

    return (
        <div className="get-report-page">
            <h2>Please insert the date you want to get report</h2>

            {/* Creates a form that collects information for the report */}
            <div className="get-report-form">
                    <div className="get-report-year">
                        <label className='get-report-form-labels'>Year:</label>
                        <Stack sx={{ width: 300 }} spacing={1} direction="row">
                            <Slider
                                aria-label="year"
                                color={"secondary"}
                                aria-labelledby={'year'}
                                orientation="horizontal"
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
                            valueLabelDisplay="auto"
                            min={1}
                            max={12}
                            defaultValue={1}
                            onChange={e => setMonth(e.target.value)} required
                        />
                    </Stack>
                </div>
                <div className="get-report-form-button">
                    <Button fullWidth='True' variant="contained" color="secondary" endIcon={<Assessment />}
                    onClick={getReport}>Get Report
                    </Button>
                </div>
            </div>

            {/* Creates a table that represents the current report filtered by year and month */}
            <div className='add-cost-form-table'>
                <TableContainer component={Paper}>
                    <Table size={'small'}  sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead className='add-cost-form-header'>
                            <TableRow>
                                <StyledTableCell>Index</StyledTableCell>
                                <StyledTableCell align="right">Sum</StyledTableCell>
                                <StyledTableCell align="right">Category</StyledTableCell>
                                <StyledTableCell align="right">Currency</StyledTableCell>
                                <StyledTableCell align="right">Date</StyledTableCell>
                                <StyledTableCell align="right">Description</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {costs.map((cost) => (
                                <StyledTableRow key={cost.index}>
                                    <StyledTableCell component="th" scope="row">{index++}</StyledTableCell>
                                    <StyledTableCell align="right">{cost.sum}</StyledTableCell>
                                    <StyledTableCell align="right">{cost.category}</StyledTableCell>
                                    <StyledTableCell align="right">{cost.currency}</StyledTableCell>
                                    <StyledTableCell align="right">{cost.date}</StyledTableCell>
                                    <StyledTableCell align="right">{cost.description}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
export default GetReportPage;