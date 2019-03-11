import React, { Component, Fragment } from 'react';
import { UserTable } from './UserTable';
import { UserService } from './UserService';
import ActionSuccess from '../../components/Snackbar';

export default class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notifySuccessAction: false,
			labelToShow: ''
		};
	}
	onUpdateUserStatus = (userId, newStatus) => {
		UserService.updateStatus(userId, newStatus);
		this.setState({
			notifySuccessAction: true,
			labelToShow: `You have update ${UserService.getUserInfo(userId).name} status to ${newStatus} successfully!`
		});
	};
	render() {
		return (
			<Fragment>
				<UserTable tableData={UserService.getUsers()} onUpdateStatus={this.onUpdateUserStatus} />
				{this.state.notifySuccessAction && this.renderActionSuccess()}
			</Fragment>
		);
	}
	renderActionSuccess = () => {
		return (
			<ActionSuccess
				msg={this.state.labelToShow}
				onCloseNotification={() => this.setState({ notifySuccessAction: false })}
			/>
		);
	};
}
