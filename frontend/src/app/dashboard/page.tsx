import Header from "@/components/header"
import TopSection from "./topSection"
import BottomSection from "./bottomSection"

const Dashboard = () => {
    return(
        <>
            <Header/>
            <main className="">
                <div className="my-12 mx-auto w-11/12">
                    <TopSection/>
                    <BottomSection/>
                </div>                
            </main>
        </>
    )
}

export default Dashboard