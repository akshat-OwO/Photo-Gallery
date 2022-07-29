import ImageList from './ImageList';
import useFetch from './useFetch';

const Home = () => {

    const { data: images, loading, error } = useFetch('http://localhost:8000/mountains');

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {loading && <div>Loading...</div>}
            {images && <ImageList images={images} title={'Mountains'}/>}
        </div>
     );
}
 
export default Home;