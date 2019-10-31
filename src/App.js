import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

//Import Hardcoded channels
import channels  from './sagas/api/channels' //The array that holds the list of channel ids & thier title

//Importing redux actions
import { fetchVideosStart } from './actions/youtubeActions'

//Importing the app components
import Layout from './components/organisms/LayoutComponents/Layout' //The overall Layout of the app
import SideBar from './components/organisms/LayoutComponents/SideBar' //The container for displaing search form &list of videos
import Container from './components/organisms/LayoutComponents/Container' //The container for video player 
import ChannelsForm from './components/organisms/ChannelsForm' //Form for searching channels 
import VideosList from './components/organisms/VideosList' //List to display list of videos
import Player from './components/organisms/Player' //Youtube video player, it is a npm module dependency 

//Import an icon
import ChevronUp from './components/atoms/SvgIcons/ChevronUp'


class App extends React.Component {

  state = {
    toggle: true, //Changes the visibility of the search form 
    video: null, //Holds the selected video
    removedIds: [], //Keeps the id of the vidoes which are removed, so in later searches they won't be displayed
    removedId: '' //Keeps the id of currently removed video, so if it is being played, I can remove it from the player
  }

  //This function initiates the api call for fetching channels data
  handleSubmit = (selectedChannels) => {
    //First I check if form contains submited data for channel ids
    if(Object.keys(selectedChannels).length > 0) {
      this.setState(
        {toggle: false}, //Hide the search form
        () => this.props.fetchVideosStart(selectedChannels) //Start the api call
      )
    }
  }

  //This function stores the selected video inside the component state
  //It will be sent to the Player component
  selectVideo = (video) => { this.setState({ video }) }

  //This function removes the video from the list
  removeVideo = (video) => {
    const {youtube} = this.props
    //Find the index of the video inside the list
    let index = youtube.videos.indexOf(video)
    //Remove the video fromthe list
    let removed = youtube.videos.splice(index, 1)
    console.log(removed[0].videoId)
    this.setState({removedId: removed[0].videoId})
    //Store the id of the removed videos, so in later searchs it will not be displayed
    let removedIds = Object.assign([], this.state.removedIds)
    removed.map( r => { removedIds.push(r.videoId) })
    this.setState({ removedIds })
  }

  toggleChannels = () => {
    //By default the form for searching channels is visible, 
    //to have more space for displaying the list of vidoes I toggle this form by calling this function
    this.setState(prevState => ({toggle: !prevState.toggle}))
  }

  render() {
    const {youtube} = this.props
    const {toggle, video, removedIds, removedId} = this.state
    return (
      <Layout>
        <SideBar>
          <h3>
            Tilgjengelige kanaler
            <span 
              onClick={this.toggleChannels}
              style={!toggle ? {transform: 'rotate(180deg)'} : null}
            > 
              <ChevronUp color="#fff"/>
            </span>
          </h3>
          
          <div style={!toggle ? {display: 'none'} : {display: 'block'}}>
              <ChannelsForm 
                channels={channels} 
                onSubmit={this.handleSubmit}
              />
          </div>
          
          <h3>Videoliste</h3>
          <VideosList
            videos={youtube.videos}
            removedIds={removedIds}
            onSelectItem={this.selectVideo}
            onRemoveItem={this.removeVideo}
          />
        </SideBar>
        <Container>
          <Player removedId={removedId} {...video}/>
        </Container>
      </Layout>
    );
  }
}

//Connecting the App component to the redux store 
const mapStateToProps = state => {
  return {
    youtube: state.youtube, 
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchVideosStart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

