import React from 'react'
import { StyledCloseButton } from './styled'
import { TOAST_SIZE } from '../../constants'
import svgByDefault from '../../assets/svg/cross.svg'
import toast from '../ToastService'

export const ToastCloseButton = ({
	id = '1',
	src = svgByDefault,
	size,
}) => {
	console.log(size)
	const deleteToast = (e) => {
		toast.removeToast(e.target.id)
	}

	return (
		<StyledCloseButton size={size}>
			<img src={src} id={id} onClick={deleteToast} />
		</StyledCloseButton>
	)
}
