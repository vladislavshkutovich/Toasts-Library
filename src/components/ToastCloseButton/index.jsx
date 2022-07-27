import React from 'react'
import { StyledCloseButton } from './styled'
import svg from '../../assets/svg/cross.svg'

export const ToastCloseButton = () => {
	return (
		<StyledCloseButton>
			<img src={svg} />
		</StyledCloseButton>
	)
}
