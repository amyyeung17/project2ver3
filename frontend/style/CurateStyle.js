import styled, { css } from 'styled-components'
import { IconButton, lowShadow, medShadow, organizeCenter, 
  organizeJustifyStart, organizeRowBetween, organizeRow, smallHeader} from '../Shared'
import { simpleDiv } from './TrackStyle'

export const CheckOptionDiv = styled.div`
  ${organizeRow}
  box-sizing: border-box;
  color: #2c484e;
  height: ${props => props.type !== 'genre' && '2rem'};
  margin: .25rem 0rem;
  padding-left: .25rem;
  position: relative; 
`

export const CheckboxDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-right: .5rem;
  vertical-align: middle;  
`

export const CheckboxIcon = styled.svg`
  fill: none;
  stroke: #2c484e;
  stroke-width: 4px; 
`

export const allSongsDiv = css`
  ${organizeJustifyStart}
  box-sizing: border-box;
  height: ${props => (props.type !== 'inputs' && props.content < 3) ? '53.125vh' : (parseInt(props.content) * 10.625 + 31.875) + 'vh'}};
  justify-content: ${props => props.content === 0 && 'center'};
  margin: .5rem 0rem;
  width: 92.5%;
`

export const CurateSongsDiv = styled.div`
  ${allSongsDiv}
`

export const CurateResultsDiv = styled.div`
  ${allSongsDiv}
  min-height: 53.125vh;
  justify-content: ${props => props.status !== 'Complete' && 'center'};
`

export const CurateTextDiv = styled.div`
  ${organizeRow}
  color: #2c484e;
  font-weight: 450;
  margin: .5rem 0rem 0rem .25rem;
  padding: .25rem 0rem;
`

export const DeleteButton = styled(IconButton).attrs({className: 'bi bi-x'})`
  align-self: flex-start;
  padding: 0rem;
  width: 2.5rem;
`

export const FilterItemsDiv = styled.div`
  ${organizeCenter}
  margin-top: .25rem;
  width: 100%;
`

export const GenreDiv = styled.div`
  ${organizeJustifyStart}
  align-self: flex-end;
  border-left: 1.125px solid #f2d0a4;
  height: 25vh;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: .5rem;
  padding: .25rem;
  width: 80%;
`

//5. TODO 
export const HeaderText = styled.p`
  ${smallHeader}
  left: 2.5%;
`

export const HiddenCheckbox = styled.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0; 
  position: absolute;
  white-space: nowrap; 
  width: 1px; 
`

export const OptionDiv = styled.div`
  ${simpleDiv}
  box-sizing: border-box;
  height: 6rem;
  min-width: 30rem;
  padding: .125rem .5rem;
`

export const PastIconButton = styled(IconButton).attrs(props => ({
  className: `bi bi-arrow-${props.reverse ? 'up' : 'down'}-short`
}))`
  align-self: flex-end;
  font-size: 1.5rem;
  position: relative;
  margin: 0rem .25rem;
`

export const PastIconDiv = styled.div`
  ${organizeRow}
  box-sizing: border-box;
  width: auto;
`

export const PastInfoDiv = styled.div`
  ${simpleDiv};
  border-bottom: ${props => (props.length >= (props.sectionType === 'pastInputs' ? 8 : 4) && props.length === props.num) && 'none'};
  border-top: none;
  height: ${props => props.sectionType === 'pastInputs' ? '3rem' : '4.825rem'};
  min-width: 30rem;
  position: relative;
  width: 100%;
`
//4. TODO - check padding
export const PastSectionDiv = styled.div`
  ${organizeJustifyStart};
  color: #2c484e;
  height: 20rem;
  border-bottom: 1.5px solid ${props => (props.length >= (props.sectionType === 'pastInputs' ? 8 : 4)) ? '#c7dadd' : 'transparent'};
  border-top: 1.5px solid #c7dadd;
  justify-content: ${props => props.length === 0 && 'center'};
  padding: 0rem .25rem;
  margin-bottom: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  width: 85.5%;
`
//3. TODO - check padding
export const PastTitleDiv = styled.div`
  ${organizeRowBetween};
  box-sizing: border-box;
  color: #2c484e;
  font-size: .875rem;
  font-weight: 450;
  margin: .5rem 0rem .25rem;
  padding: 0rem .25rem 0rem .5rem;
  width: 85.5%;
`

export const SearchBar = styled.input.attrs(({
  type: "text",
  placeholder: "Start your search here..."
}))`
  ${lowShadow}
  border: 2px solid #2c484e;
  border-radius: .25rem;
  font-size: 1.25rem; 
  height: 2rem;
  outline: none;
  margin: 0rem;
  transition: all 300ms ease-in-out;
  width: 88.5%;

  &:hover {
    border-color: #f2d0a4;
  }

  &:focus {
    ${medShadow};
    background-color: #f9f9f9;
    border-color: #f2d0a4;
  }
`

export const StyledCheckbox = styled.div`
  background-color: ${props => props.checked && '#f2d0a4'};
  border: .09375rem solid #2c484e;
  border-radius: .25rem; 
  display: flex;
  height: .875rem;
  justify-content: center;
  transition: all 300ms ease-in-out;
  width: .875rem;

  &:hover {
    border-color: ${props => !props.checked && '#f2d0a4'};
  }

  ${HiddenCheckbox}:focus + &{
    box-shadow: 0 0 0 2px #f2d0a4;
  }
  
  ${CheckboxIcon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden' }
  }
`