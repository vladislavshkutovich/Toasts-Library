import React from 'react'
import { ToastCard } from './styled'
import { TOAST_POSITIONS } from '../../constants'
import PropTypes from 'prop-types'

export const ToastContainer = ({
	toastPosition = 'top-right',
}) => (
	<ToastCard
		id="container"
		position={TOAST_POSITIONS[toastPosition]}
	/>
)

ToastContainer.propTypes = {
	toastPosition: PropTypes.string.isRequired,
}
