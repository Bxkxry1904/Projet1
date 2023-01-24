import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg'
          src={
            "https://www.havelsan.com.tr/content/images/uploads/teknoloji_detay,6138_big.png"
          }
          alt=""
        />
        <p>
          lorem ipsum est, en imprimerie, une suite de mots sans signification
          utilisée à titre provisoire pour calibrer une mise en page
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
