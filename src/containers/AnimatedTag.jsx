import React from 'react';
import styles from '@styles/Animated.module.scss';

const AnimatedTag = () => {
	return (
		<div className={styles.content}>
			<div className={styles.cursor}></div>

			<ul className={styles['tags-cloud']}>
					<li className={styles.tag}><span className={styles.wrap}>HTML</span></li>
					<li className={styles.tag}><span className={styles.wrap}>SCSS</span></li>
					<li className={styles.tag}><span className={styles.wrap}>CSS</span></li>
					<li className={styles.tag}><span className={styles.wrap}>TAILWINDCSS</span></li>
					<li className={styles.tag}><span className={styles.wrap}>MATERIAL UI</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Javascript</span></li>
					<li className={styles.tag}><span className={styles.wrap}>ReactJs</span></li>
					<li className={styles.tag}><span className={styles.wrap}>NextJs</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Formik</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Webpack</span></li>
					<li className={styles.tag}><span className={styles.wrap}>React Native</span></li>
					<li className={styles.tag}><span className={styles.wrap}>NodeJs</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Docker</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Frontend</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Backend</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Git</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Linux</span></li>
					<li className={styles.tag}><span className={styles.wrap}>Rest API's</span></li>
			</ul>
		</div>
	);
};

export default AnimatedTag;
