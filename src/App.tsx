import { useEffect, useState } from "react";
import NavBar from "./scenes/navbar";
import { SeletedPage } from "./shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClases"
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";




function App() {
  const [seletedPage,setSelectedPage] = useState<SeletedPage>(SeletedPage.Home)
  const [isTopOfPage ,setIsTopOFPage] = useState<boolean>(true)

  useEffect(()=>{
    const hadleScrrol = () =>{
      if(window.scrollY === 0){
        setIsTopOFPage(true)
        setSelectedPage(SeletedPage.Home)
      }
      if(window.scrollY !== 0){
        setIsTopOFPage(false)
      }
    }
    window.addEventListener("scroll",hadleScrrol)
    return ()=>window.removeEventListener("scroll",hadleScrrol)
  },[])

  return (
    <>
      <div className="app bg-gray-20  ">
        <NavBar isTopOfPage={isTopOfPage} seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/> 
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
