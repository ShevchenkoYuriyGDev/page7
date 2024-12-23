import React from 'react';

const Content = ({ handleListItemClick }) => {
  return (
    <div>
      <h3>Моє хобі</h3>
      <ul>
        <li>Компьютерні ігри</li>
        <li>Музика</li>
        <li>Програмування</li>
        <li>Електроніка</li>
      </ul>

      <h3>Улюблені книги</h3>
      <ul id="books-list">
        <li id="book-1" onClick={() => handleListItemClick('books-list', 'book-1')}>"Володар перснів" – Дж. Толкін</li>
        <li id="book-2" onClick={() => handleListItemClick('books-list', 'book-2')}>"Гаррі Поттер" – Дж. Роулінг</li>
      </ul>

      <h3>Улюблені фільми</h3>
      <ul id="movies-list">
        <li id="movie-1" onClick={() => handleListItemClick('movies-list', 'movie-1')}>"Володар перснів/Хоббіт"</li>
        <li id="movie-2" onClick={() => handleListItemClick('movies-list', 'movie-2')}>"Побіг із Шоушенка"</li>
        <li id="movie-3" onClick={() => handleListItemClick('movies-list', 'movie-3')}>"Мовчання ягнят"</li>
        <li id="movie-4" onClick={() => handleListItemClick('movies-list', 'movie-4')}>"Гаррі Поттер"</li>
        <li id="movie-5" onClick={() => handleListItemClick('movies-list', 'movie-5')}>"Оппенгеймер"</li>
      </ul>

      <h3>Улюблене місто</h3>
      <p>Київ – це місто, яке вразило мене своїм колоритом, культурою і прекрасною архітектурою.</p>
    </div>
  );
};

export default Content;