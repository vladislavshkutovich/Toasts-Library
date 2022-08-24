import PropTypes from 'prop-types'

export const types = {
	toastPosition: PropTypes.string.isRequired,
	toastOffsetX: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	toastOffsetY: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
}
