import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../App.css'

const NavBar = () => {
    return (
        <div className="w-screen h-16 bg-gray-800 relative flex justify-center items-center fixed" >
            <h2 className="text-white absolute left-20" style={{fontFamily:'Montserrat'}}><Link to="/">Logo</Link></h2>
            <ul className="flex xl:gap-28 lg:gap-10 md:gap-6 ml-48 max-lg:hidden">
                <li className="text-white link" style={{fontFamily:'Montserrat'}}><Link to="/oferta">Oferta edukacyjna</Link></li>
                <li className="text-white link" style={{fontFamily:'Montserrat'}}><Link to="/dlakogo">Dla kogo?</Link></li>
                <li className="text-white link" style={{fontFamily:'Montserrat'}}><Link to="/onas">O nas</Link></li>
                <li className="text-white link" style={{fontFamily:'Montserrat'}}><Link to="/galeria">Galeria</Link></li>
                <li className="text-white link" style={{fontFamily:'Montserrat'}}><Link to="/kontakt">Kontakt</Link></li>
                <li className="text-white link" style={{fontFamily:'Montserrat'}}><Link to="/partnerzy">Nasi partnerzy</Link></li>
            </ul>
            <MenuIcon sx={{color:'white'}} className='invisible absolute right-20 max-lg:visible'/>
        </div>
    )
}

export default NavBar