import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Gray and Brown Mountains', img: require('./images/mountain1.jpg'), author: 'mario', id: 1},
        {title: 'Mountain Covered in Snow', img: require('./images/mountain2.jpg'), author: 'yoshi', id: 2},
        {title: 'Snow Top Mountains', img: require('./images/mountain3.jpg'), author: 'mario', id: 3},
    ])

    return ( 
        <div className="home">
            { blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <img src={ blog.img } alt="" srcset="" />
                </div>
            )) }
        </div>
     );
}
 
export default Home;