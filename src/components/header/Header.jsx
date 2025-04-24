'use client';
import React, { Suspense, useEffect, useState } from 'react';
import logo from '../../assets/images/home/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { API_BASE_URL } from "@/lib/apiConfig";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';




export default function HeaderWrapper() {
  return (
      <Suspense fallback={<Loading />}>
          <Header />
      </Suspense>
  );
}


function Header() {
  function handleClose() {
    document.querySelector('html').style.overflowY = 'unset';
    document.querySelector('.side-menu').classList.toggle('side-menu-active')
    document.querySelector('.menu-bars').classList.toggle('hidden')
    document.querySelector('.menu-bars-X').classList.toggle('hidden')
    document.querySelector('.X-overlay').classList.toggle('hidden')
  }


  const searchParams = useSearchParams();
  const [gclid, setGclid] = useState(null); // Store GCLID
  useEffect(() => {
    // Extract GCLID from the URL
    const gclidValue = searchParams.get('gclid');
    if (gclidValue) {
      setGclid(gclidValue);
    }

  }, [searchParams]);


  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true)
    const getTickets = async () => {
      try {
        const response = await axios.get(API_BASE_URL + `/ad-bar`);
        let data = response.data.data;
        setData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error('Could not get data');
        setLoading(false)
      }
    };
    getTickets();
  }, []);

  return (
    <>
      <header className="header">
        <div className="X-overlay hidden" onClick={handleClose}></div>
        <div className="container m-auto flex items-center gap-2 justify-between">
          <Link href={`/${gclid?`?gclid=${gclid}`:""}`}> <Image src={logo} alt="logo" className="logo-img" /></Link>
          <div className="links">
            <Link href={`/${gclid?`?gclid=${gclid}`:""}`}>الرئيسية</Link>
            <Link href={`/about${gclid?`?gclid=${gclid}`:""}`}>عن واثق</Link>
            <Link href="/#footer">تواصل معنا</Link>
            <Link href={`/book${gclid?`?gclid=${gclid}`:""}`} className='book-link' >طلب النظام</Link>
          </div>


          <Menu className='menu-bars' onClick={() => {
            document.querySelector('html').style.overflowY = 'hidden';
            document.querySelector('.side-menu').classList.toggle('side-menu-active')
            document.querySelector('.menu-bars').classList.toggle('hidden')
            document.querySelector('.menu-bars-X').classList.toggle('hidden')
            document.querySelector('.X-overlay').classList.toggle('hidden')
          }} />
          <X className='menu-bars-X hidden' onClick={handleClose} />
          <div className="side-menu" onClick={handleClose}>
            <div className="links" onClick={handleClose} >
              <Link href={`/${gclid?`?gclid=${gclid}`:""}`} onClick={handleClose}>الرئيسية</Link>
              <Link href={`/about${gclid?`?gclid=${gclid}`:""}`} onClick={handleClose}>عن واثق</Link>
              <Link href="/#footer" onClick={handleClose}>تواصل معنا</Link>
              <Link href={`/book${gclid?`?gclid=${gclid}`:""}`} className='book-link' onClick={handleClose} >طلب النظام</Link>
            </div>
          </div>
        </div>
      </header>
      {


        data.text ?
          <div className="offer-header">
            <div className="offer-text">
              <p>{data.text}</p>
              <X size={28} className='shrink-0' onClick={() => {
                document.querySelector('.offer-header').classList.toggle('hidden')

              }} />
            </div>
          </div> : null

      }
    </>
  );
}