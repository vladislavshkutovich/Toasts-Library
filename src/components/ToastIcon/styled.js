import styled from 'styled-components'

export const StyledToastIcon = styled.img`
	display: flex;
	align-items: center;
	margin: ${({ theme }) => theme.margins[2]}px;
	width: ${({ size }) => size.widthSvg};
`
