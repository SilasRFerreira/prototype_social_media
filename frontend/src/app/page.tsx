import HomeForm from "@/app/home/homeForm"
import Header from "@/components/header"


const Home = () => {    
  return(
    <>     
      <Header location='login'/>
      <main className="w-full flex justify-center">
        <div className="my-16 flex items-center justify-center w-4/5 max-md: 11/12">
          <HomeForm/>
        </div>
      </main>
    </>
  )
}

export default Home