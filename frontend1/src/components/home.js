import React from 'react';
import family_image from '../content/presents.png';

function MainPage({ onCreateWishlist }) {
  return (
    <div className="App"> 
    
     <div className ='body-part1'>
       <div className='part1-right'>
         <a>Make your wishlist and share 
       it with your 
       friends and family</a> 
       <a>Add your wishes from 
     online shops </a> 
    
     <button onClick={onCreateWishlist} className='wishButton'>Make your wishlist</button>
       </div>
    
       <div>
       <img className='Family_image' src={family_image} alt="photo" />
       </div>
     </div>
    
     <div className ='body-part1'>
       <div className='part1-right'>
         <h2 className='header2'>What is wish list? </h2> 
         <a className='long-text'> It is the list of presents that you want to receive for your party
           You may add anything you want and let 
           your friends choose what kind of present 
           they want to give you </a> 
    
           <button onClick={onCreateWishlist} className='wishButton'>Make your wishlist</button>
       </div>
    
    
     </div>
    
         </div>
  );
}

export default MainPage;