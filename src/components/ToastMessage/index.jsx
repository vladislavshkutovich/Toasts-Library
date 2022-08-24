import React from 'react'
import { StyledToastMessage } from './styled'
import { types } from './types'

export const ToastMessage = ({ color, title, size }) => (
	<StyledToastMessage color={color} size={size}>
		{title}
	</StyledToastMessage>
)

ToastMessage.propTypes = types
