import React from 'react'
import { Toast } from '../Toast'

export const ToastsList = (toasts) => {
	return toasts.map(
		({
			id,
			size,
			title,
			titleByDefault,
			titleColor,
			colorByDefault,
			backgroundColor,
			backgroundColorByDefault,
			closeIconByDefault,
			iconByDefault,
			toastAnimation,
		}) => {
			return (
				<Toast
					key={id}
					id={id}
					size={size || 'medium'}
					title={title || titleByDefault}
					titleColor={titleColor || colorByDefault}
					backgroundColor={
						backgroundColor || backgroundColorByDefault
					}
					close={closeIconByDefault}
					icon={iconByDefault}
					toastAnimation={toastAnimation}
				/>
			)
		},
	)
}
