import { Request, Response, NextFunction } from 'express';
import validateVersion from '../utils/apiVersionController';
import UserService from '../services/user.service';
import { LoginDto } from '../dtos/users.dto';

class UserController {
	public userService = new UserService();

	public login = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const data: LoginDto = req.body;
			const response = await this.userService.login(data);
			res.status(200).json({
				data: response,
				message: 'Login successful',
				error: false,
				version: validateVersion(req.baseUrl),
			});
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
