import React from 'react';
import {Box, Typography} from '@mui/material';
import Link from 'next/link';
import styles from '@styles/Skill.module.scss';

const SkillText = () => {
	return (
		<Box className={styles.SkillText}>
			<Box className={styles['content-title']}>
				<Typography className={styles.title}>
					<span className={styles.spanTitle}>Skills and Experience</span>
				</Typography>
			</Box>
			<Box className={styles['content-text']}>
				<Typography className={styles.textSkill} variant="h5" gutterBottom>
					<span className={styles.span}>Since I started my journey as a developer almost 4 years ago, I have been learning a lot to </span><br className={styles.space} />
					<span className={styles.span}>become a Full Stack developer, I have been improving my skills as a programmer doing </span><br className={styles.space}/>
					<span className={styles.span}>my own projects as a freelancer.</span><br />
					<br />
					<span className={styles.span}>I create websites that are fast, easy to use and built with best practices. The main area of </span><br className={styles.space}/>
					<span className={styles.span}>my expertise is front-end development, HTML, CSS, JS, and ReactJs with building small </span><br className={styles.space}/>
					<span className={styles.span}>to medium web applications, features, animations, and coding interactive designs.</span><br />
					<br />
					<span className={styles.span}>I also have knowledge on the Backend area with NodeJs, ExpressJs, PassportJs, also in </span><br className={styles.space}/>
					<span className={styles.span}>database with MySQL and PostgreSQL.</span><br />
					<br />
					<span className={styles.span}>
						Visit my <a className={styles.link} rel="Linkedin" href="https://linkedin.com/in/wmonterrozo" target="_blank">
								LinkedIn
							</a> profile for more details or just <Link className={styles.link} rel="contact" href="/contact">
								contact
							</Link> me.</span><br />
				</Typography>
			</Box>
		</Box>
	);
};

export default SkillText;
