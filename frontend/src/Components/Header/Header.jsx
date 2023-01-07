import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from './Header.css'
import { Link } from 'react-router-dom'

function header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className={style. header}>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>

				<button>
				<Link to='/Login'>login</Link>
				</button>

				<button>
				<Link to='/Register'>Register</Link>
				</button>

				<Link to='/Dashboard'>
				<button>
				<a href="/#">Dashboard</a>
				</button>
				</Link>

				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default header;