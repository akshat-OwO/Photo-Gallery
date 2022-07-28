import { useState, useEffect } from 'react';
import ImageList from './ImageList';

const Home = () => {
    const [images, setImages] = useState([
        {title: 'Gray and Brown Mountains', img: require('./images/mountain1.jpg'), author: 'mario', id: 1},
        {title: 'Mountain Covered in Snow', img: require('./images/mountain2.jpg'), author: 'yoshi', id: 2},
        {title: 'Snow Top Mountains', img: require('./images/mountain3.jpg'), author: 'mario', id: 3},
        {title: 'Black and Teal Mountains', img: require('./images/mountain4.jpg'), author: 'mario', id: 4},
    ]);

    const handleDelete = (id) =>{
        const newImages = images.filter(image => image.id !== id);
        setImages(newImages);
    }

    useEffect(() =>{
        console.log('use effect ran');
    }, []);

    return ( 
        <div className="home">
            <ImageList images={images} title={'Mountains'} handleDelete={ handleDelete }/>
        </div>
     );
}
 
export default Home;