import { Link } from 'react-router-dom'
import facebookIcon from '../../assets/images/socialMedia/facebook.png'
import youtubeIcon from '../../assets/images/socialMedia/youtube.png'

const SocialMedia = () => {
    return (
        <div className="flex gap-5 xl:absolute xl:right-72 lg:absolute lg:right-72">
            <Link to='/'><img src={facebookIcon}></img></Link>
            <Link to='/'><img src={youtubeIcon}></img></Link>
        </div>
    )
}

export default SocialMedia