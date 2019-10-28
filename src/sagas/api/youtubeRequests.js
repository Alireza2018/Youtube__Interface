import axios from 'axios'
import { CHANNELS_URL, VIDEOS_URL, CHANNEL_SECTIONS_URL } from './apiUrl'
import { YOUTUBE_API_KEY } from './apiKey'

export async function fetchAllChannels(channelIds) {

    let promises = channelIds.map( id => {
        return axios.get(`${CHANNELS_URL}?part=snippet,contentDetails&id=${id}&key=${YOUTUBE_API_KEY}`)
                .then( response => { return response.data})
                .catch( error => { return error })
    })

    let results = await axios.all(promises)
    return results
}

export async function fetchChannelInfo(channelId) {
    const url = `${CHANNEL_SECTIONS_URL}?channelId=${channelId}&part=snippet,contentDetails&key=${YOUTUBE_API_KEY}`
    let result = await axios.get(url)
    return { channelId: channelId, ...result.data}
}

export async function fetchChannelVideos(channelId) {
    const url = `${VIDEOS_URL}?channelId=${channelId}&part=snippet,id&order=date&key=${YOUTUBE_API_KEY}`
    let result = await axios.get(url)
    console.log(result)
    return result
}
