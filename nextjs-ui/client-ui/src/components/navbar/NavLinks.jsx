import Link from "next/link"

export default function NavLinks(){

    const navlinks = [
        {destination:"/volunteering-posts" , name:"Posts" , style:"text-dark"},
        {destination:"/about" , name:"About Us", style:"text-dark"},
        {destination:"/dashboard" , name:"Dashboard", style:"text-dark"},
        {destination:"/login" , name:"LogIn", style:"text-dark "},
    ]
    return(
        <div>
            {navlinks.map((links ,index)=>(
                <Link className={`mx-3 h5 ${links.style}`} key={index} href={links.destination}>{links.name}</Link>
            ))}
        </div>
    )
}