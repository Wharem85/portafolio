import React from 'react';
import Box from '@mui/material/Box';
import SkillText from '@containers/SkillText';
import ListSkill from '@containers/ListSkill';
import Experience from '@containers/Experience';

const Skills = () => {
	return (
		<Box ml={26} sx={{display: 'flex'}}>
			<SkillText />
			<ListSkill />
		</Box>
	);
};

export default Skills;
