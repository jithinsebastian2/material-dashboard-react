export const UserService = (function() {
	let Users = {
		1000: {
			id: 1000,
			name: 'Jithin M Baby',
			email: 'jithin.m.baby@gmail.com',
			status: 'Active', //Inactive, Disabled,
			isLoggedin: 'True', //False,
			loginOn: '',
			logoutOn: ''
		},
		1001: {
			id: 1001,
			name: 'Thomas LA',
			email: 'thomas@gmail.com',
			status: 'Inactive', //Inactive, Disabled,
			isLoggedin: 'True', //False,
			loginOn: '',
			logoutOn: ''
		},
		1002: {
			id: 1002,
			name: 'Sam',
			email: 'sam@gmail.com',
			status: 'Disabled', //Inactive, Disabled,
			isLoggedin: 'False', //False,
			loginOn: '',
			logoutOn: ''
		},
		1003: {
			id: 1003,
			name: 'Celin',
			email: 'celin@gmail.com',
			status: 'Active', //Inactive, Disabled,
			isLoggedin: 'True', //False,
			loginOn: '',
			logoutOn: ''
		},
		1004: {
			id: 1004,
			name: 'Ram',
			email: 'ram@gmail.com',
			status: 'Inactive', //Inactive, Disabled,
			isLoggedin: 'True', //False,
			loginOn: '',
			logoutOn: ''
		},
		1005: {
			id: 1005,
			name: 'Surya',
			email: 'surya@gmail.com',
			status: 'Disabled', //Inactive, Disabled,
			isLoggedin: 'False', //False,
			loginOn: '',
			logoutOn: ''
		},
		1006: {
			id: 1006,
			name: 'Bob',
			email: 'bob@gmail.com',
			status: 'Active', //Inactive, Disabled,
			isLoggedin: 'True', //False,
			loginOn: '',
			logoutOn: ''
		},
		1007: {
			id: 1007,
			name: 'Aditi',
			email: 'aditi@gmail.com',
			status: 'Inactive', //Inactive, Disabled,
			isLoggedin: 'False', //False,
			loginOn: '',
			logoutOn: ''
		}
	};
	function getNewId() {
		let keyArr = Object.keys(Users);
		let lastKey = keyArr[keyArr.length - 1];
		return ++lastKey;
	}
	function fetchAllUsers() {
		return Object.values(Users);
	}
	function getUser(id) {
		return Users[id];
	}
	function updateUserInfo(id, status) {
		Users[id].status = status;
	}
	function createUser(userInfo) {
		Users[getNewId()] = userInfo;
	}
	return {
		getUsers: fetchAllUsers,
		getUserInfo: getUser,
		updateStatus: updateUserInfo,
		addUser: createUser
	};
})();
