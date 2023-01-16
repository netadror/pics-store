import React, { useContext } from "react"
import Image from "../components/Image"
import { Context } from "../Context"
import { getClass } from "../utils/classes"

function Photos() {
    const { allPhotos } = useContext(Context)
    console.log('allPhotos', allPhotos)

    // const imageElements = allPhotos.map((img, i) => (
    //     <Image key={img.id} img={img} className={getClass(i)} />
    // ))

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomSize = getRandomIntInclusive(1, 30)
    const imageElements = allPhotos.map(img => (
        <Image key={img.id} img={img} className={getClass({ randomSize })} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos