const ImageList = (props) => {
    const images = props.images;
    const title = props.title;

    return ( 
        <div className="image">
            <h2>{ title }</h2>
            <div className="image-list">
                { images.map((image) =>(
                    <div className="image-preview" key={image.id}>
                        <h2>{ image.title }</h2>
                        <img src={ image.img } alt="" />
                    </div>
                )) }
           </div>
        </div>
     );
}
 
export default ImageList;