// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {items} = props
  const {id, name, teamImageUrl} = items

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
