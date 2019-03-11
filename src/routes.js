// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LocationOn from '@material-ui/icons/LocationOn';
import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import AdminProfile from 'views/AdminProfile/AdminProfile.jsx';
import Maps from 'views/Maps/Maps.jsx';
import Users from './views/Users/Users';

const dashboardRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: Dashboard,
		component: DashboardPage,
		layout: '/admin'
	},
	{
		path: '/profile',
		name: 'Admin Profile',
		icon: Person,
		component: AdminProfile,
		layout: '/admin',
		shouldnotuseInSidebar: true
	},
	{
		path: '/users',
		name: 'Users',
		icon: Person,
		component: Users,
		layout: '/admin'
	},
	{
		path: '/maps',
		name: 'Maps',
		icon: LocationOn,
		component: Maps,
		layout: '/admin'
	}
];

export default dashboardRoutes;
