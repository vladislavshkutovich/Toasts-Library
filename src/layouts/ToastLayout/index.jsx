import React from 'react'
import { StyledToastLayout } from './styled'

export const ToastLayout = ({
	key,
	backgroundColor,
	size,
	toastAnimation,
	children,
}) => {
	return (
		<StyledToastLayout
			key={key}
			backgroundColor={backgroundColor}
			size={TOAST_SIZE[size]}
			toastAnimation={toastAnimation}>
			{children}
		</StyledToastLayout>
	)
}
