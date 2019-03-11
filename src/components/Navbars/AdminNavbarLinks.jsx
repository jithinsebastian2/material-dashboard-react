import React from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';
import Poppers from '@material-ui/core/Popper';
// @material-ui/icons
import Person from '@material-ui/icons/Person';
import Notifications from '@material-ui/icons/Notifications';
// core components
import Button from 'components/CustomButtons/Button.jsx';

import headerLinksStyle from 'assets/jss/material-dashboard-react/components/headerLinksStyle.jsx';
class HeaderLinks extends React.Component {
	state = {
		open: false
	};
	handleToggle = () => {
		this.setState(state => ({ open: !state.open }));
	};

	handleClose = event => {
		if (this.anchorEl.contains(event.target)) {
			return;
		}

		this.setState({ open: false });
	};
	gotoAdminProfile = () => {
		this.setState({ open: false });
		this.props.history.push('/admin/profile');
	};
	handleLogout = () => {};
	render() {
		const { classes } = this.props;
		const { open } = this.state;
		return (
			<div>
				<Button
					color={window.innerWidth > 959 ? 'transparent' : 'white'}
					justIcon={window.innerWidth > 959}
					simple={!(window.innerWidth > 959)}
					aria-label='Person'
					className={classes.buttonLink}
				>
					<Notifications className={classes.icons} />
					<Hidden mdUp implementation='css'>
						<p className={classes.linkText}>Profile</p>
					</Hidden>
				</Button>
				<div className={classes.manager}>
					<Button
						buttonRef={node => {
							this.anchorEl = node;
						}}
						color={window.innerWidth > 959 ? 'transparent' : 'white'}
						justIcon={window.innerWidth > 959}
						simple={!(window.innerWidth > 959)}
						aria-owns={open ? 'menu-list-grow' : null}
						aria-haspopup='true'
						onClick={this.handleToggle}
						className={classes.buttonLink}
					>
						<Person className={classes.icons} />
						<Hidden mdUp implementation='css'>
							<p onClick={this.handleClick} className={classes.linkText}>
								Notification
							</p>
						</Hidden>
					</Button>
					<Poppers
						open={open}
						anchorEl={this.anchorEl}
						transition
						disablePortal
						className={classNames({ [classes.popperClose]: !open }) + ' ' + classes.pooperNav}
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								id='menu-list-grow'
								style={{
									transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={this.handleClose}>
										<MenuList role='menu'>
											<MenuItem onClick={this.gotoAdminProfile} className={classes.dropdownItem}>
												Profile
											</MenuItem>
											<MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
												Logout
											</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Poppers>
				</div>
			</div>
		);
	}
}

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks));
