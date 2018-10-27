import React, {Component} from 'react';
import classes from './Card.css';
 
const Card = (props) => {

const posterUrl = 'http://image.tmdb.org/t/p/w500/';
const ex1card = [classes.example-1,classes.card];
const fa = ['fa','fa-bookmark-o','a'];
const fa1 = ['fa','fa-heart-o'];
const fa2 = ['fa','fa-comment-o'];
var style= {
  background : `url(${posterUrl}${props.poster}) 20% 1% / cover no-repeat`
}

  const cards =
   <div className={classes.row}>
  <div className={ex1card.join(' ')}>
    <div style={style} className={classes.wrapper}>
      <div className={classes.date}>
        <span className={classes.day}>{props.day}</span>
        <span className={classes.month}>{props.month}</span>
        <span className={classes.year}>{props.year}</span>
      </div>
      <div className={classes.data}>
        <div className={classes.content}>
          <span className={classes.author}>Jane Doe</span>
          <h1 className={classes.title}><a href="#">{props.title}</a></h1>
          <p className={classes.text}>{props.desc}</p>
          <label for="show-menu" className={classes.menubutton}><span className={classes.span}></span></label>
        </div>
        <input type="checkbox" id="show-menu" />
        <ul className={classes.menucontent}>
          <li>
            <a href="#" className={fa.join(' ')}></a>
          </li>
          <li><a href="#" className={fa1.join(' ')}><span>47</span></a></li>
          <li><a href="#" className={fa2.join(' ')}><span>8</span></a></li>
        </ul>
      </div>
    </div>
  </div>
 
</div>;

return cards;
}
export default Card;