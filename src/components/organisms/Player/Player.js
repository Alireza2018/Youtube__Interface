import React from 'react'
import PropTypes from "prop-types"
import YouTube from 'react-youtube' //npm module that plays the youtube video

import TitleBar from '../../molecules/TitleBar' //This component will display the channel & video tilte of the currently playing video

import styles from './Player.module.css'

const Player = props => {

    const {
        channelTitle,
        title,
        videoId,
        removedId,
        ...rest
    } = props

    const opts = {
        height: '460',
        width: '720',
        playerVars: { 
          autoplay: 1
        }
    }

    //If the currently being played video is removed from the list, I also remove it from the player component
    const videoInfo = (videoId !== removedId) ? {channelTitle: channelTitle, title: title} : {}
        
    return(
        <>
            <TitleBar {...videoInfo}/>
            <div className={styles.videoContainer}>
                {
                    (videoId !== undefined && videoId !== removedId) ?
                        <>
                            <YouTube
                                videoId={videoId}
                                opts={opts}
                            />
                        </>
                    :
                        <div className={styles.content}>
                            <h3>Youtube Grensesnittoppgave</h3>
                        </div>
                }
            </div>
            
        </>
    )
    
}

Player.defaultProps = {
    channelTitle: '',
    title: ''
}

Player.propTypes = {
    channelTitle: PropTypes.string,
    title: PropTypes.string,
    videoId: PropTypes.string,
    removedId: PropTypes.string
}

export default Player