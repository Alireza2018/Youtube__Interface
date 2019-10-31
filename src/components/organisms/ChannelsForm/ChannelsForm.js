import React from 'react'
import PropTypes from "prop-types"

import MenuItem from '../../molecules/MenuItem'
import Checkbox from '../../atoms/Chekbox'
import Button from '../../atoms/Button'

import styles from './ChannelsForm.module.css'

class ChannelsList extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            selectedChannels: {}
        }
    }

    handleChange = event => {
        const val = event.target.checked
        const name = event.target.name
        //Here I check which checkbox is selected and create an object of channelId & true or false key:value
        let updatedList = Object.assign({}, this.state.selectedChannels, {[name]: val})
        this.setState({ selectedChannels: updatedList }) //Holds the channels ids selected by user
    }

    //Submit the for and pass on the array of channel ids to the parent component
    //These ids will be sent to api  call function
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.selectedChannels)
    }

    render() {
        const { channels } = this.props 
        const { selectedChannels } = this.state
    
        return(
            <form className={styles.form} onSubmit={this.handleSubmit}>
                {
                    channels.map( (channel, idx) => {
                        return(
                            <MenuItem key={idx}>
                                <Checkbox 
                                    onChange={(event) => this.handleChange(event)}
                                    name={channel.id}
                                    label={channel.title}
                                    value={selectedChannels[channel.id]}
                                />  
                            </MenuItem>
                        )
                    }) 
                }
                <Button>Laste Inn Videoer</Button>
            </form>
        )
    }
}

ChannelsList.propTypes = {
    channels: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}


export default ChannelsList