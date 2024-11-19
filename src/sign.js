import logo from "./depositphotos_650818688-stock-photo-banner-women-clothing-copy-space.jpg"
import "./sign.css"






function signup(){
    return(
        <div className="sign">
            <img className="image" src={logo} alt="img"></img>
            <form className="form">
                <label className="label">Name:</label><br></br>
                <input type="text" className="input"></input><br></br><br></br>
                <label className="label">M_Number:</label><br></br>
                <input type="number" className="input"></input><br></br><br></br>
                <label className="label">Email:</label><br></br>
                <input type="email" className="input"></input><br></br><br></br>
                <label className="label">Password:</label><br></br>
                <input type="Password" className="input"></input><br></br><br></br>
                <label className="label">Confirm Password</label><br></br>
                <input type="password" className="input"></input><br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default signup;