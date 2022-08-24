import styled, { keyframes } from 'styled-components'

const fromTopAnimation = keyframes`
  from {
    transform: translateY(-300%);
  }
  to {
    transform: translateY(0);
  }
`
const fromBottomAnimation = keyframes`
  from {
    transform: translateY(300%);
  }
  to {
    transform: translateY(0);
  }
`

export const StyledToastLayout = styled.div`
	display: flex;
	position: relative;
	overflow: hidden;
	width: ${({ size }) => size?.width || '350px'};
	height: ${({ size }) => size?.height || '70px'};
	padding: ${({ size }) => size?.padding || '15px'};
	margin-bottom: ${({ theme }) => theme.margins[5]}px;
	border-radius: ${({ theme }) =>
		theme.borderRadiuses[6]}px;
	background-color: ${({ backgroundColor }) =>
		backgroundColor || '#9A40D3'};
	font-family: Arial, Helvetica, sans-serif;
	font-size: ${({ size }) => size?.fontSize || '20px'};
	animation: ${({ toastAnimation }) =>
			toastAnimation == 'from-top'
				? fromTopAnimation
				: fromBottomAnimation}
		1.5s;
`
