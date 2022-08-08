import styled from 'styled-components'

const positionDefault = (position) => {
	if (!position) return '12px'
}

export const ToastCard = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: flex-${({ side }) => side};
	top: ${({ position }) =>
		position.top || positionDefault(position)};
	bottom: ${({ position }) =>
		position.bottom || positionDefault(position)};
	left: ${({ position }) =>
		position.left || positionDefault(position)};
	right: ${({ position }) =>
		position.rigth || positionDefault(position)};
	margin: ${({ toastOffsetX }) => toastOffsetX || 0}px
		${({ toastOffsetY }) => toastOffsetY || 0}px;
`
