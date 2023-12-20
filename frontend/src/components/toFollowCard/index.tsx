import ShownUserData from "../shownUserData"


const ToFollowCard = () => {
    return(
        <li className="min-w-[260px] flex flex-wrap gap-4 p-1.5">
            <ShownUserData/>
            <button className="text-white bg-brand-1 hover:bg-brand-2 py-1 my-auto w-[60px] h-6 rounded rounded border-solid border-2 border-brand-1 hover:border-brand-2 flex items-center justify-center">seguir</button>
        </li>
    )
}

export default ToFollowCard