import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import napImage from '../assets/fifthImage.png'
import beachImage from '../assets/thirdSectionImage.png'

const InstagramSection = () => {
  return (
    <>
        <div className="instagramContainer">
            <p>INSTAGRAM</p>
            <h1>#ESPUFI</h1>
          <div className="imagesContainer">
              <img src={img3} alt="imagen" />
              <img src={img2} alt="imagen" />
              <img src={img4} alt="imagen" />
              <img src={napImage} alt="imagen" />
              <img src={img2} alt="imagen" />
              <img src={beachImage} alt="imagen" />
          </div>
        </div>
    </>
  )
}

export default InstagramSection