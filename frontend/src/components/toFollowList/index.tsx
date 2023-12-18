import ToFollowCard from "../toFollowCard"

const ToFollowList = () => {
    return(
        <section className="flex flex-col gap-10 max-lg:w-[700px] bg-red-400 ">
            <h2 className="font-bold text-xl">Sugestões para você seguir</h2>
            <ul className="flex lg:flex-col gap-6">
                <ToFollowCard/>
                <ToFollowCard/>
                <ToFollowCard/>
            </ul>
        </section>
    )
}

export default ToFollowList