import React from 'react'
import { StyledCloseButton, StyledSvgIcon } from './styled'
import { toast } from '../TestingToastsComponent'
import { types } from './types'

export const ToastCloseButton = ({ id, src, size }) => {
	const handleDeleteToast = (event) => {
		toast.removeToast(event.target.id)
	}

	return (
		<StyledCloseButton>
			<StyledSvgIcon
				size={size}
				src={src}
				id={id}
				onClick={handleDeleteToast}
			/>
		</StyledCloseButton>
	)
}

ToastCloseButton.propTypes = types
