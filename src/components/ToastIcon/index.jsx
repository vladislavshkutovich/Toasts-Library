import React from 'react'
import { StyledToastIcon } from './styled'
import { types } from './types'

export const ToastIcon = ({ src, size }) => {
	return <StyledToastIcon size={size} src={src} />
}

ToastIcon.propTypes = types
