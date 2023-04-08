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
    TbLetterJ,
    TbLetterK,
    TbLetterL,
    TbLetterM,
    TbLetterN,
    TbLetterO,
    TbLetterP,
    TbLetterQ,
    TbLetterR,
    TbLetterS,
    TbLetterT,
    TbLetterU,
    TbLetterV,
    TbLetterW,
    TbLetterX,
    TbLetterY,
    TbLetterZ,
} from "react-icons/tb";

const Anime = () => {
    // LIST ANIME
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
                                    <span className="font-semibold text-white opacity opacity-70">ANIME PAGE</span>
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
                {/* Container-2 Untuk penempatan fitur list anime */}
                <div className="truncate col-span-1 md:col-span-4">
                    {/* Flex */}
                    <div className="flex flex-col z-50">
                        {/* Title */}
                        <div className="p-4 pb-4">
                            <h1 className="text-3xl font-bold text-white">List Anime</h1>
                            <div class="text-sm breadcrumbs">
                                <ul>
                                    <li><a onClick={() => navigate('/')}>Home</a></li>
                                    <li><a onClick={() => navigate('/Animepage')}>Anime</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 max-h-[24rem] overflow-y-scroll">
                            {/* Card Start*/}
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterA /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3 ">
                                    <span className="text-9xl text-green-500"><TbLetterB /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterC /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterD /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterE /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterF /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterG /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterH /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterI /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterJ /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterK /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterL /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterM /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterN /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterO /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterP /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterQ /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterR /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterS /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterT /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterU /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterV /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterW /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterX /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterY /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card md:w-72 p-4 image-full">
                                <div className="p-3">
                                    <span className="text-9xl text-green-500"><TbLetterZ /></span>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Now this is a story all about how</li>
                                        <li>Now this is a story all about how</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Card End*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anime