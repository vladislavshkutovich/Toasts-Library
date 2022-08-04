import React from 'react'
import { StyledToastMessage } from './styled'
import PropTypes from 'prop-types'

export const ToastMessage = ({ color, title, size }) => (
	<StyledToastMessage color={color} size={size}>
		{title}
	</StyledToastMessage>
)

ToastMessage.propTypes = {
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	size: PropTypes.object.isRequired,
}
