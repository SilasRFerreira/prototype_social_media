import ShownUserData from "@/components/shownUserData"
import PostCreationForm from "./postCreationForm"

const TopSection = () => {
    return(
        <section className="">
            <div className="flex flex-col gap-6 p-4 max-w-2xl bg-green-300">
                <ShownUserData/>
                <PostCreationForm/>
            </div>
            <div>

            </div>
        </section>
    )
}

export default TopSection