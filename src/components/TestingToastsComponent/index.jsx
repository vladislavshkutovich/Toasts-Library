import React from 'react'
import { ToastContainer } from '../ToastContainer'
import { AddToastButton } from './styled'
import toast from '../ToastService'
import PropTypes from 'prop-types'

export const TestingToastsComponent = (
	toastType,
	toastPosition,
	size,
	title,
	titleColor,
	backgroundColor,
	toastAnimation,
	toastAutoCloseIsOn,
	toastAutoCloseTime,
) => {
	const handleToast = () => {
		toast.setContainer()
		toast.generateToast(
			toastType,
			size,
			title,
			titleColor,
			backgroundColor,
			toastAnimation,
			toastAutoCloseIsOn,
			toastAutoCloseTime,
		)
	}

	return (
		<div>
			<AddToastButton onClick={handleToast}>
				Add Toast
			</AddToastButton>
			<ToastContainer toastPosition={toastPosition} />
		</div>
	)
}

TestingToastsComponent.propTypes = {
	toastType: PropTypes.string.isRequired,
	toastPosition: PropTypes.object.isRequired,
	size: PropTypes.object.isRequired,
	title: PropTypes.string,
	titleColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	toastAnimation: PropTypes.string.isRequired,
	toastAutoCloseIsOn: PropTypes.bool.isRequired,
	toastAutoCloseTime: PropTypes.number.isRequired,
}
