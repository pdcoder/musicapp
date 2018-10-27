import React, { Component } from 'react';
import axios from 'axios';
import Card from '../List/Card';


class Music extends Component{
    constructor(props) {
        super(props);
        this.state = {
          api:'d3ca2436f2f1113c59d99859c5ae4d00',
          count: 5,
          sort: 'created: asc',
          results: []
        };
      }

      componentDidMount() {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=d3ca2436f2f1113c59d99859c5ae4d00')
    .then(datas => {
        this.setState({results:datas.data.results});

    })
    .catch(err => console.log(err));
   
};


   render(){
   // this.state.results[0].release_date
    let { results } = this.state;
    

        return(
            
             results.map((ele,i)=> 
                 <Card key={i} poster={ele.poster_path} title={ele.original_title} desc={ele.overview} day={ele.release_date.substring(0,4)} month={ele.release_date.substring(5,7)} year={ele.release_date.substring(8,10)}/>
              )  
            
        )
    }
}


export default Music;