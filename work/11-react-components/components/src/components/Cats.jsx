import './Cats.css';

import tabbycat from '../assets/brown-and-white-tabby-cat.avif';
import cutecat from '../assets/cutecat.avif';

function Cats(){

    return (
        <>

<main id="main" className="main--cats" >
    
    <ul className = "main__list--cats">
      <li className = "main__item--cats">
        <div className ="card--cats">
         <h2 className = "card__title--cats card__title--card1--cats" > Long Time Internet Subjects</h2>
        
         <div className="card__text--cats card__text--card1--cats">
         
          <img className = "card__picture--cats card__picture--card1--cats" alt="A cat gazing attentively. " src = {tabbycat}/>
          <div className = "card__text1--cats"> Cats, the internet's beloved feline stars, have been entertaining us with their charming antics for decades.These regal rulers have amassed loyal.</div>
          <div className = "card__text1--cats">From keyboard cat to grumpy cat, these internet icons have left an indelible paw print on online culture.Cat videos and memes continue to rule the web.</div>
          <div className = "card__text1--cats">Cat videos and memes continue to rule the web, proving that the fascination with our feline friends is a long-lasting trend.Cats, the internet's beloved.</div>
         
        </div>
      
         
        </div>

      </li>
 

      <li className = "main__item--cats">
        <div className="card--cats">
          <h2 className="card__title--cats card__title--card2--cats">Long Time Internet Kings</h2>
       
            <div className="card__text--cats card__text--card2--cats">
              <img className="card__picture--cats card__picture--card2--cats" alt="Cat Playing on the Couch" src={cutecat}/>
              <div className="card__text2--cats">Cats have reigned supreme as the uncontested "Kings of the Internet" for years, captivating millions with their viral charm. These regal rulers have...</div>
              <div className="card__text2--cats">These regal rulers have amassed loyal followings and legions of fans, making them true internet royalty. From viral cat memes to online cat celebrities...</div>
              <div className="card__text2--cats">From viral cat memes to online cat celebrities, their dominance is a testament to the enduring appeal of these internet kings. Cats have reigned supreme.</div>
             
            </div>
          
     
        </div>
              

      </li>

    </ul>
    
  </main>
    
        </>
    );
}
export default Cats;