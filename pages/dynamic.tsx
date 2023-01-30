import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async context => {
    return {
        props: {
            myFavNum: 4
        }
    }
}

export default function Dynamic() {
    return <h1>Dynamic</h1>
}