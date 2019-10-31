import axios from 'axios'
import { VIDEOS_URL} from './apiUrl'
import { YOUTUBE_API_KEY } from './apiKey'

//This function iterates through the array of selected channel ids and fetchs data from google youtube API 
export async function fetchVideos(channelIds) {
    
    //The api calls will return data ordered by date
    let promises = []
    for(let id in channelIds) {
        let url = `${VIDEOS_URL}?channelId=${id}&part=snippet,id&order=date&key=${YOUTUBE_API_KEY}`
        let p = axios.get(url)
            .then( response => {
                let videos = []
                response.data.items.map( item => {
                    //I am only interested in the following four attributes inside the response object
                    //I extract & return them as my data source object to feed the app
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
    
    //I am waiting for all the promises of the api calls to resolve and only then will continue
    let result = await axios.all(promises)

    //Here I create the common list of selected channels by merging the result into one array
    let commonList = Array.prototype.concat.apply([], result)
    let size = 10
    let featuredVideos = commonList.filter( (video, idx) => idx < size )

    return featuredVideos
}
