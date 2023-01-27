# Spotify Mood App

Get songs recommendations based on your current mood & inputted songs using the Spotify API. 

## Code features

### Frontend 
- Stylized with Styled-components and Bootstrap-icons
- Animations using Framer-motion
- Routing is managed by React-router 
- Built with Parcel 

### Backend 
- Managed by Express
- HTTP requests are handled by Axios
- All data are retrieved from Spotify API (https://developer.spotify.com/documentation/web-api/).
- cookie-session is used to manage a user's data for a session
  - Ensures token is only fetched once per session in a browser (session expires when token does in 1 hour)
  - Preserves past user inputs & data when a page is refreshed or exited 
- Cookies are signed with Keygrip module 
- Hosted on Netlify, deployed as a serverless app using serverless-http module & Netlify functions (built with Netlify-lambda)
- Development mode with Nodemon and concurrently 


