export interface User {
	id: Number;
	first_name: string;
	last_name: string;
	role_id: number;
	email: string;
	password: string;
	status: string;
	roles: {
		id: Number;
		role: string;
	};
}

export interface DataStoredInToken {
	id: number;
}

export interface TokenData {
	token: string;
	expiresIn: number;
}
