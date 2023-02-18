// Kfir Tayar 208991430
// Adi Gertel 206481129

// Imports from MUI lib
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

// Create navbar
const pages = ['Add costs', 'Get report', 'About'];

function Navbar() {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <div><img src='logo192.png' width='50' height='50' alt='logo'/></div>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 1.5,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        &nbsp;Cost Manager App {/* Code for one space: &nbsp; */}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={pages[0]}
                            href={'/'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {pages[0]}
                        </Button>
                        <Button
                        key={pages[1]}
                        href={'/report'}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                             {pages[1]}
                        </Button>
                            <Button
                            key={pages[2]}
                            href={'/about'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                        {pages[2]}
                            </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;