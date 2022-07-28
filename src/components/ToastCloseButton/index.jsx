import React from 'react'
import { StyledCloseButton } from './styled'

export const ToastCloseButton = ({ id, src, size }) => {
	return (
		<StyledCloseButton id={id} size={TOAST_SIZE[size]}>
			<img src={src} />
		</StyledCloseButton>
	)
}
