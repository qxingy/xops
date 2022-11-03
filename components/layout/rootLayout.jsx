"use client"

import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"

/**
 * 根模板
 * @param {{items:{name:string,link:string}[]}} props 
 * @returns 
 */
export default function RootLayout(props){
  return (
    <div className="flex">
      <div className="container w-60 h-screen bg-base-200">
        <ul className='menu p-2'>
          <li className=" h-28">
            <a className='btn btn-ghost text-xl m-auto' onClick={()=>alert("hello world")}>hello wrodl</a>
          </li>
          {
            props.items.map((value,index) => 
              <li key={index}>
                <Link href={value.link} className={`btn btn-ghost rounded-lg  ${useSelectedLayoutSegments()[0]==value.link&&"active"}`}>
                  {value.name}
                </Link>
              </li>)
          }
        </ul>
      </div>
      <div className="container mt-10 mx-10 p-10 rounded-2xl shadow-2xl">
        {props.children}
      </div>
    </div>
  )
}