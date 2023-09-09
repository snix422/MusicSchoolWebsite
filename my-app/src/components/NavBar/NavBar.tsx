import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <div className="w-screen h-14 bg-gray-800 relative flex justify-center items-center fixed" >
            <h2 className="text-white absolute left-20">Logo</h2>
            <ul className="flex xl:gap-36 lg:gap-28 md:gap-14 ml-48 max-md:hidden">
                <li className="text-white">Oferta</li>
                <li className="text-white">Kursy</li>
                <li className="text-white">O nas</li>
                <li className="text-white">FAQ</li>
                <li className="text-white">Kontakt</li>
            </ul>
            <MenuIcon sx={{color:'white'}} className='invisible absolute right-20 max-md:visible'/>
        </div>
    )
}

export default NavBar