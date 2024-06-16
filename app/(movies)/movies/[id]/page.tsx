import {Suspense} from "react"
import MovieInfo,{getMovie} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


interface IParams{
    params:{id:string};
}

export async function generateMetadata({params:{id}}:IParams){ // fetch가 가능하게 만드는 함수
    const movie=await getMovie(id);
    return { // 동적인 제목을 갖고 있는 페이지를 위해 존재
        title: movie.title,
    };
}


// 2개 이상을 fetch 하려고 하면 순차적으로 이루어지기 때문에 너무 느려짐 => 병렬!

export default async function MovieDetail({params:{id}}:{params:{id:string}}){
    return (
        <div>
            <Suspense fallback=<h1>Loading movie info</h1>>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback=<h1>Loading movie videos</h1>>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}