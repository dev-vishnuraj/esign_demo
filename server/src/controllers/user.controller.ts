import { Request, Response, NextFunction } from 'express';
import validateVersion from '../utils/apiVersionController';
import UserService from '../services/user.service';
import { LoginDto, SignupDto } from '../dtos/users.dto';
import passport from 'passport';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/user.interface';
const Users = require('../../models').Users;

class UserController {
	public userService = new UserService();

	public signup = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const data: SignupDto = req.body;
			const response = await this.userService.signup(data);
			res.status(200).json({
				data: response,
				message: 'Registration successful',
				error: false,
				version: validateVersion(req.baseUrl),
			});
		} catch (error) {
			next(error);
		}
	};

	public login = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const data: LoginDto = req.body;
			const check_valid_user = await Users.findOne({
				where: {
					email: data.email.toLowerCase(),
				},
			});
			if (!check_valid_user) {
				throw new HttpException(403, 'Email not found');
			}
			passport.authenticate(
				'login-strategy',
				{ session: false },
				async (err: HttpException, user: User) => {
					if (err) {
						next(err);
					} else {
						const access_token = this.userService.createToken(user, false);
						const refresh_token = this.userService.createToken(user, true);
						res.status(200).json({
							access_token,
							refresh_token,
							message: 'login success',
							error: false,
							version: validateVersion(req.baseUrl),
						});
					}
				}
			)(req, res, next);
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
