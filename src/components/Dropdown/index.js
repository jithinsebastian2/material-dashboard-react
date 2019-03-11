import React, { Component, Fragment } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#4183d7' } // Purple and green play nicely together.
	},
	typography: {
		useNextVariants: true
	}
});
class Dropdown extends Component {
	state = {
		selectedValues: '',
		labelWidth: 0
	};
	componentWillMount() {
		this.setState({
			selectedValues: this.props.selectedValues || ''
		});
	}
	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		});
	}
	componentWillReceiveProps(nextProps) {
		console.log('props');
		if (JSON.stringify(nextProps.selectedValues) !== JSON.stringify(this.state.selectedValues)) {
			console.log('set');
			this.setState({ selectedValues: nextProps.selectedValues });
		}
	}
	handleChange = event => {
		this.setState({ selectedValues: event.target.value });
		this.props.onSelect && this.props.onSelect(event.target.value);
	};
	render() {
		const isDisabled = this.props.disabled || false;
		return (
			<MuiThemeProvider theme={theme}>
				<div
					className={'from-meterial-custom-select ' + this.props.formClass}
					autoComplete='off'
					style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
				>
					<FormControl
						disabled={isDisabled}
						className={this.props.formControlClass}
						error={this.props.error ? true : false}
						variant='outlined'
					>
						<Fragment>
							<InputLabel
								disabled={isDisabled}
								htmlFor='outlined'
								style={{
									color: this.props.error ? '#b00020' : isDisabled ? '#adadad' : '#000000',
									opacity: this.props.error ? '1' : '0.7'
								}}
								ref={ref => {
									this.InputLabelRef = ref;
								}}
								className={this.props.inputLabelClass}
							>
								{this.props.defaultTitle}
							</InputLabel>
							<Select
								disabled={isDisabled}
								value={this.state.selectedValues}
								onChange={this.handleChange}
								className={
									this.props.error
										? this.props.selectClass + '-error'
										: isDisabled
										? this.props.selectClass + '-disabled'
										: this.props.selectClass
								}
								inputProps={{ name: 'name' }}
								input={<OutlinedInput labelWidth={this.state.labelWidth} id='outlined' />}
							>
								{this.props.option.map((subject, index) => (
									<MenuItem
										value={subject.value}
										key={index}
										name={subject.value}
										className={`${this.props.menuItemClass} ${
											this.state.selectedValues === subject.value ? 'selected-option' : ''
										}`}
									>
										{subject.label}
									</MenuItem>
								))}
							</Select>
						</Fragment>
					</FormControl>
				</div>
			</MuiThemeProvider>
		);
	}
}

Dropdown.defaultProps = {
	renderValueContainer: 'renderValueContainer',
	renderValueText: 'renderValueText',
	renderValueImage: 'renderValueImage',
	formHelperTextClass: 'material-ui-form-text-class',
	error: null,
	formControlClass: 'material-ui-form-control',
	inputLabelClass: 'material-ui-label',
	defaultTitle: '',
	selectClass: 'material-ui-select',
	menuItemClass: 'material-ui-menu-item',
	multiSelectMenuItemClass: 'multi-select-material-ui-menu-item',
	option: [{ label: 'One', value: 'one' }, { label: 'Two', value: 'two' }, { label: 'Three', value: 'three' }]
};
Dropdown.propTypes = {
	error: PropTypes.bool,
	formHelperTextClass: PropTypes.string,
	errorMessage: PropTypes.string,
	renderValueContainer: PropTypes.string,
	renderValueText: PropTypes.string,
	renderValueImage: PropTypes.string,
	menuItemClass: PropTypes.string,
	formClass: PropTypes.string,
	formControlClass: PropTypes.string,
	inputLabelClass: PropTypes.string,
	title: PropTypes.string,
	selectClass: PropTypes.string,
	subjectData: PropTypes.array
};
export default Dropdown;
