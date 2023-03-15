
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  return (
    <header>
        <p className='pufiLogo'>Pufi</p>
        <div className='navContainer'>
            <div>
                <FontAwesomeIcon icon={faCloud} />
                <p>PUFI PUFF</p>
            </div>
            <hr/>
            <div>
                <FontAwesomeIcon icon={faUmbrella} />
                <p>PUFI RAIN</p>
            </div>
            <hr/>
            <div>
                <FontAwesomeIcon icon={faBagShopping} />
                <p>PUFI CART</p>
            </div>
            <hr/>
            <div>
                <FontAwesomeIcon icon={faHeart} />
                <p>PUFI NAP</p>
            </div>
        </div>
        <div className='countContainer'>
            <p>MI CUENTA</p>
            <FontAwesomeIcon icon={faChevronDown} />
            <hr/>
            <p>MI COMPRA</p>
        </div>
    </header>
  )
}

export default Navbar