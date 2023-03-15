import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import umbrellaPicture from '../assets/umbrella.png'

const UmbrellaSection = () => {
  return (
    <>
        <section className='allSections'>
          <div className='shopSection'>
            <button>SHOP</button>
          </div>
          <div className='imageSection'>
            <img src={umbrellaPicture} alt='umbrella'/>
            <h3>Pufi RAIN</h3>
            <hr/>
            <p>Descripción del producto. Este es un texto simulado</p>
            <a href='#'><FontAwesomeIcon icon={faAngleRight} className='iconRight'/>VER MAS</a>
          </div>
        </section>
    </>
  )
}

export default UmbrellaSection