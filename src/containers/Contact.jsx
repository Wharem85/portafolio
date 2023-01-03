import React, {useRef, useState} from 'react';
import Cart from './Cart';
import { styled } from '@mui/material/styles';
import {Box, Typography, TextField, Grid} from '@mui/material';
import {Formik} from 'formik';
import emailjs from '@emailjs/browser';
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
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const form = useRef();

	return (
		<Box className={styles.Contact}>
			<Box>
				<Typography className={styles.contact} variant="h2" gutterBottom>
					<span>Contact Me</span>
				</Typography>
				<Typography className={styles.text} variant="h5" gutterBottom>
					<span>I’m interested in freelance opportunities, especially ambitious</span><br className={styles.textSpan} />
					<span>or large projects. However, if you have other request or</span><br className={styles.textSpan} />
					<span>question, don’t hesitate to use the form.</span>
				</Typography>
			</Box>
			<Box className={styles['form-container']}>
				<Formik
					initialValues={{
						name: '',
						email: '',
						subject: '',
						message: ''
					}}
					validate={values => {
						const errors = {};

						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}

						if(!values.name) {
							errors.name = 'Required'
						}
						if(!values.message) {
							errors.message = 'Required'
						}

						return errors;
					}}
					onSubmit={(values, {resetForm}) => {
							handleOpen();
							setTimeout(() => {
								handleClose();
							}, 2800);

							emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, form.current, process.env.NEXT_PUBLIC_PUBLICKEY)
							resetForm();
					}}
				>
					{( {values, errors, touched, handleChange, handleBlur, handleSubmit} ) => (
						<form className={styles.form} ref={form} onSubmit={handleSubmit}>
							<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
								<Grid item xs={8} sm={7} className={styles.grid}>
									<Inputs
										name="name"
										onChange={handleChange}
             				onBlur={handleBlur}
             				value={values.name}
										className={styles.inputs}
										placeholder="Name"
										fullWidth
										color="primary"
										variant="outlined" />
										<div className={styles.span}>{errors.name && touched.name && errors.name}</div>
								</Grid>
								<Grid item xs={8} sm={7}>
									<Inputs
										name="email"
										onChange={handleChange}
             				onBlur={handleBlur}
             				value={values.email}
										className={styles.inputs}
										placeholder="Email"
										fullWidth
										type="email"
										variant="outlined" />
										<div className={styles.span}>{errors.email && touched.email && errors.email}</div>
								</Grid>
								<Grid item xs={8} sm={7} className={styles['grid-subject']}>
									<Inputs
										name="subject"
										onChange={handleChange}
             				onBlur={handleBlur}
             				value={values.subject}
										className={styles.inputs}
										placeholder="Subject"
										fullWidth
										variant="outlined" />
								</Grid>
								<Grid item xs={8} sm={7} className={styles['grid-messege']}>
									<Inputs
										name="message"
										onChange={handleChange}
             				onBlur={handleBlur}
             				value={values.message}
										className={styles.message}
										placeholder="Message"
										type="text"
										multiline
										rows={5}
										fullWidth
										variant="outlined" />
										<div className={styles.span}>{errors.message && touched.message && errors.message}</div>
								</Grid>
								<Box className={styles['content-button-contact']}>
									<button className={styles['button-contact']} type="submit">
										<span>Send Message!</span>
									</button>
								</Box>
							</Grid>
						</form>
					)}
				</Formik>
			</Box>
			<Cart open={open} />
		</Box>
	);
};

export default Contact;
