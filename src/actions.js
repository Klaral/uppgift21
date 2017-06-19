// action constants
const REGISTER_USER = 'REGISTER_USER',
	  LOGIN = 'LOGIN',
	  LOGOUT = 'LOGOUT',
	  DEPOSIT = 'DEPOSIT',
      BALANCE = 'BALANCE',
      WITHDRAW = 'WITHDRAW',
      TRANSFERFOUNDS = 'TRANSFERFOUNDS'

// create actions using functions
function actionRegisterUser(login, password, email) {
	return {
		type: REGISTER_USER,
		login, 
		password,
		email
	}
}
function actionLogin(login, password) {
	return { type: LOGIN, login, password }
}
function actionLogout() {
	return { type: LOGOUT }
}
function actionDeposit(deposit) {
	return { type: DEPOSIT, deposit }
}
function actionBalance(balance) {
	return { type: BALANCE, balance }
}
function actionWithdraw(withdraw) {
	return { type: WITHDRAW, withdraw }
}
function actionTransferfounds(transferfounds) {
	return { type: TRANSFERFOUNDS, transferfounds }
}
