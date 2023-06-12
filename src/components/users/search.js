import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Search = () =>{
  const alertContext=useContext(AlertContext);
  const {alert,setAlert}=alertContext;
const githubContext1=useContext(GithubContext);
  const [text,setText]=useState('');
    const onSubmit = (e) =>
    {
        e.preventDefault();
        if(text==='')
        {
            setAlert('Please enter something','light');
        }
        else
        {
          githubContext1.searchUsers(text);
            setText('');
        } 
    }
    const onChange = (e) =>{
        setText(e.target.value);
        //this.setState({[e.target.name]:e.target.value})
    }
    //const {clearUsers,showClear}=this.props;
    return (
      <div>
        <form className='form' onSubmit={onSubmit}>
            <input 
            type='text' 
            name='text' 
            placeholder='Search Users...'
            value={text}
            onChange={onChange}
            />
            <input type='submit' value='Search' className='btn btn-dark btn-block'/>
        </form>
        {githubContext1.users.length > 0 && (
        <button 
        className='btn btn-light btn-block' 
        onClick={githubContext1.clearUsers}
        >Clear</button>)}
        
      </div>
    );
}

Search.propTypes={
  showAlert:PropTypes.func.isRequired,
};

export default Search
