import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

//Import Hardcoded channels
import channels  from './sagas/api/channels'

//Importing redux actions
import { fetchVideosStart } from './actions/youtubeActions'

//Importing the app components
import Layout from './components/organisms/LayoutComponents/Layout'
import SideBar from './components/organisms/LayoutComponents/SideBar'
import Container from './components/organisms/LayoutComponents/Container'
import ChannelsForm from './components/organisms/ChannelsForm'
import VideosList from './components/organisms/VideosList';
import Player from './components/organisms/Player'

//Import an icon
import ChevronUp from './components/atoms/SvgIcons/ChevronUp'


class App extends React.Component {

  state = {
    toggle: true,
    video: null,
    removedIds: []
  }

  handleSubmit = (selectedChannels) => {
    if(Object.keys(selectedChannels).length > 0) {
      this.setState(
        {toggle: false},
        () => this.props.fetchVideosStart(selectedChannels)
      )
    }
  }

  selectVideo = (video) => {
    this.setState({ video })
  }

  removeVideo = (video) => {
    const {youtube} = this.props
    let index = youtube.videos.indexOf(video)
    let removed = youtube.videos.splice(index, 1)
    let removedIds = Object.assign([], this.state.removedIds)
    removed.map( r => { removedIds.push(r.videoId) })
    this.setState({ removedIds })

    console.log(youtube.videos, 'redux list')
    console.log(removed, 'removed list')
    console.log(removedIds, 'removedIds')
  }

  toggleChannels = () => {
    this.setState(prevState => ({toggle: !prevState.toggle}))
  }

  render() {
    const {youtube} = this.props
    const {toggle, video, removedIds} = this.state
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
          <Player {...video}/>
        </Container>
      </Layout>
    );
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
      fetchVideosStart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

