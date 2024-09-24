import './styles/App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import Headers from './components/Headers'
import LeftMenu from './components/LeftMenu'
import EmailToolBar from './components/EmailToolbar'
import EmailContentHeader from './components/EmailContentHeader'
import EmailBody from './components/EmailBody'
import EmailAction from './components/EmailAction'
import EmailReply from './components/EmailReply'
function App() {
  return (
    <div className="app">
     <Headers />
     <LeftMenu />
      
      <main className="email-view">
        <EmailToolBar />
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <EmailContentHeader />
          <EmailBody />
          <EmailAction />
          <EmailReply />
        </article>
      </main>
    </div>
  )
}

export default App
