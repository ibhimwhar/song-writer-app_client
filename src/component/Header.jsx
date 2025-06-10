import { ListMusic } from 'lucide-react'
import { useEffect, useState } from 'react'

const Header = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const HandleScroll = () => {
            if (window.scrollY > 20) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        document.addEventListener("scroll", HandleScroll)
        return () => document.removeEventListener("scroll", HandleScroll)
    }, [scroll])

    return (
        <header className={`fixed w-full z-50 bg-white transition-all ${scroll ? "shadow-xs" : ""} border-b border-neutral-100 p-3 flex justify-between sm:justify-around items-center`}>

            <div>
                <h1 className='text-2xl sm:text-3xl font-semibold'>Song Writer</h1>
                <h3 className="tracking-widest">English Version</h3>
            </div>

            <button className="p-2 cursor-pointer border border-neutral-100 active:ring-2 hover:ring-2 ring-sky-300 rounded">
                <ListMusic size={18} />
            </button>

        </header>
    )
}

export default Header
