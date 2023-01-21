import React from 'react';
import {
	Box,
	Button,
	Divider,
	IconButton,
	Stack,
	Typography
} from '@mui/material';

import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';

import {
	Search,
	SearchIconWrapper,
	StyledInputBase
} from '../../components/Search';

const Chats = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '100vh',
				width: 320,
				backgroundColor: '#F8FAFF',
				boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)'
			}}>
			<Stack p={3} spacing={2}>
				<Stack
					direction="row"
					alignItems={'center'}
					justifyContent="space-between">
					<Typography varient="h5">Chats</Typography>
					<IconButton>
						<CircleDashed />
					</IconButton>
				</Stack>

				<Stack>
					<Search>
						<SearchIconWrapper>
							<MagnifyingGlass color="#709CE6" />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search..."
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Stack>

				<Stack spacing={1}>
					<Stack direction="row" alignItems="center" spacing={1.5}>
						<ArchiveBox size={24} />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
