import { useState, useEffect } from 'react';
import ImageList from './ImageList';

const Home = () => {
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setTimeout(() =>{
            fetch('http://localhost:8000/images')
            .then(res =>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) =>{
                setImages(data);
                setLoading(false);
                setError(null);
            })
            .catch((err) =>{
                setError(err.message);
                setLoading(false);
            });
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {loading && <div>Loading...</div>}
            {images && <ImageList images={images} title={'Mountains'}/>}
        </div>
     );
}
 
export default Home;