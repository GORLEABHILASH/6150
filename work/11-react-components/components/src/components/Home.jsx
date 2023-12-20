import React from 'react';
import './Home.css';

import tabbycat from '../assets/brown-and-white-tabby-cat.avif';
import catbehindtree from '../assets/catbehindtree.avif';
import greeneyecat from '../assets/greeneyecat.avif';

import Modal from './Modal';
import Button from './Button';

function Home({ onButtonClick }) {
 
  return (
    <div className="home">
      <main id="main" className="main">
        <ul className="main__list">
          <li className="main__item">
            <div className="card">
              <h2 className="card__title">Whiskers</h2>
              <img
                className="card__picture"
                alt="Whiskers cat looking seriously"
                src= {tabbycat}
              />
              <div className="card__text">
                <div>Meet Whiskers, the playful tabby cat who brightens your day with every purr.</div>
                <div>
                  Join Whiskers on <Modal type="submit" visual="link" onClick={() => console.log('ModalButton clicked')}>
                Subscribe
              </Modal> his delightful adventures
                </div>
              </div>
              
            </div>
          </li>

          <li className="main__item">
            <div className="card">
              <h2 className="card__title">Luna</h2>
              <img
                className="card__picture"
                alt="Whiskers cat looking seriously"
                src={catbehindtree}
              />
              <div className="card__text">
                <div>Introducing Luna, the elegant Siamese beauty who mesmerizes with her grace.</div>
                <div>
                Don't miss a moment of Luna <Button type = "button" visual = "link" card="yes"  onClick={onButtonClick}>Go to About</Button> to our channel
                </div>
              </div>
  
            </div>
          </li>


          <li className="main__item">
            <div className="card">
              <h2 className="card__title">Simba</h2>
              <img
                className="card__picture"
                alt="Whiskers cat looking seriously"
                src={greeneyecat}
              />
              <div className="card__text">
                <div>Say hello to Simba, the fearless Maine Coon with a heart as big as his paws.</div>
                <div>
                Join Simba's  <Modal type="submit" visual="link" onClick={() => console.log('ModalButton clicked')}>
                Subscribe
              </Modal> wild escapades
                </div>
              </div>
            
            </div>
          </li>


          
         
        </ul>
      </main>
    </div>
  );
}

export default Home;
