import './App.css';

function Reorder({onReorder}){

    
    return  onReorder()=== 0 &&  (
        <button className = "card__button card__button--reorder card__button--logo" onClick={() => onReorder("reorder")}>  
        Reorder 
       </button>

    );
}

export default Reorder;