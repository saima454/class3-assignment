import contact from "../components/contact"
import about from "../components/about"
import Contact from "../contact/page";
import About from "../about/page";
import Link from "next/link";

const Navbar=()=>{
    return(
        <div>
            <header>
                <h1>this is a header.</h1>
                <Contact/>
                <About/>
                <Link href="/">Go to home page</Link>
             
                
               

            </header>
            
        </div>
    )
}
export default Navbar;