import React from 'react'

// import { ToastLayout } from '@/layouts/ToastLayout'
// import { ToastIcon } from '@/components/ToastIcon'
// import { ToastMessage } from '@/components/ToastMessage'
// import { ToastCloseButton } from '@/components/ToastCloseButton'

import { ToastLayout } from '../../layouts/ToastLayout'
import { ToastIcon } from '../ToastIcon'
import { ToastMessage } from '../ToastMessage'
import { ToastCloseButton } from '../ToastCloseButton'
import { TOAST_SIZE } from '../../constants'

export const Toast = ({
	id,
	icon,
	size,
	title,
	close,
	titleColor,
	toastAnimation,
	backgroundColor,
}) => {
	return (
		<ToastLayout
			key={id}
			id={id}
			backgroundColor={backgroundColor}
			size={TOAST_SIZE[size]}
			toastAnimation={toastAnimation}>
			<ToastCloseButton
				id={id}
				src={close}
				size={TOAST_SIZE[size]}
			/>
			<ToastIcon
				src={icon}
				size={TOAST_SIZE[size]}
				alt="#"
			/>
			<ToastMessage color={titleColor} title={title} />
		</ToastLayout>
	)
}
