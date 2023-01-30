import { useRouter } from "next/router";

import { GetStaticPaths, GetStaticProps } from "next"
import path from 'path'

export const getStaticProps: GetStaticProps = async (context) => {

    const fs = require('fs')




    return {
        revalidate: 10,
        props: {
            myFavNum: Math.random()
        }
    }
}
//start
//localhost:3000/fruit/hello => take the output =>store it on the disk
//localhost:3000/fruit/world => take the output =>store it on the disk
//Done

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{
            params: { name: 'hello' }
        }, { params: { name: 'world' } }],
        fallback: true
    }
}

export default function MyFruit(props) {
    const router = useRouter()



    return <h1>Hello{props.myFavNum}</h1>
}