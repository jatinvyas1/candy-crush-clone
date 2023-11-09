export enum AuthActionType {
	LOGIN_REQUEST = 'LOGIN_REQUEST',
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_FAILED = 'LOGIN_FAILED',

	LOGOUT_REQUEST = 'LOGOUT_REQUEST',
	LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
	LOGOUT_FAILED = 'LOGOUT_FAILED',

	SIGNUP_REQUEST = 'SIGNUP_REQUEST',
	SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
	SIGNUP_FAILED = 'SIGNUP_FAILED',

	PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST',
	PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS',
	PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED',

	SET_LOCALE_REQUEST = 'SET_LOCALE_REQUEST',
	SET_LOCALE_FAILED = 'SET_LOCALE_FAILED',
	SET_LOCALE_SUCCESS = 'SET_LOCALE_SUCCESS',

	RESET_AUTH = 'RESET_AUTH'
}
