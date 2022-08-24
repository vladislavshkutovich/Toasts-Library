import PropTypes from 'prop-types'

export const types = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	close: PropTypes.string.isRequired,
	titleColor: PropTypes.string,
	toastAnimation: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	autoCloseTimeout: PropTypes.func,
}
