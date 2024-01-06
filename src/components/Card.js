import React from 'react';
import { useDispatch} from "react-redux";
import { removeBookmark } from '../redux/bookmarkSlice';

const Card = ({index, content, author}) => {
    const dispatch = useDispatch();

    const remove = () =>{
        dispatch(removeBookmark(index));
    }
        
  return (
    <div >
    {/* Product implementation */}
    <div className="card-container">
      <h2 className='card-content'>{content}</h2>
       <p className='card-author'>-{author}</p>
        <button onClick={remove(index)}>Delete</button> 
    </div>
  </div>
  )
}

export default Card