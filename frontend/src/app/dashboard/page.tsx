import Header from "@/components/header"
import TopSection from "./topSection"
import BottomSection from "./bottomSection"

const Dashboard = () => {
    return(
        <>
            <Header/>
            <main className="">
                <TopSection/>
                <BottomSection/>
            </main>
        </>
    )
}

export default Dashboard