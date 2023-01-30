import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async (context) => {

    const fs = require('fs')

    return {
        props: {
            myFavNum: 10
        }
    }
}

export default function Dynamic(props) {
    return <h1>Dynamic Number -{props.myFavNum}</h1>
}