import {
	Box,
	Button,
	Divider,
	IconButton,
	Stack,
	Typography,
	Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';

import {
	Search,
	SearchIconWrapper,
	StyledInputBase
} from '../../components/Search';

import { ChatList } from '../../data/index';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { useTheme } from '@emotion/react';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""'
		}
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0
		}
	}
}));

// chat element
const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: '100%',
				borderRadius: 1,
				backgroundColor:
					theme.palette.mode === 'light'
						? '#fff'
						: theme.palette.background.default
			}}
			p={2}>
			<Stack
				direction="row"
				alignItems={'center'}
				justifyContent="space-between">
				<Stack direction="row" spacing={2}>
					{online ? (
						<StyledBadge
							overlap="circular"
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							variant="dot">
							<Avatar src={img} />
						</StyledBadge>
					) : (
						<Avatar src={img} />
					)}

					<Stack spacing={0.3}>
						<Typography variant="subtitle2">{name}</Typography>
						<Typography variant="caption">{msg}</Typography>
					</Stack>
				</Stack>

				<Stack spacing={2} alignItems="center">
					<Typography variant="caption" sx={{ fontWeight: 600 }}>
						{time}
					</Typography>

					<Badge color="primary" badgeContent={unread}></Badge>
				</Stack>
			</Stack>
		</Box>
	);
};

const Chats = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: 'relative',
				width: 320,
				backgroundColor:
					theme.palette.mode === 'light'
						? '#F8FAFF'
						: theme.palette.background.paper,
				boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)'
			}}>
			<Stack p={3} spacing={2} sx={{ height: '100vh' }}>
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

				<Stack
					direction="column"
					sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
					<SimpleBarStyle timeout={500} clickOnTrack={false}>
						<Stack spacing={2.4}>
							<Typography variant="subtitle2" sx={{ color: '#676767' }}>
								Pinned
							</Typography>
							{ChatList.filter(el => el.pinned).map(el => (
								<ChatElement {...el} />
							))}
						</Stack>

						<Stack spacing={2.4}>
							<Typography variant="subtitle2" sx={{ color: '#676767' }}>
								All Chats
							</Typography>
							{ChatList.map(el => (
								<ChatElement {...el} />
							))}
						</Stack>
					</SimpleBarStyle>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
