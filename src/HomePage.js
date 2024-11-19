import logo from "./how_20to_20start_20a_20clothing_20brand.webp"
// import logos from "./clouth-removebg-preview.png"
import logos from "./clouth-removebg-preview.png"
import './HomePage.css'
import { Link } from "react-router-dom"



function Home() {
    return (
        <div>
            <nav className="navbar">
                <ol className="ol">
                    <li className="list2"><Link className="link2" to=''>Home</Link></li>
                    <li className="list2"><Link className="link2" to=''>Shop</Link></li>
                    <li className="list2"><Link className="link2" to=''>Category</Link></li>
                    <li className="list2"><Link className="link2" to=''>Contact</Link></li>
                    <li className="list2"><Link className="link2" to=''>About</Link></li>
                </ol>
                

            </nav>
            <img src={logo} className="image" alt="logo"></img>
            <img src={logos} className="image2" alt="logo"></img>
            <input type="search" className="search" placeholder="Search"></input>
            <button className="btn">Search</button>

            <button className="btn2" > <Link className="list" to="/sign">Sign</Link></button>
            <button className="btn3" >Login</button>
            
            <h1 className="h1">WELLCOME<br></br> TO <br></br>COLOUTH <spam className="span">STUDIO</spam></h1><br></br>
        </div>
        



    );
}
export default Home;