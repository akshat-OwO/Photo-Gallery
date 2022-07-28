import { useState, useEffect } from 'react';
import ImageList from './ImageList';

const Home = () => {
    const [images, setImages] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:8000/images')
            .then(res =>{
                return res.json();
            })
            .then((data) =>{
                setImages(data);
            });
    }, []);

    return ( 
        <div className="home">
            {images && <ImageList images={images} title={'Mountains'}/>}
        </div>
     );
}
 
export default Home;