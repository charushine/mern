import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className = "headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src= "https://images.pexels.com/photos/3826676/pexels-photo-3826676.jpeg?cs=srgb&dl=pexels-cottonbro-3826676.jpg&fm=jpg" alt="header">

            </img>
        </div>
    )
}
