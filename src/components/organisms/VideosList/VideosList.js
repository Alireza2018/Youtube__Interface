import React from 'react'
import classNames from 'classnames'
import PropTypes from "prop-types"

import MenuItem from '../../molecules/MenuItem'
import Button from '../../atoms/Button'

import styles from './VideosList.module.css'


const VideosList = props => {

    const {
        videos,
        removedIds,
        onSelectItem,
        onRemoveItem
    } = props

    const itemClick = (video) => {
        onSelectItem(video)
    }

    const removeItem = (video) => {
        onRemoveItem(video)
        console.log('remove movie')
    }

    return(
        <>
            {
                videos.map( (video, idx) => {
                    return(
                        <>
                            {
                                (removedIds.indexOf(video.videoId) === -1) && (
                                    <MenuItem 
                                        key={idx} 
                                        className={styles.movieCard}
                                    >
                                        <p style={{marginTop: 0}}>{video.title.substring(0, 30)}...</p>
                                        <div className={styles.footer}>
                                            <p style={{margin:0}}>{video.publishedAt}</p>
                                            <Button
                                                simple
                                                onClick={() => itemClick(video)}
                                            >
                                                Velge
                                            </Button>
                                            <Button 
                                                simple
                                                onClick={() => removeItem(video)}
                                            >
                                                Ikke Vis
                                            </Button>
                                        </div>
                                    </MenuItem>
                                )
                            }
                        </>
                    )
                })
            }
        </>
    )
}


VideosList.propTypes = {
    videos: PropTypes.array,
    removedIds: PropTypes.array,
    onSelectItem: PropTypes.func,
    onRemoveItem: PropTypes.func
}

export default VideosList