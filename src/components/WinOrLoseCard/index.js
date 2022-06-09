import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE

  return (
    <div className="win-lose-container">
      <div className="details-section">
        <h1 className="status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Win or Lose" className="img" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
