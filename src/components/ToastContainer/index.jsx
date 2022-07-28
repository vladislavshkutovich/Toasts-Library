import React from 'react'
import { ToastCard } from './styled'
import { TOAST_POSITIONS } from '../../constants'

// Общий контейнер для случая нескольких тостов по принципу
// как в телеграме, когда можно выбрать положение уведомлений
// в него я буду отправлять все тосты с помощью ToastService
// с помощью паттерна Singletone

export const ToastContainer = ({
	toastPosition = 'top-right',
}) => (
	<ToastCard
		id="container"
		position={TOAST_POSITIONS[toastPosition]}
	/>
)
