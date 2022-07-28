import styled from 'styled-components'

export const StyledCloseButton = styled.button`
	background: none;
	border: none;
	/* align-self: flex-start; */
	img {
		width: ${({ size }) => size.widthClose};
		position: absolute;
		right: 15px;
		top: 10px;
		cursor: pointer;
	}
`
