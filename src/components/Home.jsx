import React from "react"
import { useNavigate } from "react-router-dom";
import {
    TbLetterA,
    TbLetterB,
    TbLetterC,
    TbLetterD,
    TbLetterE,
    TbLetterF,
    TbLetterG,
    TbLetterH,
    TbLetterI,
    TbLetterJ
} from "react-icons/tb";
import Dummy from '../assets/dummy.jpg'

const Homepage = () => {
    // HOMEPAGE
    const navigate = useNavigate()

    return (
        // Container
        <div className="md:w-11/12 md:mx-auto py-4">
            {/* Grid Template Coloums */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                {/* Container-1 Untuk penempatan fitur home, anime dan jadwal */}
                <div className="truncate text-center col-start-1">
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="pt-4">
                            <div className="drawer-side">
                                <label for="my-drawer-2" className="drawer-overlay"></label> 
                                <ul className="menu p-4 bg-blue-200 md:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-base-content">
                                    <span className="font-semibold text-white opacity opacity-70">HOMEPAGE</span>
                                    <li><a onClick={() => navigate('/')}><TbLetterH />Home</a></li>
                                    <li><a onClick={() => navigate('/Animepage')}><TbLetterA />Anime</a></li>
                                    <li><a onClick={() => navigate('/Jadwalpage')}><TbLetterJ />Jadwal</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-1 max-h-[14rem] overflow-y-scroll">
                            <div className="drawer-side">
                                <label for="my-drawer-2" className="drawer-overlay"></label> 
                                <ul className="menu p-4 bg-blue-200 md:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-base-content">
                                    <span className="font-semibold text-white opacity opacity-70">GENRE</span>
                                    <li><a><TbLetterA />Action</a></li>
                                    <li><a><TbLetterB />Boob</a></li>
                                    <li><a><TbLetterC />Comedy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container-2 Untuk penempatan fitur ongoing anime */}
                <div className="truncate col-span-1 md:col-span-4">
                    {/* Flex */}
                    <div className="flex flex-col z-50">
                        {/* Title */}
                        <div className="p-4 pb-4">
                            <h1 className="text-3xl font-bold text-white">List Anime Ongoing</h1>
                            <div class="text-sm breadcrumbs">
                                <ul>
                                    <li><a>Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            {/* Card */}
                            <div className="card md:w-72 p-4 image-full">
                                <figure><img src={Dummy} alt="/" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Judul Anime</h2>
                                    <div class="rating rating-xs">
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning">Check Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <figure><img src={Dummy} alt="/" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Judul Anime</h2>
                                    <div class="rating rating-xs">
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning">Check Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <figure><img src={Dummy} alt="/" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Judul Anime</h2>
                                    <div class="rating rating-xs">
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning">Check Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <figure><img src={Dummy} alt="/" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Judul Anime</h2>
                                    <div class="rating rating-xs">
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-warning">Check Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pagination */}
                        <div className="p-4 pt-4">
                            <div className="btn-group grid grid-cols-2 gap-2">
                                <button className="btn btn-outline bg-blue-200 md:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">Back</button>
                                <button className="btn btn-outline btn-primary bg-blue-200 md:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage