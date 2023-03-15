import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import nap from '../assets/nap.png'

const NapSection = () => {
  return (
    <section className='allSections'>
        <div className='imageSection'>
            <img src={nap} alt='nap'/>
            <h3>Pufi NAP</h3>
            <hr/>
            <p>Descripción del producto. Este es un texto simulado</p>
            <a href='#'><FontAwesomeIcon icon={faAngleRight} className='iconRight'/>VER MAS</a>
        </div>
        <div className='imageNapSection'></div>
    </section>
  )
}

export default NapSection