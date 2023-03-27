import React, { useState } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Box,
  ButtonGroup,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@mui/material';
const countries = [
    { name: 'United States', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Australia', code: '+61' },
    { name: 'New Zealand', code: '+64' },
    { name: 'India', code: '+91' },
    { name: 'China', code: '+86' },
    { name: 'Japan', code: '+81' },
    { name: 'South Korea', code: '+82' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'Spain', code: '+34' },
    { name: 'Italy', code: '+39' },
    { name: 'Brazil', code: '+55' },
    { name: 'Mexico', code: '+52' },
  ];
const initialValues = {
    country: '',
    phone: '',  
  };
 

  const handleCountryChange = (event, setFieldValue) => {
    const selectedCountry = countries.find(country => country.name === event.target.value);
    setFieldValue('country', event.target.value);
    setFieldValue('phone', selectedCountry.code);
  };
  
 

const validationSchema = Yup.object({
  country: Yup.string().required('Country is required'),
  phone: Yup.string()
  .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
  .required('Phone number is required'), 
});

export const Login = ({ open, onClose }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const handleSubmit = (values, actions) => {
    setOtpSent(true);
    actions.setSubmitting(false);
  };

  const handleOtpSubmit = (values, actions) => {
    console.log(values);
    onClose();
  };

   
  

  return (
    <Dialog PaperProps={{
  style: {
    backgroundColor: "white",
    color: "black",
    maxHeight: "80vh",
    overflow: "hidden",
    boxShadow: "none",
    borderRadius: 8,
  },
}} open={open} onClose={onClose}>
  <DialogTitle  >Login</DialogTitle>
  <DialogContent dividers={scroll === 'paper'}>
    {!otpSent ? (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
      <Form onSubmit={handleSubmit}>
        <FormControl  fullWidth id="filled-basic"
          variant="filled" margin="normal" error={touched.country && errors.country}>
          <InputLabel id="country-label" style={{color: "black"}}>Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            value={values.country}
            onChange={e => handleCountryChange(e, setFieldValue)}
            onBlur={handleBlur}
            style={{color: "black", backgroundColor: "#E8F0FE"}}
          >
            {countries.map(country => (
              <MenuItem key={country.name} value={country.name} style={{color: "black"}}>
                {country.name}
              </MenuItem> 
            ))}
          </Select>
          {touched.country && errors.country && <Box color="error.main">{errors.country}</Box>}
        </FormControl>
            <TextField
              
              fullWidth id="filled-basic"
              variant="filled"
              margin="normal"
              label="Phone number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && errors.phone}
              helperText={touched.phone && errors.phone}
              InputLabelProps={{style: {color: "black"}}}    inputProps={{style: {color: "black"}}}
              style={{color: "black", backgroundColor: "#E8F0FE"}}
            />
 
       
  
                  
                  <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                      Get OTP
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik initialValues={{ otp: '' }} onSubmit={handleOtpSubmit}>
              {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} >
                 <TextField id="filled-basic" label="OTP" variant="filled"
                    name="otp"  
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}  InputLabelProps={{style: {color: "black",}}}    inputProps={{style: {color: "black"}}}
                    style={{color: "black", backgroundColor: "#E8F0FE"}}
                  />
                  <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                     Login
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </DialogContent>
      </Dialog>
);
};      
