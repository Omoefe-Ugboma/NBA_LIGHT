import React from "react";
import Slider from 'react-slick'

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1
}

const generateSlides = ({ slides }) => {
    if (slides) {
        return (
            <Slider {...settings}>
                {slides.map((item) => {
                    return (
                        <div key={item.id}
                        >
                            {/* <img src={`/images/covers/${item.cover}`} alt="slide" /> */}

                            <div className="item-slider"
                                style={{ backgroundImage: `url(/images/covers/${item.cover})` }}
                            >
                                <div className="caption">
                                    <h4>{item.topic}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>

                        </div>
                    )
                })
                }

            </Slider >
        )
    }
}

const Featured = (props) => {

    console.log(props)

    return (
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;