import reactDom from 'react-dom';
import './topbar.css';
import {Link} from "react-router-dom";
export default function TopBar() {
    return (
        <div className ="top">
            <div className = "topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className = "topCenter">
                <ul className="topList">
                    <li className="topListItem">
                    <Link to ="/">Home</Link>
                    </li>
                    <li className="topListItem"> <Link to ="/">About Us</Link> </li>
                    <li className="topListItem"> Contact </li>
                    <li className="topListItem"> <Link to ="/blogs">Blogs</Link> </li>
                    <li className="topListItem"> Logout </li>
                </ul>
            </div>
            <div className = "topRight">
            <ul className="topList">
                    <li className="topListItem">
                    <Link to ="/login">Login</Link>
                    </li>
                    <li className="topListItem"> <Link to ="/register">Register</Link> </li>
                    <li className="topListItem"> Logout </li>
                </ul>
                <img
                 className ="topImg"
                 src ="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                 alt="Not found"
                 />
                 <i className = "topIcon fas fa-search"></i>
            </div>
        </div>
    )
}
