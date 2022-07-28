import styled from 'styled-components'

const positionDefault = (position) => {
	if (!position) return '12px'
}

export const ToastCard = styled.div`
	position: fixed;
	top: ${({ position }) =>
		position.top || positionDefault(position)};
	bottom: ${({ position }) => position.bottom};
	left: ${({ position }) =>
		position.left || positionDefault(position)};
	right: ${({ position }) => position.rigth};
`
