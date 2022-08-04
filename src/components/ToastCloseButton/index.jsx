import React from 'react'
import { StyledCloseButton } from './styled'
import toast from '../ToastService'
import PropTypes from 'prop-types'

export const ToastCloseButton = ({ id, src, size }) => {
	const deleteToast = (e) => {
		toast.removeToast(e.target.id)
	}

	return (
		<StyledCloseButton size={size}>
			<img src={src} id={id} onClick={deleteToast} />
		</StyledCloseButton>
	)
}

ToastCloseButton.propTypes = {
	id: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	size: PropTypes.object.isRequired,
}
