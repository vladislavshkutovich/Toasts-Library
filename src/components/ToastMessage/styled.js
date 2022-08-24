import styled from 'styled-components'

export const StyledToastMessage = styled.p`
	display: flex;
	align-items: center;
	margin-left: ${({ theme }) => theme.margins[5]}px;
	word-break: break-all;
	padding-right: ${({ theme }) => theme.paddings[8]}px;
	color: ${(props) => props.color || '#FFFFFF'};
	font-size: ${({ size }) => size.fontSize};
`
