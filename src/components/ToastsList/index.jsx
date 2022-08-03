import { Toast } from '../Toast'

export const ToastsList = (toasts) => {
	console.log(toasts)
	return toasts.map((el) => {
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
