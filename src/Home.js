import { useState } from 'react';
import ImageList from './ImageList';

const Home = () => {
    const [images, setImages] = useState([
        {title: 'Gray and Brown Mountains', img: require('./images/mountain1.jpg'), author: 'mario', id: 1},
        {title: 'Mountain Covered in Snow', img: require('./images/mountain2.jpg'), author: 'yoshi', id: 2},
        {title: 'Snow Top Mountains', img: require('./images/mountain3.jpg'), author: 'mario', id: 3},
        {title: 'Black and Teal Mountains', img: require('./images/mountain4.jpg'), author: 'mario', id: 4},
    ])

    return ( 
        <div className="home">
            <ImageList images={images} title={'Mountains'}/>
            <ImageList images={images.filter((image) => image.author === 'mario')} title={"Mario's Images"}/>
        </div>
     );
}
 
export default Home;