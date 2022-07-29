import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const MountShowcase = () => {

    const { id } = useParams();
  
    const { data: image, loading, error } = useFetch('http://localhost:8000/mountains/' + id);

    return ( 
        <div className="image-showcase">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {image && (
                <article>
                    <img src={ `../${image.img}` } alt="" />
                    <h2>{image.title}</h2>
                </article>
            )}
        </div>
     );
}
 
export default MountShowcase;