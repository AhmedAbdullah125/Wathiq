'use client'
import React, { useState } from 'react';
import bg from '/public/bg.webp';
import MazarInfo from '../../components/book/MazarInfo';
import FormPage from '../../components/book/FormPage';
export default function Book() {

  return (
    <div className='book-main-page' style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="overlay">
        <div className="container m-auto">
          <div className="book-cont">
            <MazarInfo></MazarInfo>
            <FormPage ></FormPage>
          </div>
        </div>
      </div>
    </div>
  );
}
