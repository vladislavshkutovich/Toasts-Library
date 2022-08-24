import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../themes'
import { ToastLayout } from '../../layouts/ToastLayout'
import { ToastIcon } from '../ToastIcon'
import { ToastMessage } from '../ToastMessage'
import { ToastCloseButton } from '../ToastCloseButton'
import { ErrorBoundary } from '../ErrorBoundary'
import { TOAST_SIZE } from '../../constants'
import { types } from './types'

export const Toast = ({
	id,
	icon,
	size,
	title,
	close,
	titleColor,
	toastAnimation,
	backgroundColor,
	autoCloseTimeout,
}) => {
	return (
		<ThemeProvider theme={theme}>
			<ErrorBoundary>
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
						autoCloseTimeout={autoCloseTimeout}
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
			</ErrorBoundary>
		</ThemeProvider>
	)
}

Toast.propTypes = types
