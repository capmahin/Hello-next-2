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

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{
            params: {}
        }],
        fallback: false
    }
}

export default function MyFruit(props) {
    const router = useRouter()



    return <h1>Hello{props.myFavNum}</h1>
}