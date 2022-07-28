import React from 'react'
import { StyledToastMessage } from './styled'

export const ToastMessage = ({
	color = '#FFFFFF',
	title = 'Info Toast Example',
}) => (
	<StyledToastMessage color={color}>
		{title}
	</StyledToastMessage>
)
