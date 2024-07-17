import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";


export default function Footnote() {
  return (
    <Footer container className="h-[8vh] fixed bottom-0 bg-whiteText  text-base rounded-none z-50">
  <Footer.Copyright href="#" by="Neel Bagchi" year={2024} />
  <Footer.LinkGroup className="mr-2">
    <Link to='/Contact'>
    <p className="mr-3 text-dark_gray  hover:text-teal hover:unde">Connect with us @ </p>
    </Link>
    <Footer.Link href="https://www.linkedin.com/in/bedabrata-bagchi-316088a7/" target="_blank" className="text-dark_gray hover:text-teal">LinkedIn</Footer.Link>
    <Footer.Link href="https://www.facebook.com/neel.bagchi/" target="_blank" className="text-dark_gray hover:text-teal">Facebook</Footer.Link>
    <Footer.Link href="https://www.twitter.com/Neelbagchi91" target="_blank" className="text-dark_gray hover:text-teal">Twitter</Footer.Link>
    <Footer.Link href="https://www.threads.net/@neelbagchi" target="_blank" className="text-dark_gray hover:text-teal">Threads</Footer.Link>
  </Footer.LinkGroup>
</Footer>

  )
}



