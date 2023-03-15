import headerimage from '../assets/headerimage.jpg'

const FirstSection = () => {
  return (
    <>
        <section className='firstSection'>
            <img src={headerimage} alt="headerimage" />
            <div className='titleDiv'>
                <p>ESTÁR CÓMODO, </p>
                <p>NUNCA FUE TAN FÁCIL.</p>
            </div>
            <div className='btnContainer'>
              <button>SHOP</button>
              <div className='circleP'>
                  <p> ... </p>
              </div>
            </div>
        </section>
    </>
  )
}

export default FirstSection