import { Request, NextFunction, Response } from 'express';
import HttpException from '../exceptions/HttpException';

async function authMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	res.set('Cache-Control', 'no-store');
	const bearerToken: string | undefined = req.headers.authorization;
	const token: string | undefined = bearerToken && bearerToken.split(' ')[1];
	if (token) {
		next();
	} else {
		next(new HttpException(404, 'Authentication token missing'));
	}
}

export default authMiddleware;
