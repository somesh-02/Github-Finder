import React, { Component } from 'react'
import UserItem from './useritem'
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import { useContext } from 'react';

const Users = ()=>{
  const githubContext=useContext(GithubContext);
  const {loading, users}=githubContext;
  if(loading)
  {
    return <Spinner/>
  }
  else{
    return (
      <div style={userStyle}>
        {githubContext.users.map(user=>(
            <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
  }
}

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
export default Users
