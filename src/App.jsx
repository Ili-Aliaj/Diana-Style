import HomePageTitle from './Head Components/HomePageTitle.jsx';
import Icon from './Head Components/Icon.jsx';
import Header from './BodyComponents/Header.jsx';
import { Analytics } from "@vercel/analytics/react"
function App() {
  

  return (
    <div>
    <Icon/>
    <HomePageTitle/>
    <Header/>
    </div>
  )
}

export default App
