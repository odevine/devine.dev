import { styled } from "styled-components"

export const ColorBlock = styled.div<{color: string}>`
    height: 100px;
    width: 100px;
    background-color: ${props => props.color};
`