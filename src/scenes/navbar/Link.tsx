import AnchorLink from "react-anchor-link-smooth-scroll"
import { SeletedPage } from "../../shared/types"


type Props = {
  page:string
  seletedPage:SeletedPage
  setSelectedPage: (value: SeletedPage) => void;
}

const Link = ({page,seletedPage,setSelectedPage}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SeletedPage
  return (
    <AnchorLink
      className={`${seletedPage == lowerCasePage ? "text-primary-500":""}
        transition duration-500 hover:text-primary-300
      `}
      href={`${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link