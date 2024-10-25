import Brand from "./Brand";
import NavLinks from "./NavLinks";

export default function Navbar(){
    return(
        <div className="d-flex justify-content-between w-75  p-3 rounded-4 bg-primary-white border text-black ">
            <Brand/>
            <NavLinks/>
        </div>
    )
}