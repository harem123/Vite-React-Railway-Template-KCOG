import { useState } from 'react'
import {
Button,
Paper,
Switch,
ThemeProvider,
Typography,} from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
function App() {
  
  
  const [isDark, setIsDark] = useState(false)
  const themeLight = createTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });
  
  const themeDark = createTheme({
    palette: {
      background: {
        default: "#222222",
        paper:"#141b2d"
      },
      text: {
        primary: "#ffffff"
      },
      primary:{
        main: "#4cceac",
        
      },
      secondary:{
        main:"#70d8bd",
        
      },
    }
  });
  const theme = createTheme({
    palette:{
      type: isDark ? "dark" : "light",
      primary:{
        main: "#141b2d",
        
      },
      secondary:{
        main:"#70d8bd",
        
      },
      
    }
  })
  return (
  <ThemeProvider theme={isDark ? themeLight : themeDark}>
    <CssBaseline />
   <Paper style= {{height: '100vh', display: 'flex',
                    flexDirection:'column', justifyContent:'center'
    }}>
    <Switch checked={isDark} onChange={e=>setIsDark(!isDark)} />
    <Typography variant='h2'>
      Aqui un poco de texto </Typography>
      <div>
        <Typography>
          Aqui unos botones que hacen algo 
        </Typography>
        <Button variant='contained' color='primary'  >Button 1</Button>
        <Button variant='contained' color='secondary'>Button 2</Button>
      </div>
    </Paper>
  </ThemeProvider>
  )
}

export default App