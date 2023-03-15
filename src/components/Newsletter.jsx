import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { getEmail } from '../store/slices/pufi/thunk'

const Newsletter = () => {

  const dispatch = useDispatch()

  const [ userEmail, setUserEmail ] = useState('')
  const [ errorEmail, setErrorEmail ] = useState('')

  const regexEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/

  const handleSubmitEmail = useCallback((e) => {
    e.preventDefault()
    console.log('enviaste el email: ', userEmail)

    if(!regexEmail.test(userEmail)){
      setErrorEmail('Formato de email inválido, intentelo de nuevo')
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su email es correcto, gracias!',
        showConfirmButton: false,
        timer: 2000
      })

      dispatch(getEmail(userEmail))

      setUserEmail('')
      setErrorEmail('')
    }

  }, [userEmail, getEmail])

  return (
    <>
        <div className="newsletterContainer">
            <p className="pNewsletter">NEWSLETTER</p>
            <p className="pSubscribe">SUSCRIBETE</p>
            <p>Y enterate de todas las novedades</p>

            <div className='formDiv'>
              <form onSubmit={handleSubmitEmail}>
                  <input 
                    type='email'
                    name='email'
                    placeholder="Ingresa tu email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <button 
                    className='btnRow'
                  >
                      <FontAwesomeIcon icon={faArrowRight} className='rightArrow'/>
                  </button>

              </form>
                  <p className='errorEmailMessage'>{errorEmail}</p>
               
            </div>

        </div>
    
    </>
  )
}

export default Newsletter