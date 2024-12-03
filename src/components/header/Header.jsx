'use client';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Header() {
  const router = useRouter()
  let [lang, setLang] = useState('en');

  return (
    <>
      <header className="header">
        <div className="container m-auto flex items-center gap-2 justify-between">
          <Link href="/"> <Image src={logo} alt="logo" className="logo-img" /></Link>
          <div className="links">
            <Link href="/#about">عن واثق</Link>
            <Link href="/#blogs">المدونات</Link>
            <Link href="/#contact">تواصل معنا</Link>
            <Link href="/order" className='book-link' >طلب النظام</Link>
          </div>


          <Menu className='menu-bars' onClick={() => {
            document.querySelector('.side-menu').classList.toggle('side-menu-active')
            document.querySelector('.menu-bars').classList.toggle('hidden')
            document.querySelector('.menu-bars-X').classList.toggle('hidden')
          }} />
          <X className='menu-bars-X hidden' onClick={() => {
            document.querySelector('.side-menu').classList.toggle('side-menu-active')
            document.querySelector('.menu-bars').classList.toggle('hidden')
            document.querySelector('.menu-bars-X').classList.toggle('hidden')
          }} />
          <div className="side-menu" onClick={() => {
            document.querySelector('.side-menu').classList.toggle('side-menu-active')
            document.querySelector('.menu-bars').classList.toggle('hidden')
            document.querySelector('.menu-bars-X').classList.toggle('hidden')
          }}>
            <div className="links">
              <Link href="/#about">عن واثق</Link>
              <Link href="/#blogs">المدونات</Link>
              <Link href="/#contact">تواصل معنا</Link>
              <Link href="/order" className='book-link' >طلب النظام</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="offer-header">
          <div className="offer-text">
            <p>اشترك الان واحصل علي خصم اليوم الوطني السعودي ,اشترك الان </p>
            <X size={28} className='shrink-0' onClick={() => {
              document.querySelector('.offer-header').classList.toggle('hidden')
            }} />
          </div>
      </div>
    </>
  );
}