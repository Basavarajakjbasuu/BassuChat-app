import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';

// config
import { DEFAULT_PATH } from '../config';
import LoadingScreen from '../components/LoadingScreen';

// lazy loading and HOC
const Loadable = Component => props => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <DashboardLayout />,
			children: [
				{ element: <Navigate to={DEFAULT_PATH} replace />, index: true },
				{ path: 'app', element: <GeneralApp /> },

				// fallback
				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to="/404" replace /> }
			]
		},
		{ path: '*', element: <Navigate to="/404" replace /> }
	]);
}

const GeneralApp = Loadable(
	lazy(() => import('../pages/dashboard/GeneralApp'))
);
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
