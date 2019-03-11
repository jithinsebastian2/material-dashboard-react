import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

export const styles = theme => ({
	notificationRoot: {
		backgroundColor: '#43a047',
		marginBottom: '20px'
	},
	notificationText: {
		fontFamily: 'Roboto',
		fontSize: '14px',
		display: 'flex',
		alignItems: 'center'
	}
});

const ActionSuccess = props => {
	const { classes } = props;
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center'
			}}
			open={true}
			autoHideDuration={2500}
			onClose={props.onCloseNotification}
		>
			<SnackbarContent
				onClose={props.onCloseNotification}
				className={classes.notificationRoot}
				message={
					<span id='message-id' className={classes.notificationText}>
						{props.msg}
					</span>
				}
			/>
		</Snackbar>
	);
};

export default withStyles(styles)(ActionSuccess);
