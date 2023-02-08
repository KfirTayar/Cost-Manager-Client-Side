import React from 'react';
import './about.css';
import {useEffect} from 'react';

//
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AboutPage = () => {

    // The title will update at every refresh
    useEffect(() => {
        document.title = 'About Page';
    }, []);

    // Creating Cards for the team members
    const bull = (
        <Box
            component="span"
            sx={{display: 'inline-block', mx: '4px', transform: 'scale(1)'}}
        >
            •
        </Box>
    );

    return (
        <div className="about-page">
            <h2>About the team members</h2>
            <div className="about-page-cards">
                <Card sx={{backgroundColor:'lavender', minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{mb: 2.5}} variant="h5" component="div">
                            {bull}Kfir Tayar
                        </Typography>
                        <Typography sx={{mb: 2.5}} color="text.secondary">
                            ID: 208991430<br/>
                            Email: kfirtayar145@gmail.com
                        </Typography>
                        <Typography variant="body2">
                            3rd year Computer Science student at HIT
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{backgroundColor:'lavender', minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{mb: 2.5}} variant="h5" component="div">
                            {bull}Adi Gertel
                        </Typography>
                        <Typography sx={{mb: 2.5}} color="text.secondary">
                            ID: 208991430<br/>
                            Email: kfirtayar145@gmail.com
                        </Typography>
                        <Typography variant="body2">
                            3rd year Computer Science student at HIT
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
export default AboutPage;


