import React from 'react'
import { ToastCard } from './styled'
import { TOAST_POSITIONS } from '../../constants'
import PropTypes from 'prop-types'

export const ToastContainer = ({
	toastPosition = 'top-right',
	toastOffsetX = 0,
	toastOffsetY = 0,
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
	toastOffsetX: PropTypes.number,
	toastOffsetX: PropTypes.number,
}
