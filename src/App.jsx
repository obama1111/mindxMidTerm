import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header.jsx'
import Banner from './Banner.jsx'
import NewRelease from './NewRelease.jsx'

import './Header.css'
import './Banner.css'
// import './NewRelease.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Banner />
    <NewRelease />
  </StrictMode>,
)

export default App