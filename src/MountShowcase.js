import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const MountShowcase = () => {

    const { id } = useParams();
  
    const { data: image, loading, error } = useFetch('http://localhost:8000/mountains/' + id);

    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch('http://localhost:8000/rivers/' + id, {
            method: 'DELETE'
        }).then(() =>{
            navigate('/');
        });
    }

    return ( 
        <div className="image-showcase">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {image && (
                <article>
                    <img src={ `../${image.img}` } alt="" />
                    <h2>{image.title}</h2>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default MountShowcase;