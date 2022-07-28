import { useState } from 'react';

const Home = () => {
    const [images, setImages] = useState([
        {title: 'Gray and Brown Mountains', img: require('./images/mountain1.jpg'), author: 'mario', id: 1},
        {title: 'Mountain Covered in Snow', img: require('./images/mountain2.jpg'), author: 'yoshi', id: 2},
        {title: 'Snow Top Mountains', img: require('./images/mountain3.jpg'), author: 'mario', id: 3},
        {title: 'Black and Teal Mountains', img: require('./images/mountain4.jpg'), author: 'mario', id: 4},
    ])

    return ( 
        <div className="home">
            { images.map((image) =>(
                <div className="image-preview" key={image.id}>
                    <h2>{ image.title }</h2>
                    <img src={ image.img } alt="" srcset="" />
                </div>
            )) }
        </div>
     );
}
 
export default Home;