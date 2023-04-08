import React from "react"
import { useNavigate } from "react-router-dom";
import Dummy from '../assets/user.jpg'

const Navbar = () => {
    // NAVBAR
    /*Error tampillan keseluran menghilang ketika menggunakan useNavigate() */
    // const navigate = useNavigate()

    return (
        // Container
        <div className="md:w-11/12 md:mx-auto">
            {/* Navbar */}
            <div className="md:mt-6 navbar bg-blue-200 md:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                {/* <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div> */}
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => navigate('/')}>Shunimex</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={Dummy} alt="/" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a className="justify-between">Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar