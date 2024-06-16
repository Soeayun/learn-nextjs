"use client"; //onClick 때문에!

import Link from "next/link";
import styles from "../styles/movie.module.css";
import {useRouter} from "next/navigation";

interface IMovieProps{ // 영화 속성을 정의하는 TypeScript 인터페이스
    title:string;
    id:string;
    poster_path:string;
}


export default function Movie({title,id,poster_path}:IMovieProps){
    const router=useRouter(); // 현재 라우터 상태아 정보에 접근 가능
    const onClick=()=> { // 컴포넌트의 요소(<img>요소)가 클릭될 때 호출
        router.push(`/movies/${id}`) // 클릭 시 지정된 URL로 이동(라우터 객체의 메서드)
    }
    return(
        <div className={styles.movie} > {/* CSS 모듈 사용하여 스타일 적용 */}
            <img src={poster_path} alt={title} onClick={onClick} />{/* 포스터 이미지 */}
            <Link prefetch href={`/movies/${id}`}>{title}</Link> {/* 영화 제목을 링크로 표시 */}
        </div>
    );
}