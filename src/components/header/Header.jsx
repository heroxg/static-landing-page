import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../banner/Banner'
import MainMenuNav from '../menu/MainMenuNav'
import MenuNav from '../menu/MenuNav'
import './Header.css'

const Header = () => {
  //change menu on scroll 
  useEffect(() => {
    window.addEventListener("scroll", function(){
      let headerElm = document.getElementById("my-header");
      let mainNav = document.getElementById("my-nav");
      let mobileNav = document.getElementById("my-navmobile");
      let	mainNavHeight = mainNav.scrollHeight;
        if (window.pageYOffset > mainNavHeight) {
          headerElm.style.display = "block";
          mobileNav.style.borderBottom = 0 + "px";
        }else {
          headerElm.style.display = "none";
        }
    });
  }, [])

  return (
    <div className='header'>
        <div id="my-header" className="scrolled-header" style={{display: 'none'}}>
            <MenuNav />
        </div>
        <MainMenuNav />
        <Container>
            <Banner />
        </Container>
    </div>
  )
}

export default Header
