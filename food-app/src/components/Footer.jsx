import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5>About Food-Express</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Who We Are
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Work With Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Contact Us
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5>For Restaurant</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Parten With Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Apps For You
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Learn More</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Security
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Terms
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Social Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Instagram 
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Facebook <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Youtube
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <i>Food-Express</i>
      </div>
    </MDBFooter>
  );
}