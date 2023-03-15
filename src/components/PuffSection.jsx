import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import puff from '../assets/puff.png'

const PuffSection = () => {
  return (
    <section className='allSections'>
        <div className='imageSection'>
            <img src={puff} alt='puff'/>
            <h3>Pufi PUFF</h3>
            <hr/>
            <p>Descripción del producto. Este es un texto simulado</p>
            <a href='#'><FontAwesomeIcon icon={faAngleRight} className='iconRight'/>VER MAS</a>
        </div>
        <div className='imagePuffSection'>
        </div>
    </section>
  )
}

export default PuffSection