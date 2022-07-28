import React from 'react'
import { StyledToastIcon } from './styled'
import svgByDefault from '../../assets/svg/info.svg'

export const ToastIcon = ({
	src = svgByDefault,
	size = '40px',
}) => {
	return <StyledToastIcon size={size} src={src} />
}
