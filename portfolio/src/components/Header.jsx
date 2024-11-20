// import "./Header.css";
// import logo from "../assets/logo.png";
// export default function Header(){
//     return(
//         <>
//             <div className="header-nav">
//             <img src={logo} alt="logo"/>
//             <h2>Shubham Kumar Maurya</h2>
//             <nav>
//             <ul className="Header-nav-ul">
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Skills</li>
//                 <li>Experience</li>
//                 <li>Project</li>
//                 <li>Contact</li>
//             </ul>
//             </nav>
//             </div>
//         </>
//     );
// }
import "./Header.css";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="header-nav">
                <img src={logo} alt="logo" />
                <h2>Shubham Kumar Maurya</h2>
                <nav>
                    <ul className={`Header-nav-ul ${menuOpen ? "open" : ""}`}>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Experience</a></li>
                        <li><a>Project</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>
        </>
    );
}
