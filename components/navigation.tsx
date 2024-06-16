"use client"

// css가 아닌 javascript 파일 처럼 생각!
import style from "../styles/navigation.module.css" 
import Link from "next/link"
import {usePathname} from "next/navigation";
import {useState} from "react"

export default function Navigation(){
    const path= usePathname();
    const [count,setCount]=useState(0)
    console.log(path);
    // 마치 javascript처럼 모듈 파일을 class를 지닌 object로 간주
    return (<nav className={style.nav}> 
                <ul>
                    <li>
                        <Link href="/">Home</Link> {path==="/"? "🔥":""}
                    </li>
                    <li>
                        <Link href="/about-us">About Us</Link> {path==="/about-us"? "🔥":""}
                    </li>
                    
                    {/* <li>
                        <button onClick={()=>setCount((c)=>c+1)}>{count}</button>
                    </li> */
                    }
    
                </ul>
            </nav>);    
}