import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardAvatar from 'components/Card/CardAvatar.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import avatar from 'assets/img/faces/admin.jpeg';

const styles = {
	cardCategoryWhite: {
		color: 'rgba(255,255,255,.62)',
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		marginBottom: '0'
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: '300',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none'
	}
};

function AdminProfile(props) {
	const { classes } = props;
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<Card>
						<CardHeader color='primary'>
							<h4 className={classes.cardTitleWhite}>Edit Profile</h4>
							<p className={classes.cardCategoryWhite}>Complete your profile</p>
						</CardHeader>
						<CardBody>
							<GridContainer>
								<GridItem xs={12} sm={12} md={5}>
									<CustomInput
										id='company-disabled'
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											disabled: true
										}}
										labelText={'Company Address'}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={3}>
									<CustomInput
										labelText='Username'
										id='username'
										formControlProps={{
											fullWidth: true
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText='Email address'
										id='email-address'
										formControlProps={{
											fullWidth: true
										}}
									/>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText='First Name'
										id='first-name'
										formControlProps={{
											fullWidth: true
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText='Last Name'
										id='last-name'
										formControlProps={{
											fullWidth: true
										}}
									/>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText='City'
										id='city'
										formControlProps={{
											fullWidth: true
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText='Country'
										id='country'
										formControlProps={{
											fullWidth: true
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									<CustomInput
										labelText='Postal Code'
										id='postal-code'
										formControlProps={{
											fullWidth: true
										}}
									/>
								</GridItem>
							</GridContainer>
						</CardBody>
						<CardFooter>
							<Button color='primary'>Update Profile</Button>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card profile>
						<CardAvatar profile>
							<a href='#pablo' onClick={e => e.preventDefault()}>
								<img src={avatar} alt='...' />
							</a>
						</CardAvatar>
						<CardBody profile>
							<h6 className={classes.cardCategory}>Lorem ipsum dolor sit amet.</h6>
							<h4 className={classes.cardTitle}>Jithin</h4>
							<p className={classes.description}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa labore sunt
								incidunt.
							</p>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}

export default withStyles(styles)(AdminProfile);
