// ----------------------------------------------------------------------
// '/app' path based routing instead of hardcoding with LINK fro react-router-dom

function path(root, sublink) {
	return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	general: {
		app: path(ROOTS_DASHBOARD, 'app')
	}
};
