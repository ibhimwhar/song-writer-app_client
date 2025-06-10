import { Plus } from 'lucide-react'
import { Link } from 'react-router'

const AddButton = () => {
    return (
        <Link to={"/add-new-song"} className="fixed font-bold shadow group bottom-0 m-[36px] bg-white px-5 py-2 flex gap-3 items-center border border-neutral-200 transition-all active:ring-2 hover:ring-2 ring-sky-300 rounded cursor-pointer">
            <Plus className='group-hover:rotate-180 transition-all' />
            New Song
        </Link>
    )
}

export default AddButton
