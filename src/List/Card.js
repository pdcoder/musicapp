import React, {Component} from 'react';
import classes from './Card.css';
 
class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      showAll : false,
      posterUrl:  'http://image.tmdb.org/t/p/w500/'
    }

  }

  
  render(){
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const ex1card = [classes.example-1,classes.card];
const fa = ['fa','fa-bookmark-o','a'];
const fa1 = ['fa','fa-heart-o'];
const fa2 = ['fa','fa-comment-o'];
 const style= {
  background : `url(${this.state.posterUrl}${this.props.poster}) 20% 1% / cover no-repeat`
}

  const cards =
   <div className={classes.row}>
  <div className={ex1card.join(' ')}>
    <div style={style} className={classes.wrapper}>
      <div className={classes.date}>
        <span className={classes.day}>{this.props.day}</span>
        <span className={classes.month}>{month[this.props.month-1]}</span>
        <span className={classes.year}>{this.props.year}</span>
      </div>
      <div className={classes.data}>
        <div className={classes.content}>
          <span className={classes.author}>Jane Doe</span>
          <h1 className={classes.title}><a href="#">{this.props.title}</a></h1>
          <p className={classes.text}>{this.props.desc}</p>
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
}
export default Card;