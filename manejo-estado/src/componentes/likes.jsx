import { useState } from "react";

function Likes() {

    const [likes, setLikes] = useState(0)

    const darLike = () => {
        if (likes === 1) {
            setLikes(0)
        } else {
            setLikes(likes + 1)
        }
    }



    return (
        <div>
            <h1>Likes</h1>
            <p>{likes}</p>

            <button onClick={darLike}>Like</button>

        </div>
    )
}

export default Likes
