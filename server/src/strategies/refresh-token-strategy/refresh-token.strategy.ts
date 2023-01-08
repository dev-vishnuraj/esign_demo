import { Request, Response, NextFunction } from 'express';

// import jwt from 'jsonwebtoken';

const refreshToken = async (
	_req: Request,
	_res: Response,
	_next: NextFunction
) => {
	// const refreshToken = req.body.refreshToken;

	// if (refreshToken) {
	// 	const id = +jwt.decode(refreshToken)!;
	// 	const user = await User.findOne({
	// 		where: {
	// 			id,
	// 		},
	// 	});

	// 	if (user) {
	// 		const token = jwt.sign(user, process.env.JWT_REFRESH_SECRET, {
	// 			expiresIn: 600,
	// 		});
	// 		res.json({ jwt: token });
	// 	} else {
	// 		res.status(401);
	// 	}
	// } else {
	// 	res.status(401);
	// }
};

export default refreshToken;
