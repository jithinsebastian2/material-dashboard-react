var Chartist = require('chartist');

var delays = 80,
	durations = 500;
var delays2 = 80,
	durations2 = 500;

// ##############################
//  Users Status
// #############################

const UserStatus = {
	data: {
		labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
		series: [[2500, 4200, 3300, 5600, 7200, 6000, 8000]]
	},
	options: {
		lineSmooth: Chartist.Interpolation.cardinal({
			tension: 0
		}),
		low: 500,
		high: 10000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
		chartPadding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	},
	// for animation
	animation: {
		draw: function(data) {
			if (data.type === 'line' || data.type === 'area') {
				data.element.animate({
					d: {
						begin: 600,
						dur: 700,
						from: data.path
							.clone()
							.scale(1, 0)
							.translate(0, data.chartRect.height())
							.stringify(),
						to: data.path.clone().stringify(),
						easing: Chartist.Svg.Easing.easeOutQuint
					}
				});
			} else if (data.type === 'point') {
				data.element.animate({
					opacity: {
						begin: (data.index + 1) * delays,
						dur: durations,
						from: 0,
						to: 1,
						easing: 'ease'
					}
				});
			}
		}
	}
};

// ##############################
// Active Locations
// #############################

const LocationData = {
	data: {
		labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
		series: [[542, 443, 320, 780, 553, 453, 326]]
	},
	options: {
		axisX: {
			showGrid: false
		},
		low: 0,
		high: 1000,
		chartPadding: {
			top: 0,
			right: 5,
			bottom: 0,
			left: 0
		}
	},
	responsiveOptions: [
		[
			'screen and (max-width: 640px)',
			{
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function(value) {
						return value[0];
					}
				}
			}
		]
	],
	animation: {
		draw: function(data) {
			if (data.type === 'bar') {
				data.element.animate({
					opacity: {
						begin: (data.index + 1) * delays2,
						dur: durations2,
						from: 0,
						to: 1,
						easing: 'ease'
					}
				});
			}
		}
	}
};

// ##############################
// Blog
// #############################

const BlogData = {
	data: {
		labels: ['12am', '3pm', '6pm', '9pm', '12pm'],
		series: [[10, 20, 30, 40, 50]]
	},
	options: {
		lineSmooth: Chartist.Interpolation.cardinal({
			tension: 0
		}),
		low: 0,
		high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
		chartPadding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	},
	animation: {
		draw: function(data) {
			if (data.type === 'line' || data.type === 'area') {
				data.element.animate({
					d: {
						begin: 600,
						dur: 700,
						from: data.path
							.clone()
							.scale(1, 0)
							.translate(0, data.chartRect.height())
							.stringify(),
						to: data.path.clone().stringify(),
						easing: Chartist.Svg.Easing.easeOutQuint
					}
				});
			} else if (data.type === 'point') {
				data.element.animate({
					opacity: {
						begin: (data.index + 1) * delays,
						dur: durations,
						from: 0,
						to: 1,
						easing: 'ease'
					}
				});
			}
		}
	}
};

module.exports = {
	UserStatus,
	LocationData,
	BlogData
};
