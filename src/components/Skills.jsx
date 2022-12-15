import React from 'react';
import Box from '@mui/material/Box';
import SkillText from '@containers/SkillText';
import ListSkill from '@containers/ListSkill';
import styles from '@styles/Skill.module.scss'

const Skills = () => {
	return (
		<Box className={styles.skillContent} >
			<SkillText />
			<ListSkill />
		</Box>
	);
};

export default Skills;
