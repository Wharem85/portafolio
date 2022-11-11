import React from 'react';
import Sidebar from '@components/Sidebar';
import styles from '@styles/Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles.Layout}>
			<Sidebar />
			{children}
		</div>
	);
};

export default Layout;
