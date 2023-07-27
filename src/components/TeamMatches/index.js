// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchesList: updatedData, isLoading: false})
  }

  renderLatestMatch = () => {
    const {teamMatchesList} = this.state
    const {latestMatchDetails} = teamMatchesList
    const updatedLatestMatchDetails = {
      id: latestMatchDetails.id,
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    return (
      <div className="latest-match-container">
        <LatestMatch items={updatedLatestMatchDetails} />
      </div>
    )
  }

  renderMatchCard = () => {
    const {teamMatchesList} = this.state
    const {recentMatches} = teamMatchesList
    const updatedRecentMatches = recentMatches.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))

    return (
      <ul className="match-card-container">
        {updatedRecentMatches.map(match => (
          <MatchCard items={match} key={match.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesList} = this.state
    const {teamBannerUrl} = teamMatchesList

    return (
      <div className="team-matches-card">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        {this.renderLatestMatch()}
        {this.renderMatchCard()}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
