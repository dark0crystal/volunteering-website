"use client"

import { useEffect } from "react"

export default function ImportBootstrap(){
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle.js");
    },[]);

    return(
        <></>
    )
}