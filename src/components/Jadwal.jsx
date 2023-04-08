import React from "react"
import { useNavigate } from "react-router-dom"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
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

const Jadwal = () => {
    // JADWAL ANIME
    const navigate = useNavigate()
    
    // Untuk memberikan jadwal pada tanggal yang di tentukan
    const events = [
        {title: 'Meeting', start: new Date()},
        {title: 'Overlord', start: '2023-04-16', end: '2023-04-21'}
    ]

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
                                    <span className="font-semibold text-white opacity opacity-70">JADWAL PAGE</span>
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
                {/* Container-2 Untuk penempatan fitur jadwal anime */}
                <div className="truncate col-span-1 md:col-span-4">
                    {/* Flex */}
                    <div className="flex flex-col z-50">
                        {/* Title */}
                        <div className="p-4 pb-4">
                            <h1 className="text-3xl font-bold text-white">Jadwal Anime</h1>
                            <div class="text-sm breadcrumbs">
                                <ul>
                                    <li><a onClick={() => navigate('/')}>Home</a></li>
                                    <li><a onClick={() => navigate('/Jadwalpage')}>Jadwal</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-h-[24rem] overflow-y-scroll">
                            {/* Callendar */}
                            <FullCalendar
                                headerToolbar={{
                                    start: "today prev next",
                                    end: "dayGridMonth dayGridWeek dayGridDay",
                                }}
                                plugins={[dayGridPlugin]}
                                view={['dayGridMonth', 'dayGridWeek', 'dayGridDay']}
                                weekends={true}
                                events={events}
                                eventContent={renderEventContent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Jadwal