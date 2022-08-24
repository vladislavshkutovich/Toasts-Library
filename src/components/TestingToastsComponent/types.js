import PropTypes from 'prop-types'

export const types = {
	toastType: PropTypes.string.isRequired,
	toastPosition: PropTypes.object.isRequired,
	size: PropTypes.object.isRequired,
	title: PropTypes.string,
	titleColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	toastAnimation: PropTypes.string.isRequired,
	toastAutoCloseIsOn: PropTypes.bool.isRequired,
	toastAutoCloseTime: PropTypes.number.isRequired,
	toastOffsetX: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	toastOffsetY: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
}
