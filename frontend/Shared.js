import styled, { css } from 'styled-components'

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90%;
`

export const lowShadow = css`
  box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
              0px 2px 2px rgba(0,0,0,0.1);
`

export const medShadow = css`
  box-shadow: 0px 1px 2px rgba(0,0,0,0.1),
              0px 2px 4px rgba(0,0,0,0.1);
`

export const mainColorButton = css`
  ${lowShadow};
  border: 2px solid #2c484e;
  background-color: #2c484e;
  color: white;
  opacity: .85;
  
  &:hover:enabled {
    background-color: #2c484e;
    opacity: 1;
  }
  
  &:disabled {
    opacity: .38;
  }
`

export const mainColorLink = css`
  color: #2c484e;
  cursor: pointer;
  opacity: 1;
  text-decoration: 1px underline solid #2c484e;

  &:hover {
    opacity: .75;
  }
`

export const normalSubtitle = css`
  color: #212121; 
  font-size: 1.5rem;
  margin: .5rem;
  text-align: center;  
`

export const normalTitle = css`
  color: #2c484e;
  font-weight: 450;
  margin: .5rem;
  width: 85%;
`

export const organizeCenter = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const organizeAlignStart = css`
  ${organizeCenter}
  align-items: flex-start;
`

export const organizeJustifyStart = css`
  ${organizeCenter}
  justify-content: flex-start;
`

export const organizeRow = css`
  align-items: center;
  display: flex;
  width: 100%;
`

export const organizeRowBetween = css`
  ${organizeRow}
  justify-content: space-between;
`

export const reverseColorButton = css`
  background-color: transparent;
  border: 2px solid transparent;
  color: #2c484e;

  &:hover:enabled {
    background-color: #EEEEEE;
  }

  &:disabled {
    opacity: .38;
  }
`

export const smallHeader = css`
  align-self: flex-start;
  color: #2c484e;
  font-size: .875rem;
  font-weight: 450;
  margin: 1rem .5rem .5rem .875rem;
  position: relative;
`

export const underlineText = css`
  background-color: white;
  border: none;
  color: #2c484e;
  text-decoration: underline solid transparent;
  text-underline-offset: 1vh;
  text-decoration-thickness: 20%;

  ${props => props.actual === props.value ? 
    css`
      font-weight: 450;
      text-decoration-color: #f2d0a4;
    `
    :
    css`
      opacity: .85;

      &:hover:enabled {
        opacity: 1;
        text-decoration-color: #f2d0a4;
      }
    `  
  }
`

export const AppOrganizeDiv = styled.div`
  ${organizeCenter}
  overflow: hidden;
  width: 100%;
  z-index: -1
`

export const IconButton = styled.button`
  ${reverseColorButton}
  align-self: ${props => props.type === 'emotion' && 'center'};
  height: auto;
  font-size: 2rem;
  z-index: 2;
`

export const LeftDiv = styled.div`
  ${organizeJustifyStart}
  height: 100%;
  overflow: hidden;
  max-width: 18rem;
  min-width: 10rem;
  padding: .5rem;
  position: relative;
  top: .5rem;
  width: 20%;
`

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 50vw;
`

export const NoHeaderDiv = styled.div`
  ${organizeCenter}
  height: 50vh;
  width: 85vw; 
`

export const RightDiv = styled.div`
  ${organizeCenter}
  padding: .5rem;
  max-width: 55rem;
  margin-bottom: ${props => (props.type === 'albums' && props.albumType === 'single') && '3.5625rem'};
  min-width: 35rem;
  width: 75%;
`

export const RowDiv = styled.div`
  ${organizeAlignStart}
  flex-direction: row;
  width: 85vw;
`

export const Subtitle = styled.p`
  ${normalSubtitle};
  width: 85%; 
`

export const Title = styled.p`
  ${normalTitle};
  font-size: 4rem;
  text-align: center;
`

export const TextSpan = styled.span`
  display: inline;
  font-weight: normal;
`
