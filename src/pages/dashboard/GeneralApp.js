import { Stack } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import Chats from './Chats';

const GeneralApp = () => {
	return (
		<>
			{/* chat */}
			<Chats />
		</>
	);
};

export default GeneralApp;
