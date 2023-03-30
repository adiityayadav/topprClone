import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(https://www.shutterstock.com/image-illustration/contact-icons-on-gray-background-260nw-1497394331.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  field: {
    marginBottom: theme.spacing(2),
  },
}));

const Block1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // Handle form submission here
            console.log(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Field
                as={TextField}
                className={classes.field}
                name="name"
                label="Name"
                fullWidth id="filled-basic"
              variant="filled"
              InputLabelProps={{style: {color: "black"}}}   inputProps={{style: {color: "black"}}}

              style={{color: "black" , backgroundColor: "#E8F0FE"}}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name && errors.name}
                error={touched.name && Boolean(errors.name)}
              />
              <Field
                as={TextField}
                className={classes.field}
                name="email"
                label="Email"
                fullWidth id="filled-basic"
              variant="filled"
              InputLabelProps={{style: {color: "black"}}}   inputProps={{style: {color: "black"}}}

              style={{color: "black" , backgroundColor: "#E8F0FE"}}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <Field
                as={TextField}
                className={classes.field}
                name="message"
                label="Message"
                fullWidth id="filled-basic"
                variant="filled"
                InputLabelProps={{style: {color: "black"}}}   inputProps={{style: {color: "black"}}}

                style={{color: "black" , backgroundColor: "#E8F0FE"}}
                multiline
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.message && errors.message}
                error={touched.message && Boolean(errors.message)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Block1;
