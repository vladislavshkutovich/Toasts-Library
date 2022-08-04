import React from 'react'
import { StyledToastLayout } from './styled'
import { TOAST_SIZE } from '../../constants'

export const ToastLayout = ({
	id,
	backgroundColor,
	size,
	toastAnimation,
	children,
}) => {
	return (
		<StyledToastLayout
			id={id}
			backgroundColor={backgroundColor}
			size={size}
			toastAnimation={toastAnimation}>
			{children}
		</StyledToastLayout>
	)
}
