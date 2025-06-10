import { Link, useParams } from "react-router";
import { ContextValue } from "../component/Context";
import { useContext, useState } from "react";
import Image from "../assets/profile.png";
import {
    ArrowLeft,
    ChevronsLeft,
    Eye,
    EyeClosed,
    ListMusic,
    Share2,
    Volume2,
    X,
    Copy,
    Trash2,
} from "lucide-react";


const View = () => {
    const { id } = useParams();
    const [view, setView] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const {
        lyrics,
        deleteSong,
    } = useContext(ContextValue);

    const lyric = lyrics.find((item) => item.id === Number(id));

    if (!lyric)
        return (
            <h3 className="text-center p-10 tracking-widest">No Lyrics Yet</h3>
        );

    const menus = [
        { id: 1, title: "Copy", icon: <Copy size={18} />, onClick: () => console.log("Clicked") },
        { id: 2, title: "Read it", icon: <Volume2 size={18} />, onClick: () => setView(true) },
        { id: 4, title: "Share text", icon: <Share2 size={18} />, onClick: () => console.log("Clicked") },
        { id: 5, title: "Show", icon: <Eye size={18} />, onClick: () => console.log("Clicked") },
        { id: 6, title: "Delete", icon: <Trash2 size={18} />, onClick: () => deleteSong(lyric.id) },
    ]
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            {/* Header */}
            <header className="flex items-center gap-4 border-b border-neutral-100 p-4 bg-white">
                <Link to={"/"}>
                    <button className="p-2 cursor-pointer border border-neutral-100 transition-all active:ring-2 hover:ring-2 ring-sky-300 rounded">
                        <ArrowLeft size={18} />
                    </button>
                </Link>

                {/* Writer Info */}
                <div className="flex-1 grid place-items-center -space-y-2">
                    <h1 className="font-semibold">Song Writer</h1>
                    <img
                        src={Image}
                        alt="Developer's Profile Image"
                        className="object-cover w-5"
                    />
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 transition-all cursor-pointer border border-neutral-100 active:ring-2 hover:ring-2 ring-sky-300 rounded"
                >
                    {menuOpen ? <X size={18} /> : <ListMusic size={18} />}
                </button>
            </header>


            {/* Title */}
            <h1 className="text-4xl font-bold text-center">{lyric.title}</h1>

            {/* Lyrics */}
            <p className="whitespace-pre-line text-sm leading-8 text-center">
                {lyric.description}
            </p>

            {/* Floating Buttons */}
            <div className="fixed bottom-0 right-0 m-9 sm:mr-19 grid gap-4">
                <button className="shadow bg-white p-3 rounded-full flex items-center gap-2 border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 cursor-pointer">
                    <Volume2 />
                </button>

                <button className="shadow bg-white p-3 rounded-full flex items-center gap-2 border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 cursor-pointer">
                    <Share2 />
                </button>

                <Link to={"/"}>
                    <button className="shadow bg-white p-3 rounded-full flex items-center gap-2 border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 cursor-pointer">
                        <ChevronsLeft />
                    </button>
                </Link>
            </div>

            {/* Song Tools Side Menu */}
            <aside
                className={`transition-transform ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } fixed top-[15vh] right-4 bg-white rounded-xl shadow-xs border border-neutral-100 p-4 w-52 space-y-3`}
            >
                <h2 className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                    Song Tools
                </h2>

                <div className="flex flex-col gap-2">
                    {menus.map((btn) => (
                        <button
                            key={btn.id}
                            onClick={btn.onClick}
                            className="cursor-pointer flex items-center justify-between text-sm text-neutral-700 hover:text-sky-600 hover:bg-sky-50 px-3 py-2 rounded-md transition-all group"
                        >
                            {btn.title}
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                {btn.icon}
                            </span>
                        </button>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default View;