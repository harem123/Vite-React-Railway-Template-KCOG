import { useState } from 'react'
import {
Button,
Paper,
Switch,
ThemeProvider,
Typography,Card,CardActions,CardContent,CardMedia} from "@material-ui/core"

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
      <Card  sx={{ 
        maxWidth: 345 ,background: "red" }}  >
      <CardMedia
        component="img"
        alt="dev image"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          titutlo aqui
        </Typography>
        <Typography variant="body2" color="text.secondary">
         informacion aqui
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Paper>
  </ThemeProvider>
  )
}

export default App