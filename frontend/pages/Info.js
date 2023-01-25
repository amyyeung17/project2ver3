import React from 'react'
import NavOptions from '../elements/NavOptions'
import { InfoLink, InfoList, InfoPageDiv, InfoSection, InfoSectionSub, InfoText } from '../style/ExtraStyle'

const Info = () => {
  return(
    <>
      <InfoPageDiv>
        <InfoSection> Access </InfoSection>
        <InfoSectionSub> /welcome </InfoSectionSub>
        <InfoText> 
          Implemented client credential flow, allowing access
          to a limited number of Spotify API resources.&nbsp;
          <InfoLink href="https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/" target="_blank">Link </InfoLink>
        </InfoText>
        <InfoSection> Search </InfoSection>
        <InfoSectionSub> /curate </InfoSectionSub>
        <InfoText> 
          Returns search results of type track. 
          Queries can be narrowed by using several of the offered filters. 
          Default market is US.&nbsp;
          <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/search" target="_blank">Link </InfoLink>
        </InfoText>
        <InfoSection> Genres </InfoSection>
        <InfoSectionSub> /curate </InfoSectionSub>
        <InfoText> 
          List of available genres is fetched from the API. 
          If only the genre filter is selected (with one or more respective seeds), the track filter 
          is automatically applied as well.&nbsp;
          <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendation-genres" target="_blank">Link </InfoLink>
        </InfoText>
        <InfoSection> Additional details </InfoSection>
        <InfoSectionSub> /extra </InfoSectionSub>
        <InfoText> A composite of information retrieved from multiple endpoints.</InfoText>
        <ul> 
          <InfoList> Track info: <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track" target="_blank"> Link </InfoLink></InfoList>
          <InfoList> Track audio features (emotion values): <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features" target="_blank"> Link </InfoLink></InfoList>
          <InfoList> Album tracks: <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features" target="_blank"> Link </InfoLink></InfoList>
          <InfoList> Artist info: <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-multiple-artists" target="_blank"> Link </InfoLink></InfoList>
          <InfoList> Artist's top tracks: <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-top-tracks" target="_blank"> Link </InfoLink></InfoList>
        </ul>
        <InfoSection> Sample </InfoSection>
        <InfoSectionSub> /valence, /intensity </InfoSectionSub>
        <InfoText> 
          Suggested values are based on the seeded songs. The values of the interested fields (valence, energy)
          are averaged and rounded.&nbsp;
          <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features" target="_blank">Link</InfoLink>
        </InfoText>
        <InfoText> 
          Sample songs displayed are fetched using inputted values of 1-10 as targetted feature values.
          Values are scaled appropriately to follow the API documentation.&nbsp;
          <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations" target="_blank">Link</InfoLink>
        </InfoText>
        <InfoSection> Results </InfoSection>
        <InfoSectionSub> /final/results </InfoSectionSub>
        <InfoText> 
          Recommendations are gathered using the seeded songs and final inputted values.&nbsp;
          <InfoLink href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations" target="_blank">Link</InfoLink>
        </InfoText>
        <InfoSection> Dependencies </InfoSection>
        <InfoText> Framework: React, Express </InfoText>
        <InfoText> 
          Libaries/Modules: Axios, Bootstrap Icons, Concurrently, Cookie-session, Framer,
          Helmet, Keygrip, Nodemon, Qs, Parcel, React Router, Styled Components
        </InfoText>
      </InfoPageDiv>
      <NavOptions
        location={-1}
        text="Back"
      />
    </>
  )
}

export default Info