import { Button, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LoginPage = () => {
    const [stadsUrl, setStadsUrl] = useState<string>("na");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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
                onChange={(e) => setStadsUrl(e.target.value)}
                value={stadsUrl}
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
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            
            <TextField
                required
                type="password"
                label="Adgangskode"
                fullWidth
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <Button
                variant="contained"
                size="large"
                fullWidth
            >Log in</Button>

        </Paper>
    )
}

export default LoginPage;