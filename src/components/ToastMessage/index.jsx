import React from 'react'
import { StyledToastMessage } from './styled'

export const ToastMessage = ({
	color = '#FFFFFF',
	title = 'Info Toast Example',
	size,
}) => (
	<StyledToastMessage color={color} size={size}>
		{title}
	</StyledToastMessage>
)
