import brandlive from '../assets/brandlive.png'
import garantia from '../assets/garantia.png'
import facebook from '../assets/facebook.png'
import twiter from '../assets/twiter.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <>
        <div className='divFooter'>
            <hr/>
            <div className="footerContainer">
                <div>
                    <p className='pufiLogo'>Pufi</p>
                </div>
                <div>
                    <p>PUFI RAIN</p>
                    <p>PUFI PUFF</p>
                    <p>PUFI CART</p>
                    <p>PUFI NAP</p>
                </div>
                <div>
                    <p>CONTACTO</p>
                    <p>AYUDA</p>
                    <p>COMO COMPRAR</p>
                    <p>TÉRMINOS & CONDICIONES</p>
                </div>
                <div>
                    <p>COMPRA 100% SEGURA</p>
                    <img src={garantia} alt="garantia" />
                </div>
                <div>
                    <p>SIGUENOS EN</p>
                    <img src={facebook} alt="facebook" />
                    <img src={twiter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
            <div className='divHrFooter'>
                <hr className='hrfooter'/>
            </div>
            <div className='copyrightContainer'>
                <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
                <img src={brandlive} alt="brandLive"/>
            </div>
        </div>
    </>
  )
}

export default Footer