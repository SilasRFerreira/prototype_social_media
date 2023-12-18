import ShownUserData from "@/components/shownUserData"
import PostCreationForm from "./postCreationForm"
import ToFollowList from "@/components/toFollowList"

const TopSection = () => {
    return(
        <section className="flex flex-wrap justify-between mx-auto gap-8">
            <div className="flex flex-col gap-4 p-4 w-[60%] max-lg:w-[700px]">
                <ShownUserData/>
                <PostCreationForm/>
            </div>
            <ToFollowList/>
        </section>
    )
}

export default TopSection