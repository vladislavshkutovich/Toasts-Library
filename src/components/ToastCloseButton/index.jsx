import React from 'react'
import { StyledCloseButton } from './styled'
import { TOAST_SIZE } from '../../constants'
import svgByDefault from '../../assets/svg/cross.svg'

export const ToastCloseButton = ({
	id = '1',
	src = svgByDefault,
	size = '20px',
}) => {
	return (
		<StyledCloseButton id={id} size={TOAST_SIZE[size]}>
			<img src={src} />
		</StyledCloseButton>
	)
}
