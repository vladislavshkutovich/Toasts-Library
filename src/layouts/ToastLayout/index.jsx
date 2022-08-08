import React from 'react'
import toast from '../../components/ToastService'
import { StyledToastLayout } from './styled'

export const ToastLayout = ({
	id,
	backgroundColor,
	size,
	toastAnimation,
	children,
}) => {
	const handleDeleteToast = (event) => {
		toast.removeToast(event.target.id)
	}

	return (
		<StyledToastLayout
			draggable="true"
			id={id}
			backgroundColor={backgroundColor}
			size={size}
			toastAnimation={toastAnimation}
			onDrag={handleDeleteToast}>
			{children}
		</StyledToastLayout>
	)
}
