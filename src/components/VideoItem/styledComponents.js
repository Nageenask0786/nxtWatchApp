import styled from 'styled-components'

export const VideoItems = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  margin-left: 0px;
  margin-bottom: 8px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  color: black;
  font-weight: bold;
  font-size: 20px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: black;
  font-weight: bold;
  font-size: 20px;
`
export const List = styled.ul`
  display: flex;
  flex: row;
`
export const Item = styled.li``
