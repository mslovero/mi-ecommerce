import React from "react"
import "./Header.css"
import Head from "./header/Head"
import Navbar from "./Navbar"
import Search from "./Search"

const Header = () => {
	return (
		<>
			<Head />
			<Search />
			<Navbar />

		</>
	)

}

export default Header