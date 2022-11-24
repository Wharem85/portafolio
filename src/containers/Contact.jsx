import React, {useRef, useState} from 'react';
import Cart from './Cart';
import { styled } from '@mui/material/styles';
import {Box, Typography, TextField, Grid} from '@mui/material';
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

	const sendEmail = (e) => {
		handleOpen();
		setTimeout(() => {
			handleClose();
		}, 20000);
		e.preventDefault();

		// emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, form.current, process.env.NEXT_PUBLIC_PUBLICKEY)
	}

	return (
		<Box className={styles.Contact}>
			<Box>
				<Typography className={styles.contact} variant="h2" gutterBottom>
					<span>Contact Me</span>
				</Typography>
				<Typography className={styles.text} variant="h5" gutterBottom>
					<span>I’m interested in freelance opportunities, especially ambitious</span><br/>
					<span>or large projects. However, if you have other request or</span><br/>
					<span>question, don’t hesitate to use the form.</span>
				</Typography>
			</Box>
			<Box className={styles['form-container']} ml={{xs: 4, sm: 8, md: 12}}>
				<form className={styles.form} ref={form} onSubmit={sendEmail}>
					<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
						<Grid item xs={8} sm={6} className={styles.grid}>
							<Inputs
								name="name"
								className={styles.inputs}
								placeholder="Name"
								fullWidth
								color="primary"
								variant="outlined" />
						</Grid>
						<Grid item xs={8} sm={6}>
							<Inputs
								name="email"
								className={styles.inputs}
								placeholder="Email"
								fullWidth
								type="email"
								variant="outlined" />
						</Grid>
						<Grid item xs={8} sm={12} className={styles['grid-subject']}>
							<Inputs
								name="subject"
								className={styles.inputs}
								placeholder="Subject"
								fullWidth
								variant="outlined" />
						</Grid>
						<Grid item xs={8} sm={12} className={styles['grid-messege']}>
							<Inputs
								name="message"
								className={styles.message}
								placeholder="Message"
								type="text"
								multiline
								rows={5}
								fullWidth
								variant="outlined" />
						</Grid>
						<Box className={styles['content-button-contact']}>
							<button className={styles['button-contact']} type="submit">
								<span>Send Message!</span>
							</button>
						</Box>
					</Grid>
				</form>
			</Box>
			<Cart open={open} />
		</Box>
	);
};

export default Contact;
