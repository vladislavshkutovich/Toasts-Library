import React from 'react'
import { StyledToastLayout } from './styled'
import { TOAST_SIZE } from '../../constants'

// todo прокинуть дефолтные значения чтобы посмотреть как выглядит
// todo здесь и в других компонентах
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
