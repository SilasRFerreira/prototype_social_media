import ToFollowCard from "../toFollowCard"

const ToFollowList = () => {
    return(
        <section className="flex flex-col gap-10 max-lg:w-[700px]">
            <h2 className="font-bold text-xl">Sugestões para você seguir</h2>
            <ul className="flex lg:flex-col gap-6 overflow-auto max-h-[280px]">
                <ToFollowCard/>
                <ToFollowCard/>
                <ToFollowCard/>
                <ToFollowCard/>
            </ul>
        </section>
    )
}

export default ToFollowList