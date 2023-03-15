import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import cartImage from '../assets/cartImage.png'
import cartImageKid from '../assets/cartImageKid.png'

const CartSection = () => {
  return (
    <section className='allSections'>
        <div className='imageCartSection'>
          <img src={cartImageKid} alt="cartImageKid" />
        </div>
        <div className='imageSection'>
            <img src={cartImage} alt='cart'/>
            <h3>Pufi CART</h3>
            <hr/>
            <p>Descripción del producto. Este es un texto simulado</p>
            <a href='#'><FontAwesomeIcon icon={faAngleRight} className='iconRight'/>VER MAS</a>
        </div>
    </section>
  )
}

export default CartSection