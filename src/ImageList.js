import { Link } from 'react-router-dom';

const ImageList = (props) => {
    const images = props.images;
    const title = props.title;
    let river = '';

    if(title === 'Rivers'){
        river = '/rivers';
    }

    return ( 
        <div className="image">
            <h2>{ title }</h2>
            <div className="image-list">
                { images.map((image) =>(
                    <div className="image-preview" key={image.id}>
                    <Link to={`/images${river}/${image.id}`}>
                        <h2>{ image.title }</h2>
                        <img src={ image.img } alt="" />
                    </Link>
                    </div>
                )) }
           </div>
        </div>
     );
}
 
export default ImageList;