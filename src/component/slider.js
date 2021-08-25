import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
function Slider(){
    return(
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                <img src={image1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                <img src={image2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
            </div>
            </div>
    );
}
export default Slider;