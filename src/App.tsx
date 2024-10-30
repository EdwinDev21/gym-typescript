import { useState } from "react";
import NavBar from "./scenes/navbar";

function App() {
  const [seletedPage,setSelectedPage] = useState<string>("home")
  return (
    <>
      <div className="app bg-gray-20  ">
        <NavBar seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
      </div>
    </>
  );
}

export default App;
