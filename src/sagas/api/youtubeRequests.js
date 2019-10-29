import axios from 'axios'
import { VIDEOS_URL} from './apiUrl'
import { YOUTUBE_API_KEY } from './apiKey'

export async function fetchChannelVideos(channelId) {
    const url = `${VIDEOS_URL}?channelId=${channelId}&part=snippet,id&order=date&key=${YOUTUBE_API_KEY}`
    let result = await axios.get(url)
    return {channelId, ...result.data}
}
