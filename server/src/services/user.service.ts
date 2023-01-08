import { SignupDto } from '../dtos/users.dto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HttpException from '../exceptions/HttpException';
import { DataStoredInToken, TokenData } from '../interfaces/user.interface';

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

	public async signup(params: SignupDto) {
		const { firstName, lastName, email, password } = params;
		const check_user_exists = await Users.findOne({
			where: {
				email: email.toLowerCase(),
			},
		});
		if (check_user_exists) {
			throw new HttpException(400, 'Email already exists. please login!');
		}
		const hashed_password = await bcrypt.hash(password, 10);
		const new_user = await Users.create({
			first_name: firstName,
			last_name: lastName,
			email: email.toLowerCase(),
			password: hashed_password,
		});
		return {
			firstName: new_user.first_name,
			lastName: new_user.last_name,
			email: new_user.email,
		};
	}
}

export default UserService;
