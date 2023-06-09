import React from "react"
import { useNavigate } from "react-router-dom"
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
} from "react-icons/tb"

const Detail = () => {
    // DETAIL ANIME
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
                {/* Container-2 Untuk penempatan fitur detail anime */}
                <div className="truncate col-span-1 md:col-span-4">
                    {/* Flex */}
                    <div className="flex flex-col z-50">
                        {/* Title */}
                        <div className="p-4 pb-4">
                            <h1 className="text-3xl font-bold text-white">Detail Anime</h1>
                            <div class="text-sm breadcrumbs">
                                <ul>
                                    <li><a onClick={() => navigate('/')}>Home</a></li>
                                    <li><a onClick={() => navigate('/Detailpage')}>Detail</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            {/* Detail */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail