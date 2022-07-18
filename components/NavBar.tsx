const NavBar = () => {
    return (
        <nav className="relative container p-6 mx-auto">
            <div className="w-full flex justify-between items-center">
                <div className='text-purple font-bold text-xl'>
                    eGENCY
                </div>
                <div className="hidden text-sm space-x-8 md:flex">
                    <a href="#" className="text-black hover:text-[#3C64B1]">About</a>
                    <a href="#" className="text-black hover:text-[#3C64B1]">Products</a>
                    <a href="#" className="text-black hover:text-[#3C64B1]">Contact</a>
                    <a href="#" className="text-black hover:text-[#3C64B1]">Help</a>
                </div>
                <div className="space-x-5">
                    <button className="text-sm py-3 px-5 text-[#3C64B1]">
                        Sign In
                    </button>
                    <button className="bg-pink text-white text-sm py-3 px-5 rounded-md">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar