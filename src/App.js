import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

//Importing redux actions
import { fetchAllChannelsStart, fetchChannelVideosStart, fetchChannelInfoStart } from './actions/youtubeActions'
import { YOUTUBE_API_KEY } from './sagas/api/apiKey'

//Importing the app components
import Layout from './components/organisms/Layout'
import SideBar from './components/organisms/SideBar'
import Container from './components/organisms/Container'
import ChannelsList from './components/molecules/ChannelsList'

class App extends React.Component {

  state = {
    fetchedChannels: []
  }

  componentDidMount = () => {
    this.loadYoutubeApi()
  }

  //Loading the youtube javascript API, When API is loaded, fetch the channels information
  loadYoutubeApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(YOUTUBE_API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          //Get the information of the channels from Google youtube API by id
          this.props.fetchAllChannelsStart(['UCVTyTA7-g9nopHeHbeuvpRA', 'UCwWhs_6x42TyRM4Wstoq8HA', 'UCMtFAi84ehTSYSE9XoHefig']);
        });
      });
    };

    document.body.appendChild(script);
  }


  render() {
    const {youtube} = this.props
    return (
      <Layout>
        <SideBar>
          <h3>Available Channels</h3>
          {youtube.fetchAllSuccess && <ChannelsList channels={youtube.channels} onSelectItem={this.handleChannelClick}/>}
        </SideBar>
        <Container>
          
        </Container>
      </Layout>
    );
  }

  //Redux Connected Functions
  handleChannelClick = (channelId) => {
    const {youtube} = this.props
    if(youtube.fetchedChannels.indexOf(channelId) === -1) {
      this.props.fetchChannelVideosStart(channelId)
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
      fetchAllChannelsStart,
      fetchChannelVideosStart,
      fetchChannelInfoStart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

