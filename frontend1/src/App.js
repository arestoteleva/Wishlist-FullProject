

import SearchBar from './components/searchbar';
import './App.css';
import React, { useState } from 'react';
import MainPage from './components/home';
import CreateWishlistPage from './components/CreateWishlistPage';
import LoginModal from './components/loginModal';



function App() {
  const [showCreateWishlist, setShowCreateWishlist] = useState(false);

  const handleCreateWishlist = () => {
    setShowCreateWishlist(true);
  };

  const handleBackToMain = () => {
    setShowCreateWishlist(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (username, password) => {
    // Here, you can perform the login logic using the 'username' and 'password' values.
    // For this example, we're just printing the values to the console.
    console.log('Username:', username);
    console.log('Password:', password);
    // After login logic, you can close the modal
    handleCloseModal();
  };

  return (
    <div className="App">
    
           <header className="App-header">
          <a className='Logo'> ♡WishList </a>
    
             <div className='Header-left'>
               <div>
               <button onClick={handleOpenModal}>Login </button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} onLogin={handleLogin} />

               <button>Register</button>
               <button>Language</button>
               </div>
    
               <div>
               <SearchBar/>
               </div>
             </div>
          
           </header>

           {showCreateWishlist ? (
        <CreateWishlistPage onBackToMain={handleBackToMain} />
      ) : (
        <MainPage onCreateWishlist={handleCreateWishlist} />
      )}
    
    <div className="final-part">
  <p className="nfactext">Made by Dinara A ❤️ at nFactorial in 2023.</p>
  <p className="creditstext">Credits: icons from Icons8.</p>
</div>
    </div>
    
       
  );
}

export default App;




