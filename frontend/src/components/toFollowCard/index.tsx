import ShownUserData from "../shownUserData"


const ToFollowCard = () => {
    return(
        <li className="flex gap-10 w-[320px]">
            <ShownUserData/>
            <button>seguir</button>
        </li>
    )
}

export default ToFollowCard