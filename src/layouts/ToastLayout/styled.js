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
	position: relative;
	overflow: hidden;
	width: ${({ size }) => size.width};
	height: ${({ size }) => size.height};
	padding: ${({ size }) => size.padding};
	margin-bottom: 15px;
	border-radius: 20px;
	background-color: ${({ backgroundColor }) =>
		backgroundColor};
	font-size: ${({ size }) => size.fontSize};
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
