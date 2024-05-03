import { createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
        palette: {
            primary: {
              main: '#FFFFFF', // Change this to your primary color
            },
            secondary: {
                main: "#FFFF00"
            },
        },
        typography: {
            body1: {
                fontFamily: 'cursive',
                color:"white"


            },
            h3: {
                fontFamily: 'poppins',
                color: "azure"
            },
            p: {
                color:"gray"
            }
        }
    })
export default darkTheme;