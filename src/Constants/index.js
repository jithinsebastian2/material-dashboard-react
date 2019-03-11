export const USER_STATUS = {
	ACTIVE: 'Active',
	INACTIVE: 'Inactive',
	DIDABLED: 'Disabled'
};
export const UserStatusDropdownOptions = (function(statusObj) {
	let options = [];
	for (let key in statusObj) options.push({ label: statusObj[key], value: statusObj[key] });
	return options;
})(USER_STATUS);
