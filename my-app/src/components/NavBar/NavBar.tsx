import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <div className="w-screen h-16 bg-gray-800 relative flex justify-center items-center fixed" >
            <h2 className="text-white absolute left-20">Logo</h2>
            <ul className="flex xl:gap-28 lg:gap-10 md:gap-6 ml-48 max-lg:hidden">
                <li className="text-white">Oferta edukacyjna</li>
                <li className="text-white">Dla kogo?</li>
                <li className="text-white">O nas</li>
                <li className="text-white">Galeria zdjęć</li>
                <li className="text-white">Kontakt</li>
                <li className="text-white">Nasi partnerzy</li>
            </ul>
            <MenuIcon sx={{color:'white'}} className='invisible absolute right-20 max-lg:visible'/>
        </div>
    )
}

export default NavBar