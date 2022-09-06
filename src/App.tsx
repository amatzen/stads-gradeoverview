import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import LoginPage from "./pages/Login";

export type StepType = 'login' | 'table';

function App() {
  const [step, setStep] = useState<StepType>('login');

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Box sx={{
        marginBottom: '2em',
        textAlign: 'center'
      }}>
        <Typography variant="h3" component="h1">STADS karaktervisning</Typography>
      </Box>


      <Box sx={{
        marginBottom: '2em'
      }}>
        <Stepper alternativeLabel activeStep={0}>
          <Step key="login">
            <StepLabel>Log ind</StepLabel>
          </Step>
          
          <Step key="table">
            <StepLabel>Se karakterer</StepLabel>
          </Step>
        </Stepper>
      </Box>

      {Boolean(step == 'login') &&
        <Box sx={{
          maxWidth: '420px',
          margin: '0 auto'
        }}>
          <LoginPage />
        </Box>
      }
    </Container>
  )
}

export default App
