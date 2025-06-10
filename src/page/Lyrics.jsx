import { Music } from "lucide-react"
import { ContextValue } from "../component/Context"
import AddButton from "../component/AddButton"
import Image from "../assets/profile.png"
import { useContext } from "react"
import { Link } from "react-router"

const Lyrics = () => {
    const { lyrics, setLyrics } = useContext(ContextValue)

    return (
        <section className="relative max-w-2xl mx-auto pt-[100px] grid place-content-center place-items-end p-4">

            {lyrics.length === 0 ?
                <div className="p-[50px] text-center">
                    <img
                        src={Image}
                        alt="Developer's Profile Image"
                        className="object-cover w-30 animate-bounce"
                    />
                    <h3 className="text-center tracking-widest">No Lyrics Yet</h3>
                </div> : (
                    <div className="gap-5 grid md:grid-cols-2">
                        {lyrics.map((item) => {
                            return (
                                <Link to={"/add-new-song/" + item.id} key={item.id}>
                                    <div className="border border-neutral-200 space-y-5 transition-all hover:ring-2 ring-sky-300 bg-white rounded p-3">
                                        <Music size={18} className="float-right" />
                                        <h1 className="text-2xl whitespace-pre-line leading-relaxed max-w-md truncate">{item.title}</h1>
                                        <p className="text-neutral-500 max-w- truncate">{item.description.slice(0, 200)}.....</p>
                                        <h3 className="text-[12px]">24/04/25 15:23</h3>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                )}

            <AddButton />

        </section>
    )
}

export default Lyrics
