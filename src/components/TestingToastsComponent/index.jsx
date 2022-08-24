import React from 'react'
import { ToastContainer } from '../ToastContainer'
import { AddToastButton } from './styled'
import { ToastService } from '../ToastService'
import PropTypes from 'prop-types'

export const toast = new ToastService()

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
	toastOffsetX,
	toastOffsetY,
) => {
	const handleToast = () => {
		toast.setContainer()
		toast.addToast(
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
			<ToastContainer
				toastPosition={toastPosition}
				toastOffsetX={toastOffsetX}
				toastOffsetY={toastOffsetY}
			/>
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
	toastOffsetX: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	toastOffsetY: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
}
