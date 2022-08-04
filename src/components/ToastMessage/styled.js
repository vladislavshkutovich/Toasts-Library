import styled from 'styled-components'

export const StyledToastMessage = styled.p`
	display: flex;
	align-items: center;
	margin-left: 15px;
	word-break: break-all;
	padding-right: 30px;
	color: ${(props) => props.color || '#FFFFFF'};
	font-size: ${({ size }) => size.fontSize};
`
