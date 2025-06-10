import { ArrowLeft, Eye, EyeClosed, CirclePlus, Volume2, Share2, ChevronsLeft } from 'lucide-react'
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { ContextValue } from '../component/Context'
import Image from "../assets/profile.png"


const AddNewSong = () => {
    const [eyes, setEyes] = useState(false)
    const [view, setView] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setEyes(prev => !prev)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const { addNewSong, title, description, setTitle, setDescription } = useContext(ContextValue)

    const HandleAdd = () => {
        addNewSong()
        navigate("/")
    }

    if (view) {
        return (
            <div className="max-w-2xl mx-auto p-6 space-y-6">
                {/* Writer Info */}
                <div className="grid place-items-center -space-y-2">
                    <h1 className='font-semibold'>Song Writer</h1>
                    <img
                        src={Image}
                        alt="Developer's Profile Image"
                        className="object-cover w-5"
                    />
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-center">{title || "Untitled Song"}</h1>

                {/* Lyrics */}
                <p className="whitespace-pre-line text-sm leading-8 text-center">
                    {description || "Start typing your lyrics..."}
                </p>

                {/* Floating Buttons */}
                <div className="fixed bottom-0 right-0 m-9 sm:mr-19 grid gap-4">
                    <button className="shadow bg-white p-3 rounded-full flex items-center gap-2 border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 cursor-pointer">
                        <Volume2 />
                    </button>

                    <button className="shadow bg-white p-3 rounded-full flex items-center gap-2 border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 cursor-pointer">
                        <Share2 />
                    </button>

                    <button onClick={() => setView(false)} className="shadow bg-white p-3 rounded-full flex items-center gap-2 border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 cursor-pointer">
                        <ChevronsLeft />
                    </button>
                </div>

            </div>
        )
    }

    return (
        <div className="min-h-screen">

            <header className='sm:px-8 flex items-center gap-4 border-b border-neutral-100 p-4 bg-white'>

                <Link to={"/"}>
                    <button className="p-2 cursor-pointer border border-neutral-100 transition-all active:ring-2 hover:ring-2 ring-sky-300 rounded">
                        <ArrowLeft size={18} />
                    </button>
                </Link>

                <div className='flex-1'>
                    <label className='text-xs tracking-widest opacity-75'>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter song title"
                        className='w-full uppercase placeholder:normal-case text-2xl border-b border-neutral-300 outline-none py-1 transition'
                    />
                </div>

                <button onClick={() => setView(prev => !prev)} className="p-2 transition-all cursor-pointer border border-neutral-100 active:ring-2 hover:ring-2 ring-sky-300 rounded">
                    {eyes ? <EyeClosed size={18} /> : <Eye size={18} />}
                </button>

            </header>

            <main className="flex-1 max-w-2xl w-full grid place-items-end h-screen mx-auto p-4">

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='w-full h-full resize-none outline-none text-base leading-relaxed'
                    placeholder='Start writing your song here'
                />

                <button onClick={HandleAdd} className={`fixed font-bold shadow group bottom-0 m-[36px] bg-white px-3 py-2 ${!title.trim() || !description.trim() ? "hidden" : "flex"} gap-3 items-center border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 rounded cursor-pointer`}>
                    <CirclePlus className='group-hover:rotate-180 transition-all' />
                    Add Song
                </button>

            </main>

        </div>
    )
}

export default AddNewSong