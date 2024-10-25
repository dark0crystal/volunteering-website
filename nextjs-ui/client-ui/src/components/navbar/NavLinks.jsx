import Link from "next/link"

export default function NavLinks(){

    const navlinks = [
        {destination:"/volunteering-posts" , name:"Posts"},
        {destination:"/about" , name:"About Us"},
        {destination:"/dashboard" , name:"Dashboard"},
        {destination:"/login" , name:"LogIn"},
    ]
    return(
        <div>
            {navlinks.map((links ,index)=>(
                <Link    className="mx-3 text" key={index} href={links.destination}>{links.name}</Link>
            ))}
        </div>
    )
}