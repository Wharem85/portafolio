import React from 'react';
import { styled, withTheme } from '@mui/material/styles';
import {Box, Typography, TextField, Grid} from '@mui/material';
import { Formik, Form } from 'formik';
import styles from '@styles/Contact.module.scss';

const Inputs = styled(TextField)({
	'& label.Mui-focused': {
		borderColor: '#1d1d1d'
  },
  '& .MuiInput-underline:after': {
		borderColor: '#1d1d1d',
    borderBottomColor: '#08fdd8',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
			borderColor: '#1d1d1d',
      borderBottomColor: '#08fdd8',
    },
    '&.Mui-focused fieldset': {
			borderColor: '#1d1d1d',
      borderBottomColor: '#08fdd8',
    },
  },
})

const Contact = () => {
	return (
		<Box className={styles.Contact}>
			<Typography className={styles.contact} variant="h2" gutterBottom>
				<span>Contact Me</span>
			</Typography>
			<Typography className={styles.text} variant="h5" gutterBottom>
				<span>I’m interested in freelance opportunities, especially ambitious</span><br/>
				<span>or large projects. However, if you have other request or</span><br/>
				<span>question, don’t hesitate to use the form.</span>
			</Typography>
			<Box>
				<Formik
					initialValues={{
						name: '',
						email: '',
						subject: '',
						message: ''
					}}
					validate={values => {
						const errors = {};

						if(!values.email) {
							errors.email = 'Required';
						}

						if(!values.message) {
							errors.message = 'Required';
						}
						return errors;
					}}
					onSubmit={(values, {resetForm}) => {
						console.log('prueba');
					}}>
					{({values, handleChange, handleBlur}) => (
						<Form className={styles.form}>
							<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
								<Grid item xs={8} sm={6} className={styles.grid}>
									<Inputs
										name="name"
										className={styles.inputs}
										placeholder="Name"
										fullWidth
										color="primary"
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
										variant="outlined" />
								</Grid>
								<Grid item xs={8} sm={6} className={styles.grid}>
									<Inputs
										name="email"
										className={styles.inputs}
										placeholder="Email"
										fullWidth
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
										type="email"
										variant="outlined" />
								</Grid>
								<Grid item xs={8} sm={6} className={styles.grid, styles['grid-subject']}>
									<Inputs
										name="subject"
										className={styles.inputs}
										placeholder="Subject"
										value={values.subject}
										fullWidth
										onChange={handleChange}
										onBlur={handleBlur}
										variant="outlined" />
								</Grid>
								<Grid item xs={8} sm={6} className={styles.grid, styles['grid-messege']}>
									<Inputs
										name="message"
										className={styles.inputs}
										placeholder="Message"
										value={values.message}
										type="text"
										multiline
										maxRows={6}
										fullWidth
										onChange={handleChange}
										onBlur={handleBlur}
										variant="outlined" />
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</Box>
		</Box>
	);
};

export default Contact;
