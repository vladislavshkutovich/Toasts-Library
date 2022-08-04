import React from 'react'

import { ToastLayout } from '../../layouts/ToastLayout'
import { ToastIcon } from '../ToastIcon'
import { ToastMessage } from '../ToastMessage'
import { ToastCloseButton } from '../ToastCloseButton'
import { TOAST_SIZE } from '../../constants'
import PropTypes from 'prop-types'

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
			<ToastMessage
				color={titleColor}
				title={title}
				size={TOAST_SIZE[size]}
			/>
		</ToastLayout>
	)
}

Toast.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	close: PropTypes.string.isRequired,
	titleColor: PropTypes.string,
	toastAnimation: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
}
