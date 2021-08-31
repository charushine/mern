import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar ">
      <div className="sidbarItem">
        <span className="sidebarTitle">About Us</span>
        <img className="sidebarImage" src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="sidebarImage" />
        <p>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">IT</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>

        <ul className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </ul>
      </div>
    </div>
  );
}
