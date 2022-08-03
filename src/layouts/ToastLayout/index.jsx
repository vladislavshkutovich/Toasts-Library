import React from 'react'
import { StyledToastLayout } from './styled'
import { TOAST_SIZE } from '../../constants'

// todo прокинуть дефолтные значения чтобы посмотреть как выглядит
// todo здесь и в других компонентах
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
			size={TOAST_SIZE[size]}
			toastAnimation={toastAnimation}>
			{children}
		</StyledToastLayout>
	)
}
