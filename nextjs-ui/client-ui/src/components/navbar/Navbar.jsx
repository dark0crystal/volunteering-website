import Brand from "./Brand";
import NavLinks from "./NavLinks";

export default function Navbar(){
    return(
        <div className="d-flex justify-content-between w-75  p-4 border-1 rounded-pill bg-primary-white border border-grey">
            <Brand/>
            <NavLinks/>
        </div>
    )
}