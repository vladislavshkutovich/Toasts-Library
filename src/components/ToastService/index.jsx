import { v4 as uuid } from 'uuid'
import {
	updateToastsList,
	renderToasts,
} from '../../helpers'
import { ToastsList } from '../ToastsList'

class ToastService {
	constructor() {
		this.toasts = []
	}

	setContainer() {
		this.container = document.getElementById('container')
	}

	getAllToasts = () => {
		return this.toasts
	}

	addToast = (toast) => {
		if (this.toasts.length < 3) {
			this.toasts.push(toast)
		} else {
			return
		}
	}

	removeToast = (toastId) => {
		this.toasts = this.toasts.filter(
			(toast) => toast.id !== toastId,
		)
		renderToasts(ToastsList(this.toasts), this.container)
	}

	generateToast = (...toastOptions) => {
		const [
			toastType,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
		] = toastOptions
		const id = uuid()

		this.toasts = updateToastsList(
			this.toasts,
			toastType,
			id,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
		)

		renderToasts(ToastsList(this.toasts), this.container)
	}
}

const toast = new ToastService()
export default toast
