import { useState, useEffect } from 'react';
import ImageList from './ImageList';

const Home = () => {
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setTimeout(() =>{
            fetch('http://localhost:8000/images')
            .then(res =>{
                return res.json();
            })
            .then((data) =>{
                setImages(data);
                setLoading(false);
            });
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            {loading && <div>Loading...</div>}
            {images && <ImageList images={images} title={'Mountains'}/>}
        </div>
     );
}
 
export default Home;