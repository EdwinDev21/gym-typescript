import  { ReactNode } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SeletedPage } from './types'

type Props = {
  children : ReactNode;
  setSelectedPage: (vale:SeletedPage) => void;
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className="raunded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={()=>setSelectedPage(SeletedPage.ContactUs) }
      href={`#${SeletedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton