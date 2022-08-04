import styled from 'styled-components'

export const AddToastButton = styled.button`
	position: fixed;
	width: 100px;
	height: 40px;
	border-radius: 8px;
	font-size: 16px;
	left: 45%;
	top: 50%;
	background-color: #e1ff75;
	cursor: pointer;

	& :hover {
		opacity: 80%;
		transform: translateY(1px);
	}

	& :active {
		transform: translateY(-1px);
	}
`
