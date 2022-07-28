import styled from 'styled-components'

export const StyledToastIcon = styled.img`
	display: flex;
	align-items: center;
	margin: 12px;
	width: ${({ size }) => size?.widthSvg || '40px'};
`
