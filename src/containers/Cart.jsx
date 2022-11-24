import React from 'react';
import {Modal, Box, Button} from '@mui/material'
import styles from '@styles/Cart.module.scss';

const Cart = ({open}) => {
	return (
		<Box>
			<Modal
				open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
				<Box>
					<ContentCart />
				</Box>
			</Modal>
		</Box>
	);
};

const ContentCart = () => {
	return (
		<div className={styles['letter-image']}>
			<div className={styles['animated-mail']}>
				<div className={styles['back-fold']}></div>
				<div className={styles.letter}>
					<div className={styles['letter-border']}></div>
					<div className={styles['letter-title']}></div>
					<div className={styles['letter-context']}></div>
					<div className={styles['letter-stamp']}>
						<div className={styles['letter-stamp-inner']}></div>
					</div>
				</div>
				<div className={styles['top-fold']}></div>
				<div className={styles.body}></div>
				<div className={styles['left-fold']}></div>
			</div>
			<div className={styles.shadow}></div>
		</div>
	)
}

export default Cart;
