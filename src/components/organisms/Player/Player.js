import React from 'react'
import PropTypes from "prop-types"
import YouTube from 'react-youtube'

import { WATCH_URL } from '../../../sagas/api/apiUrl'
import TitleBar from '../../molecules/TitleBar'

import styles from './Player.module.css'

const Player = props => {

    const {
        channelTitle,
        title,
        videoId,
        ...rest
    } = props

    const opts = {
        height: '460',
        width: '720',
        playerVars: { 
          autoplay: 1
        }
    }

    const videoInfo = {channelTitle: channelTitle, title: title}
        
    return(
        <>
            <TitleBar {...videoInfo}/>
            <div className={styles.videoContainer}>
                {
                    (videoId !== undefined) ?
                        <YouTube
                            videoId={videoId}
                            opts={opts}
                        />
                    :
                        <div className={styles.content}>
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
    videoId: PropTypes.string
}

export default Player