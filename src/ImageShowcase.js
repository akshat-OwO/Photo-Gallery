import { useParams } from 'react-router-dom';

const ImageShowcase = () => {

    const { id } = useParams();

    return ( 
        <div className="image-showcase">
            <h1>Image Showcase - { id }</h1>

        </div>
     );
}
 
export default ImageShowcase;