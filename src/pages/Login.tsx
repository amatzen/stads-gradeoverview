import { Button, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";

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

            <Select
                fullWidth
                defaultValue="na"
                sx={{
                    textAlign: 'left'
                }}
            >
                <MenuItem value="na" disabled>Vælg en institution</MenuItem>
                <MenuItem value="https://selvbprod.sdu.dk/prod/sb/">Syddansk Universitet</MenuItem>
                <MenuItem value="https://sb.aau.dk/sb-ad/sb/">Aalborg Universitet</MenuItem>
            </Select>

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
                size="large"
                fullWidth
            >Contained</Button>

        </Paper>
    )
}

export default LoginPage;