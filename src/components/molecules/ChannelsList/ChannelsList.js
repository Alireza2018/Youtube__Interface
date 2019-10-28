import React from 'react'

import MenuItem from '../../atoms/MenuItem'
import Checkbox from '../../atoms/Chekbox'


class ChannelsList extends React.Component {

    state = { }

    handleChange = event => {
        this.props.onSelectItem(event.target.name)
    }

    renderChannels = () => {
        const {channels} = this.props
        let uiItems = []
        for(let i = 0; i < channels.length; i++) {
            for(let j = 0; j < channels[i].items.length; j++) {
                let title = channels[i].items[j].snippet.title
                uiItems.push(
                    <MenuItem key={i}>
                        <Checkbox 
                            onChange={(event) => this.handleChange(event)}
                            name={channels[i].items[j].id}
                            label={title}
                        />  
                    </MenuItem>
                )
            }
        }

        return uiItems
    }

    render() {
        
        return(
            <>{this.renderChannels()}</>
        )
    }
}


export default ChannelsList