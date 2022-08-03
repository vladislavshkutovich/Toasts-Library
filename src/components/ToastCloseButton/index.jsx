import React from 'react'
import { StyledCloseButton } from './styled'
import { TOAST_SIZE } from '../../constants'
import svgByDefault from '../../assets/svg/cross.svg'
import toast from '../ToastService'

export const ToastCloseButton = ({
	id = '1',
	src = svgByDefault,
	size = '20px',
}) => {
	const deleteToast = (e) => {
		toast.removeToast(e.target.id)
	}

	return (
		<StyledCloseButton>
			<img
				src={src}
				id={id}
				size={TOAST_SIZE[size]}
				onClick={deleteToast}
			/>
		</StyledCloseButton>
	)
}
