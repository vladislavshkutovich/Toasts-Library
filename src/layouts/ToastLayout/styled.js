import styled from 'styled-components'

export const StyledToastLayout = styled.div`
	* {
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
	}
`
