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
  name: '',
  country: '',
  phone: '',
  class: '',
  checkbox: false,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  country: Yup.string().required('Country is required'),
  phone: Yup.string()
  .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
  .required('Phone number is required'),
  class: Yup.string().required('Class is required'),
  checkbox: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export const SignUp = ({ open, onClose }) => {
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

  const handleCountryChange = (event, setFieldValue) => {
    const selectedCountry = countries.find(country => country.name === event.target.value);
    setFieldValue('country', event.target.value);
    setFieldValue('phone', selectedCountry.code);
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
  <DialogTitle  >Join Toppr</DialogTitle>
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
            <TextField
              fullWidth id="filled-basic"
              variant="filled"
              margin="normal"
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name}
              InputLabelProps={{style: {color: "black"}}}   inputProps={{style: {color: "black"}}}

              style={{color: "black" , backgroundColor: "#E8F0FE"}}
            />
           <FormControl fullWidth id="filled-basic" variant="filled" margin="normal" error={touched.class && errors.class}>
            <Typography variant="body1" sx={{marginLeft:"10px"}} > Class</Typography>
  <ButtonGroup
    color="primary"
    variant="contained"
    fullWidth
  >
    <Button
      onClick={() => setFieldValue("class", "5th")}
      variant={values.class === "5th" ? "contained" : "outlined"}
    >
      5th
    </Button>
    <Button
      onClick={() => setFieldValue("class", "6th")}
      variant={values.class === "6th" ? "contained" : "outlined"}
    >
      6th
    </Button>
    <Button
      onClick={() => setFieldValue("class", "7th")}
      variant={values.class === "7th" ? "contained" : "outlined"}
    >
      7th
    </Button>
    <Button
      onClick={() => setFieldValue("class", "8th")}
      variant={values.class === "8th" ? "contained" : "outlined"}
    >
      8th
    </Button>
    <Button
      onClick={() => setFieldValue("class", "9th")}
      variant={values.class === "9th" ? "contained" : "outlined"}
    >
      9th
    </Button>
    <Button
      onClick={() => setFieldValue("class", "10th")}
      variant={values.class === "10th" ? "contained" : "outlined"}
    >
      10th
    </Button>
    <Button
      onClick={() => setFieldValue("class", "11th")}
      variant={values.class === "11th" ? "contained" : "outlined"}
    >
      11th
    </Button>
    <Button
      onClick={() => setFieldValue("class", "12th")}
      variant={values.class === "12th" ? "contained" : "outlined"}
    >
      12th
    </Button>
  </ButtonGroup>
  {touched.class && errors.class && <Box color="error.main">{errors.class}</Box>}
</FormControl>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.checkbox}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="checkbox" 
                         color="primary" style={{ Color: "black", backgroundColor:"#E8F0FE"}}
                      />
                    }
                    label="I accept the terms and conditions"
                    margin="normal"
                  />
                  {touched.checkbox && errors.checkbox && <Box color="error.main">{errors.checkbox}</Box>}
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
                      Sign up
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
