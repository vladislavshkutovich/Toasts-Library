import { TestingToastsComponent } from '../components/TestingToastsComponent'

export default {
	title: 'Toast',
	argTypes: {
		toastType: {
			options: ['error', 'warning', 'success', 'info'],
			defaultValue: 'info',
			control: {
				type: 'radio',
			},
		},
		toastPosition: {
			options: [
				'top-right',
				'top-left',
				'bottom-right',
				'bottom-left',
			],
			defaultValue: 'top-left',
			control: {
				type: 'radio',
			},
		},
		title: {
			control: {
				type: 'text',
			},
		},
		titleColor: {
			control: {
				type: 'color',
			},
		},
		size: {
			options: ['small', 'medium', 'large'],
			defaultValue: 'medium',
			control: {
				type: 'radio',
			},
		},
		backgroundColor: {
			control: {
				type: 'color',
			},
		},
		toastAnimation: {
			options: ['from-top', 'from-bottom'],
			defaultValue: 'from-top',
			control: {
				type: 'radio',
			},
		},
		toastAutoClose: {
			control: {
				type: 'boolean',
			},
		},
		toastAutoCloseTime: {
			defaultValue: 3000,
			control: {
				type: 'number',
			},
		},
	},
}

export const ToastStory = ({
	toastType,
	toastPosition,
	size,
	title,
	titleColor,
	backgroundColor,
	toastAnimation,
	toastAutoClose,
	toastAutoCloseTime,
}) => {
	{
		return TestingToastsComponent(
			toastType,
			toastPosition,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
			toastAutoClose,
			toastAutoCloseTime,
		)
	}
}
