import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

//Import Hardcoded channels
import channels  from './sagas/api/channels'

//Importing redux actions
import { fetchChannelVideosStart,  deselectChannel, reselectChannel } from './actions/youtubeActions'

//Importing the app components
import Layout from './components/organisms/Layout'
import SideBar from './components/organisms/SideBar'
import Container from './components/organisms/Container'
import ChannelsForm from './components/molecules/ChannelsForm'

class App extends React.Component {

  render() {
    const {youtube} = this.props
    return (
      <Layout>
        <SideBar>
          <h3>Tilgjengelige kanaler</h3>
          <ChannelsForm 
            channels={channels} 
            onItemClick={this.handleChannelClick}
          />
          <h3>Videoliste</h3>
        </SideBar>
        <Container>
          
        </Container>
      </Layout>
    );
  }

  //Redux Connected Functions
  handleChannelClick = (selectedChannels, channelId) => {
    console.log(selectedChannels)
    const {youtube} = this.props
    if(youtube.fetchedChannels.indexOf(channelId) === -1) {
      //We check if the channel has been selected or not, if no, 
      //then we should fetch the videos inside the channel
      console.log('first select')
      this.props.fetchChannelVideosStart(channelId)
    }
    else if(selectedChannels[channelId]) {
      //Here the channel has already been selected and user wants to reselect it
      //We do not need to execute an api call for it. We already have the channel videos.
      //We add the videos associated to this channelId from the list of videos
      console.log('reselect')
      let reselected = youtube.removedVideos.find( video => {return video.channelId})
      this.props.reselectChannel(reselected)
    }
    else if(!selectedChannels[channelId]) {
      //Here the channel has already been selected and user wants to deselect it
      //We do not need to execute an api call for it. We already have the channel videos.
      //We remove the videos associated to this channelId to the list of videos.
      console.log('deselect')
      let index = youtube.selectedChannels.map( (video, idx) => {
        if(video.channelId === channelId) {
          return idx
        }
      })
      this.props.deselectChannel(youtube.selectedChannels.splice(index, 1))
    }
  }
}

const mapStateToProps = state => {
  return {
    youtube: state.youtube, 
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchChannelVideosStart,
      deselectChannel,
      reselectChannel
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

