import React from 'react'
import { StyledCloseButton } from './styled'
import toast from '../ToastService'
import PropTypes from 'prop-types'

export const ToastCloseButton = ({ id, src, size }) => {
	const handleDeleteToast = (event) => {
		toast.removeToast(event.target.id)
	}

	return (
		<StyledCloseButton size={size}>
			<img src={src} id={id} onClick={handleDeleteToast} />
		</StyledCloseButton>
	)
}

ToastCloseButton.propTypes = {
	id: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	size: PropTypes.object.isRequired,
	autoCloseTimeout: PropTypes.func,
}
