import { IsEmail, IsString } from 'class-validator';

export class SignupDto {
	@IsString()
	public firstName: string;

	@IsString()
	public lastName: string;

	@IsEmail()
	public email: string;

	@IsString()
	public password: string;
}

export class LoginDto {
	@IsEmail()
	public email: string;

	@IsString()
	public password: string;
}


