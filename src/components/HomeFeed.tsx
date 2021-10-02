import { Search } from "./Search"

export const HomeFeed = () => {
    return (
        <section className="col-span-2 h-screen md:border-r md:border-l border-gray-800 overflow-y-auto">
            <nav className="w-full p-2 border-b border-gray-800 text-gray-100 font-bold cursor-pointer sticky flex items-center justify-between -top-0 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-md">
              <h1>Home</h1>
              <Search />
            </nav>
            <h1>hola</h1>
            
          </section>
    )
}
