import { Link } from "react-router-dom"
import { Search } from "./Search"

export const NewPost = () => {
    return (
        <section className="col-span-2 h-screen md:border-r md:border-l border-gray-800 overflow-y-auto">
            <nav className="w-full p-2 border-b border-gray-800 text-gray-100 font-bold cursor-pointer sticky flex items-center justify-between -top-0 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-md">
                <div className="flex items-center">
                    <Link to="/" className="transition-all hover:text-blue-600 rounded-full px-3 mr-2"><i className="far fa-angle-left"></i></Link>
                    <h1>New post</h1>
                </div>
                <Search/>
            </nav>
            <h1>newposts</h1>
        </section>
    )
}