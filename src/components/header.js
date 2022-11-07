import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { FiPhoneCall } from "react-icons/fi"
import { FiMessageSquare } from "react-icons/fi"
import { TbLanguageHiragana } from "react-icons/tb"

const Header = ({ siteTitle }) => (
  <header className="inset-x-0 bg-emerald-500 fixed h-14">
    <div className="container mx-auto flex justify-between w-full h-full items-center">
      <div className="text-2xl p-2 text-gray-200 hover:text-white cursor-pointer">
        HelperUsa
      </div>
      <div>
        <nav>
          <ul className="flex items-center">
            <li className="p-2 text-gray-200 hover:text-white cursor-pointer">
              Home
            </li>
            <li className="p-2 text-gray-200 hover:text-white cursor-pointer">
              About
            </li>
            <li className="p-2 text-gray-200 hover:text-white cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="group flex items-center gap-4">
        <div className="w-full h-full flex items-center">
          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4  transition-all rounded-l-2xl group-hover:rounded-2xl
         group-hover:-translate-x-0.5 ease-in-out duration-500 shadow-lg shadow-transparent hover:shadow-teal-500 hover:drop-shadow-lg"
          >
            <FiPhoneCall className="inline-block" size="20px" />
          </button>
          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 transition-all rounded-r-2xl group-hover:rounded-2xl
        group-hover:translate-x-0.5 ease-in-out duration-500 shadow-lg shadow-transparent hover:shadow-teal-500 hover:drop-shadow-lg"
          >
            <FiMessageSquare className="inline-block" size="20px" />
          </button>
        </div>
        <button className="bg-emerald-700 rounded-full p-2">
          <TbLanguageHiragana
            className="inline-block"
            size="30px"
            color="#fff"
          />
        </button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
