import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-12 items-center justify-between px-32 py-12">
      <div className="logo">
        <Link to={"/"}>Logo.Dev</Link>
      </div>

      <ul>
        <li className="flex gap-4">
          <Link to={"home"}>Home</Link>
          <Link to={"about"}>About</Link>
          <Link to={"blog"}>Blog</Link>
          <Link to={"contact"}>Contact</Link>
          <Link to={"services"}>Services</Link>
          <Link to={"portfolio"}>Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
