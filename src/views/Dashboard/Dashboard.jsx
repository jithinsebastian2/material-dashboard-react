import React from 'react';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import { UserStatus, LocationData, BlogData } from './chartService';
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

class Dashboard extends React.Component {
	state = {
		value: 0
	};
	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};
	render() {
		const { classes } = this.props;
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader color='success'>
							<ChartistGraph
								className='ct-chart'
								data={UserStatus.data}
								type='Line'
								options={UserStatus.options}
								listener={UserStatus.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Users Status</h4>
							<p className={classes.cardCategory}>
								<span className={classes.successText}>
									<ArrowUpward className={classes.upArrowCardCategory} /> 22%
								</span>{' '}
								Users Logged in today.
							</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> updated 4 minutes ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader color='warning'>
							<ChartistGraph
								className='ct-chart'
								data={LocationData.data}
								type='Bar'
								options={LocationData.options}
								responsiveOptions={LocationData.responsiveOptions}
								listener={LocationData.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Locations Status</h4>
							<p className={classes.cardCategory}>Active Location</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> updated 20 minutes ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader color='danger'>
							<ChartistGraph
								className='ct-chart'
								data={BlogData.data}
								type='Line'
								options={BlogData.options}
								listener={BlogData.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Blog Details</h4>
							<p className={classes.cardCategory}>Pending blogs for approval</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> updated 1 minutes ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
