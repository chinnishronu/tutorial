import './index.css'

const NavBar = props => {
  const {isGameInProgress, currentScore, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="title-score-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-img"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
