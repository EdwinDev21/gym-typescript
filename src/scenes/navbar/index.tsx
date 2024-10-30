import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"

type Props = {
  seletedPage:string;
  setSelectedPage:(value:string) =>void;
}

function NavBar({seletedPage,setSelectedPage}: Props) {
  const flexBetween = "flex items-center justify-between"
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-6`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />
            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
               <Link page="Home" seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
               <Link page="Benefits"  seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
               <Link page="Classes"  seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
               <Link page="Contact Us"  seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sing In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar