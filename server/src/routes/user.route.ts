import { Router } from 'express';
import UserController from '../controllers/user.controller';
import Route from '../interfaces/routes.interface';
// import authMiddleware from '../middlewares/auth.middleware';

class UserRoute implements Route {
	public path = '/users';
	public router = Router();
	public userController = new UserController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {

		this.router.post(
			`${this.path}/login`,
			this.userController.login
		);

		this.router.post(
			`${this.path}/signup`,
			this.userController.signup
		);

	}
}

export default UserRoute;
