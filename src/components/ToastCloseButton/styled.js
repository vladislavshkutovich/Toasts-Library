import styled from 'styled-components'

export const StyledCloseButton = styled.button`
	background: none;
	border: none;
	& > img {
		width: ${({ size }) => size.widthClose};
		position: absolute;
		right: 20px;
		top: 15px;
		cursor: pointer;
	}
`
