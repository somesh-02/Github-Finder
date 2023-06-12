import React, { Component } from 'react'
import { Link } from 'react-router-dom';


const UserItem = ({user:{login,avatar_url,html_url}}) => {
    /*constructor()
    {
        super();
        this.state={
            id:'id',
            login:'mojombo',
            avatar_url:'https://avatars.githubusercontent.com/u/26?v=4',
            html_url:'https://github.com/topfunky'
        };
    }*/
    //const {login,avatar_url,html_url}=props.user;
    return (
      <div className='card text-center'>
        <img 
        src={avatar_url} 
        alt='' 
        className='round-img' 
        style={{width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
            <a href={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</a>
        </div>
      </div>
    );
}

export default UserItem
