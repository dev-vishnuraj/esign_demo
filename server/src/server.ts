require('dotenv-safe').config();
import App from './app';
import IndexRoute from '../src/routes/index.route';
import UserRoute from '../src/routes/user.route';
import validateEnv from '../src/utils/validateEnv';

validateEnv();

const app = new App(
	[
		new IndexRoute(),
		new UserRoute(),
	]
);

app.listen();