import styled from 'styled-components'

export const StyledToastMessage = styled.p`
	/* margin-left: 10px;
	margin-right: auto;
	font-size: 22px; */

	display: flex;
	align-items: center;
	margin-left: 15px;
	color: ${(props) => props.color};
`
