import { Stack, Box } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import Chats from './Chats';

const GeneralApp = () => {
	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* chat */}
			<Chats />

			{/* Conversatiom */}
			<Box
				sx={{
					height: '100%',
					width: 'calc(100vw - 420px)',
					backgroundColor: '#fff'
				}}></Box>
		</Stack>
	);
};

export default GeneralApp;
