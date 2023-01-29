import { useRouter } from "next/router"

export default function FruitName() {

    const router = useRouter()

    console.log(router)

    function takeMeHome() {
        router.push('/')
    }

    return <h1>Hello from 1st segment {router.query.name} {router.query.subname}
        <button onClick={takeMeHome} >Home</button>


    </h1>
}



//http://localhost:3000/fruit/hlww