import {API_URL} from "../app/constants"
import styles from "../styles/movie-video.module.css"

async function getVideos(id:string){
    //await new Promise((resolve)=>setTimeout(resolve,3000));
    //throw new Error('something broke..')
    const response=await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}:{id:string}){
    const videos=await getVideos(id); // video는 list로 정해져있음
    return (
    <div className={styles.container}>
        {videos.map((video)=>(
            <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} 
                title={video.name} allowFullScreen
                />
                ))}
    </div>);
}