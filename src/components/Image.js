/* eslint-disable jsx-a11y/alt-text */
import empty from '../img/empty.png'
import '../components/Image.css';

export default function Image(){
    return(
        <div className="image-container">
            <img src={empty}/>
            <p>No todos left :3</p>
        </div>
    );
}