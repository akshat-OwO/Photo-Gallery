import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const RiverShowcase = () => {

    const { id } = useParams();
  
    const { data: image, loading, error } = useFetch('http://localhost:8000/rivers/' + id);
    
    return ( 
        <div className="image-showcase">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {image && (
                <article>
                    <img src={ `/${image.img}` } alt="" />
                    <h2>{image.title}</h2>
                </article>
            )}
        </div>
     );
}
 
export default RiverShowcase;