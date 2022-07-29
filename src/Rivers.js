import ImageList from "./ImageList";
import useFetch from "./useFetch";

const Rivers = () => {
    
    const { data: images, loading, error } = useFetch('http://localhost:8000/rivers')

    return ( 
        <div className="rivers">
            {error && <div>{ error }</div>}
            {loading && <div>Loading...</div>}
            {images && <ImageList images={images} title={'Rivers'}/>}
        </div>
     );
}
 
export default Rivers;