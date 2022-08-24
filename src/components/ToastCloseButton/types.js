import PropTypes from 'prop-types'

export const types = {
	id: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	size: PropTypes.object.isRequired,
	autoCloseTimeout: PropTypes.func,
}
