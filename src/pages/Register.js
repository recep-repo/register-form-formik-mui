import React from 'react'
import { PersonAddAltOutlined } from '@mui/icons-material'
import { Container, Grid, Typography, TextField, Avatar, Button, Link} from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Box } from '@mui/system'
import CopyRight from '../components/Copyright'
import { useNavigate } from 'react-router-dom'


const Schema = Yup.object().shape({
    username: Yup.string()
        .required('Display name is required')
        .min(2, 'Too short')
        .max(15, 'Must be 15 char or less'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string()
        .required('No password provided')
        .min(8, 'Password is too short - should be 8 chars minimum')
        .matches(/\d+/, 'Password must have a number')
        .matches(/[a-z]+/, 'Password must have a lowercase')
        .matches(/[A-Z]+/, 'Password must have a uppercase')
        .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
    confirm: Yup.string()
        .required('No password provided')
        .min(8, 'Password is too short - should be 8 chars minimum')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

const Register = () => {
    const navigate = useNavigate()
    
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: ''
    }

    const handleSubmit = (values, {resetForm}) => {
        alert(
            `username: ${values.username}
            email: ${values.email}
            password: ${values.password}
            password2: ${values.confirm}`
        )
        resetForm()
        navigate('/login')

    }
    return (
        <Container
            sx={{
                marginTop: '2rem',
                height: 'calc(95vh - 1rem)',
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                textAlign:'center',
                padding:'1rem'
            }}
            maxWidth='sm'
        >
            <Avatar
                sx={{
                    margin: '1rem auto',
                    bgcolor: 'primary.main',
                    }}
            >
                <PersonAddAltOutlined />
            </Avatar>

            <Typography sx={{ margin: '1rem' }} variant='h4'>
                Sign Up
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={Schema}
            >{({
                values,
                handleChange,
                handleSubmit,
                touched, 
                errors,
                handleBlur

            }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                name='username' 
                                label="User Name" 
                                variant="outlined"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.username && errors.username}
                                error={touched.username && Boolean(errors.username)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth 
                                name='email' 
                                label="Email" 
                                variant="outlined"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.email && errors.email}
                                error={touched.email && Boolean(errors.email)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                type='password' 
                                name='password' 
                                label="Password" 
                                variant="outlined"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.password && errors.password}
                                error={touched.password && Boolean(errors.password)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                type='password' 
                                name='confirm' 
                                label="Confirm" 
                                variant="outlined"
                                value={values.confirm}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.confirm && errors.confirm}
                                error={touched.confirm && Boolean(errors.confirm)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                fullWidth 
                                item 
                                variant="contained"
                                type='submit'
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>)}
            </Formik>
            <p>
        Already have an account?
        <Link
          sx={{
            textDecoration: 'none',
            fontWeight: '600',
            paddingLeft: '0.5rem',
          }}
          href='#'
        >
          Login.
        </Link>
      </p>
      <Box mt={3}>
        <CopyRight />
      </Box>


        </Container>
    )
}

export default Register
