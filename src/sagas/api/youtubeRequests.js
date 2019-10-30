import axios from 'axios'
import { VIDEOS_URL} from './apiUrl'
import { YOUTUBE_API_KEY } from './apiKey'

export async function fetchVideos(channelIds) {
    
    let promises = []
    for(let id in channelIds) {
        let url = `${VIDEOS_URL}?channelId=${id}&part=snippet,id&order=date&key=${YOUTUBE_API_KEY}`
        let p = axios.get(url)
            .then( response => {
                let videos = []
                response.data.items.map( item => {
                    videos.push(
                        {
                            videoId: item.id.videoId,
                            channelTitle: item.snippet.channelTitle,
                            title: item.snippet.title,
                            publishedAt: item.snippet.publishedAt
                        }
                    )
                })
                return videos
            })
            .catch(error => { return error})

        promises.push(p)
    }
    
    let result = await axios.all(promises)

    //Here we create the common list of selected channels by merging the result into one array
    let commonList = Array.prototype.concat.apply([], result)

    return commonList
}
