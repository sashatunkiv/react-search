import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={40}
    viewBox="0 0 280 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="53" y="0" rx="0" ry="0" width="160" height="16" /> 
    <rect x="53" y="24" rx="0" ry="0" width="155" height="14" /> 
    <rect x="248" y="4" rx="0" ry="0" width="30" height="27" /> 
    <circle cx="19" cy="19" r="19" />
  </ContentLoader>
)

export default MyLoader