import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/users';
import FormGroup from '@mui/material/FormGroup';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp({open,setOpen}) {
  const dispatch = useDispatch()
  const [checked,setChekced] = React.useState(false)
  const [addedUser,setAddedUser] = React.useState({
    isStudent : false 
  })
console.log(addUser,"this is the object")

const handleSubmit = async (e) => {
e.preventDefault()
try {
  dispatch(addUser(addedUser)).then((res) => {
    setOpen(false)
  })
} catch (error) {
  console.log(error)
}
}
  const handleChange = (e)=> {
    setAddedUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
 
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
               onChange={handleChange}
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="Full Name"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
               onChange={handleChange}

                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
               onChange={handleChange}

                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sx={{mb:2}}>
                <TextField
               onChange={handleChange}

                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  autoComplete="new-password"
                />
              </Grid>
              </Grid>
              <Grid item xs={12}  sx={{mb:2}}>
                <TextField
               onChange={handleChange}

                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="text"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}  sx={{mb:2}}>
              <Autocomplete
              disabled={checked}
               onChange={(e,v)=>{
               
                setAddedUser((prev)=>{
                  return {...prev,role:v}
                })
               }}
          
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option) => option}
            options={["admin","manager","student","teacher"]}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Role" />}
          />
              </Grid>
              <Grid item xs={12}>
              <FormGroup>
      <FormControlLabel control={<Checkbox onChange={(e)=>{
       
          setChekced(e.target.checked)
          setAddedUser((prev)=>({...prev,isStudent:e.target.checked,role:"student"}))
        

      }} color="secondary" />} label="is student?" />
   
   
    </FormGroup>
              </Grid>
              
            
            <button
              onClick={handleSubmit}
           className='btn btn-primary w-100' style={{backgroundColor:"#6635df"}}
            >
              Save
            </button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}