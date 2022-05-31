import React from 'react';

function Header( {title, onClick} ) {
  return (
    <header className="header">
      <a href="#" className="header__logo"></a>
      <button onClick={onClick} className="header__button">{title}</button>
    </header>
  )
}

export default Header;