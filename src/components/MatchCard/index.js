// Write your code here
import './index.css'

const MatchCard = props => {
  const {items} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = items
  const statusClass = matchStatus === 'Won' ? 'Won' : 'Lost'

  return (
    <li className="match-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="opponent-logo"
      />
      <p className="heading-text">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${statusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
