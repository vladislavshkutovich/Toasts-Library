class ToastService {
	constructor() {
		this.toasts = []
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
	}

	generateToast = (toastOptions) => {
		return {
			id: uuid(),
			...toastOptions,
		}
	}
}
