import styled, { keyframes } from 'styled-components'

const fromTopAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`
const fromBottomAnimation = keyframes`
  from {
    transform: translateY(100%);
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
	margin-bottom: 15px;
	border-radius: 20px;
	background-color: ${({ backgroundColor }) =>
		backgroundColor || '#9A40D3'};
	font-family: sans-serif;
	font-size: ${({ size }) => size?.fontSize || '20px'};
	animation: ${({ toastAnimation }) =>
			toastAnimation == 'from-top'
				? fromTopAnimation
				: fromBottomAnimation}
		1s;

	// Backup
	/* * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
	}

	display: flex;
	flex-direction: row;
	justify-content: left;
	justify-items: center;

	width: 400px;
	height: 60px;
	padding: 15px;
	margin: 10px;
	background-color: #9a40d3;
	border-radius: 16px;

	& > * {
		display: flex;
		align-items: center;
	} */
`
