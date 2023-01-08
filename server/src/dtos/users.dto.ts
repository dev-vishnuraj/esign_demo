import { IsEmail, IsString } from 'class-validator';

export class RegisterUserDto {
	@IsString()
	public first_name: string;

	@IsString()
	public last_name: string;

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
