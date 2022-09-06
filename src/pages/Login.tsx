import { Button, Paper, TextField, Typography } from "@mui/material";

const LoginPage = () => {
    return (
        <Paper variant="outlined" sx={{
            textAlign: 'center',
            padding: '1rem'
        }}>
            <Typography
                variant='h5' component='h3'
                sx={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}
            >Log ind</Typography>

            <TextField
                required
                label="Brugernavn"
                fullWidth
                margin="normal"
            />
            
            <TextField
                required
                type="password"
                label="Adgangskode"
                fullWidth
                margin="normal"
            />

            <Button
                variant="contained"
                size="lg"
                fullWidth
            >Contained</Button>

        </Paper>
    )
}

export default LoginPage;