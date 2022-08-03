import {
	INFO_TOAST,
	WARNING_TOAST,
	ERROR_TOAST,
	SUCCESS_TOAST,
} from '../constants'
import { render } from 'react-dom'

export const updateToastsList = (
	toasts,
	toastType,
	id,
	size,
	title,
	titleColor,
	backgroundColor,
	toastAnimation,
) => {
	let currentToastType
	switch (toastType) {
		case 'error':
			currentToastType = ERROR_TOAST
			break
		case 'warning':
			currentToastType = WARNING_TOAST
			break
		case 'success':
			currentToastType = SUCCESS_TOAST
			break
		case 'info':
			currentToastType = INFO_TOAST
			break
	}
	return [
		...toasts,
		{
			...currentToastType,
			id,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
		},
	]
}

export const renderToasts = (element, container) =>
	render(element, container)
