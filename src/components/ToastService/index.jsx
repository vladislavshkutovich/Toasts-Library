import { v4 as uuid } from 'uuid'
import {
	updateToastsList,
	renderToasts,
} from '../../helpers'
import { ToastsList } from '../ToastsList'

export class ToastService {
	constructor() {
		this.toasts = []
	}

	setContainer() {
		this.container = document.getElementById('container')
	}

	addToast = (...toastOptions) => {
		const [
			toastType,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
			toastAutoCloseIsOn,
			toastAutoCloseTime,
		] = toastOptions
		const id = uuid()
		let autoCloseTimeout = toastAutoCloseIsOn
			? setTimeout(
					() => this.removeToast(id),
					toastAutoCloseTime || 3000,
			  )
			: undefined
		this.toasts = updateToastsList(
			this.toasts,
			toastType,
			id,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
			autoCloseTimeout,
		)
		renderToasts(ToastsList(this.toasts), this.container)
	}

	removeToast = (toastId) => {
		this.toasts = this.toasts.filter(
			(toast) => toast.id !== toastId,
		)
		renderToasts(ToastsList(this.toasts), this.container)
	}
}
