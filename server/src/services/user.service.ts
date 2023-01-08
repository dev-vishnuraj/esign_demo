import { LoginDto } from '../dtos/users.dto';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import HttpException from '../exceptions/HttpException';
import {
	DataStoredInToken,
	TokenData,
	User,
} from '../interfaces/user.interface';

const Users = require('../../models').Users;

class UserService {
	public createToken(user: any, refresh: boolean): TokenData {
		const dataStoredInToken: DataStoredInToken = {
			id: user.id,
		};
		const secret: string = refresh
			? (process.env.JWT_REFRESH_SECRET as string)
			: (process.env.JWT_ACCESS_SECRET as string);
		const expiresIn: number = refresh ? 1209600000 : 60 * 60;

		return {
			expiresIn,
			token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
		};
	}

	public async login(params: LoginDto) {
		const { email } = params;
		const check_valid_user = await Users.findOne({
			where: {
				email: email.toLowerCase(),
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
					throw new HttpException(403, err.message);
				} else {
					const access_token = this.createToken(user, false);
					const refresh_token = this.createToken(user, true);
					return { access_token, refresh_token };
				}
			}
		);
	}
}

export default UserService;
