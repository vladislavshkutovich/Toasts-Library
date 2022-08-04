import { Toast } from '../Toast'

export const ToastsList = (toasts) => {
	return toasts.map((el) => {
		// Short circuiting with "OR" operator for custom settings from user
		return (
			<Toast
				key={el.id}
				id={el.id}
				size={el.size || 'medium'}
				title={el.title || el.TITLE}
				titleColor={el.titleColor || el.COLOR}
				backgroundColor={
					el.backgroundColor || el.BACKGROUND_COLOR
				}
				close={el.CLOSE}
				icon={el.ICON}
				toastAnimation={el.toastAnimation}
			/>
		)
	})
}
