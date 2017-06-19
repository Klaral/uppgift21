// example state
var initialState = {
	login: null,
	userView: 'register-page',  
	balance: 0
}

// returns the next state
function rootReducer(state = initialState, action) {
	
	switch( action.type ) {
		case REGISTER_USER:
			var newstate = Object.assign({}, state);
			newstate.login = action.login;
			return newstate;
		case LOGIN:
            var newstate = Object.assign({}, state);
			newstate.login = action.login;
			return newstate;
        case LOGOUT:
            var newstate = Object.assign({}, state);
			newstate.login = null;
			return newstate;
        case DEPOSIT:
            var newstate = Object.assign({}, state);
			newstate.balance = action.deposit;
            return newstate;
        case BALANCE:
            var newstate = Object.assign({}, state);
			newstate.balance = action.balance;
            return newstate;
        case WITHDRAW:
            var newstate = Object.assign({}, state);
			newstate.balance = action.withdraw;
            return newstate;
        case TRANSFERFOUNDS:
            var newstate = Object.assign({}, state);
			newstate.balance = action.transferfounds;
            return newstate;
			
	}
}