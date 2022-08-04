import React from 'react'
import { StyledToastIcon } from './styled'
import PropTypes from 'prop-types'

export const ToastIcon = ({ src, size }) => {
	return <StyledToastIcon size={size} src={src} />
}

ToastIcon.propTypes = {
	src: PropTypes.string.isRequired,
	size: PropTypes.object.isRequired,
}
