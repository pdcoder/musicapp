import React,{Component} from 'react';
import axios from 'axios';
import {withRouter,Route} from 'react-router-dom';
import Input from '../Input/Input';
import classes from './Search.css';
import SearchResult from '../../SearchResults/SearchResults';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          api:'d3ca2436f2f1113c59d99859c5ae4d00',
          search: '',
          results:[]
        };
      }

    handlechange(event) {
        this.setState({search: event.target.value});
        this.props.history.push({
          pathname: '/search',
          search: 'search=`${this.state.search}`'
        });
         
        }
      
      componentDidUpdate(){
        axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${this.state.api}&query=${this.state.search}`)
        .then(datas => {
            this.setState({results:datas.data.results});
            console.log(this.state.results);
        })
        .catch(err => console.log(err));
       
      }
    render(){
        return (
        <form>
          
        <input name="search" onSubmit={event => this.handlechange(event)} placeholder="Search" />
        </form>
        
        );
    }
    

}

export default withRouter(Search);