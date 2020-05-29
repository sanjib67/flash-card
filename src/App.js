import React from 'react';
import Header from './components/Header';
import $ from 'jquery';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import './App.css';

class App extends React.Component {
  componentDidMount() {

      $('.vertical-menu > ul > li').on('click', function(e){
          e.preventDefault();
          $(this).find('ul').toggle();
      })

      $( '.vertical-menu > ul > li ul' ).on('click', function(e){
        e.stopPropagation();
      });
  
      $('.navbar-toggler').on('click', function() {
          $('body').toggleClass('menu-opened');
      })
  
      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function () {
          $(".navbar-collapse").collapse("hide");
      });
  
      // Collapse Navbar
      var navbarCollapse = function () {
          console.log("nav function is running")
          if ($("#mainNav").offset().top > 171) {
              $("#mainNav").addClass("navbar-shrink");
              $("#mainNav").css({
                  background       : '#000000bf',
                  transition : 'background .25s ease-in-out'
              });
          } else {
              $("#mainNav").removeClass("navbar-shrink");
              $("#mainNav").css({
                  background       : 'transparent',
                  transition : 'background .25s ease-in-out'
              });
          }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);

    // $('#menu-parent-1, #menu-child-5-1').addClass('active');
   
  }
  render() {
    return (
      <div>
        <Header />
           <LandingPage/>
        <Footer />
      </div>
    );
  }
}

export default App;
