import React from 'react'
import { ToastCard } from './styled'
import { TOAST_POSITIONS } from '../../constants'
import PropTypes from 'prop-types'

export const ToastContainer = ({
	toastPosition = 'top-right',
	toastOffsetX,
	toastOffsetY,
}) => {
	const side = toastPosition.includes('right')
		? 'end'
		: 'start'

	return (
		<ToastCard
			id="container"
			position={TOAST_POSITIONS[toastPosition]}
			toastOffsetX={toastOffsetX}
			toastOffsetY={toastOffsetY}
			side={side}
		/>
	)
}

ToastContainer.propTypes = {
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
