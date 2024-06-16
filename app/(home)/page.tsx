import Link from 'next/link';
import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import {API_URL} from "../constants";

export const metadata={
    title: "Home",
};


// 로딩 상타내는 존재하지만 빠른 것은 server componet에서 내가 fetch한 것을 기억하기 때문!
// API 응답이 느리면 오래걸리 수 있음, 한번만 API에 요청되고 나머지는 안되서 빠른거임
// framework이기 때문에 fetch된 url을 자동으로 캐싱!, backend에서 캐싱
async function getMovies(){
    //console.log("i'm fetching!");
    // 즉, server component이기 때문에 백앤드에서 fetch가 일어난다는 것을 알 수있는 코드(서버에서 응답이 없는 것)
    //await new Promise((resolve)=>setTimeout(resolve,5000)); // 백엔드에서 5초 동안 대기함
    const response =await fetch(API_URL); //이것만 실제로 fetch되어 API에 요청
    const json=await response.json();
    return json;
    //return fetch(URL).then(response => response.json()); // cosnt response, json과 같음
}



export default async function HomePage() { // await를 쓰고싶기 때문에 async 사용(매우 기본)
  const movies=await getMovies();
    //div 묶음을 렌더링
    return (<div className={styles.container}>
                {movies.map((movie=>
                    <Movie key={movie.id} id={movie.id} 
                        poster_path={movie.poster_path} title={movie.title} />
                    
            ))}
            </div>           
    );
}
    