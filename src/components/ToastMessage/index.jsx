import React from 'react'
import { StyledToastMessage } from './styled'

export const ToastMessage = ({ color, title }) => (
	<StyledToastMessage color={color}>
		{title}
	</StyledToastMessage>
)
