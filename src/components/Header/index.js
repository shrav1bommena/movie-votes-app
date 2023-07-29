import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="navbar-content">
      <h1>MovieVotes</h1>
      <div className="popup-container">
        <Popup
          trigger={
            <button
              type="button"
              className="trigger-button company-info-button"
            >
              Company Info
            </button>
          }
          position="bottom right"
        >
          <p>Company: Geeksynergy Technologies Pvt Ltd</p>
          <p> Address: Sanjayanagar, Bengaluru-56 </p>
          <p>Phone: XXXXXXXXX09 Email: XXXXXX@gmail.com</p>
        </Popup>
      </div>
    </div>
  </nav>
)

export default Header
