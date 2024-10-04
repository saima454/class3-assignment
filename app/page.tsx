
"use client"

import React from "react"
import { useRouter } from "next/navigation";

import Link from "next/link";


export default function Home(){
  const rout= useRouter();
  return(
    <div>
      <h1>this is a home page.</h1>
      <Link href="/"> Go to home page.</Link>
      <br/> <br/>
      <Link href="/about"> Go to about page.</Link>
      <br/> <br/>
      <Link href="/contact"> Go to contact page.</Link>
      <br/> <br/>
      <Link href="/navbar"> Go to navbar page.</Link>


      <br/><br/>
      <button onClick={()=>rout.push("/")}>Go to home page</button>
      <br/><br/>
      <button onClick={()=>rout.push("/about")}>Go to about page</button>
      <br/><br/>
      <button onClick={()=>rout.push("/contact")}>Go to contact page</button>
     

       
    </div>
  )
}