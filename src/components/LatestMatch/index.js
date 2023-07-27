// Write your code here
import './index.css'

const LatestMatch = props => {
  const {items} = props
  const {
    umpires,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
  } = items

  return (
    <div className="latest-match-card-items">
      <div className="competing-team-details">
        <div className="competing">
          <p className="competing-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="text">{venue}</p>
          <p className="text">{result}</p>
        </div>
        <div className="competing-logo">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <div className="details">
          <h1 className="heading-text">First Innings</h1>
          <p className="text">{firstInnings}</p>
          <h1 className="heading-text">Second Innings</h1>
          <p className="text">{secondInnings}</p>
          <h1 className="heading-text">Man Of The Match</h1>
          <p className="text">{manOfTheMatch}</p>
          <h1 className="heading-text">Umpires</h1>
          <p className="text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
