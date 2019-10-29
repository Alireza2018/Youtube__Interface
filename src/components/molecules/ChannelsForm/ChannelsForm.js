import React from 'react'

import MenuItem from '../../atoms/MenuItem'
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
        let updatedList = Object.assign({}, this.state.selectedChannels, {[name]: val})
        this.setState(
            { selectedChannels: updatedList },
            //() => this.props.onItemClick(this.state.selectedChannels, name)
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.selectedChannels)
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


export default ChannelsList