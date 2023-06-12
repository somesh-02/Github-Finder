import React, { Fragment, Component, useEffect } from 'react'
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
import { useContext } from 'react';

const User = ({match}) => {
    const githubContext=useContext(GithubContext);
    const {getUser, user,loading,repos,getUserRepos}=githubContext;
    useEffect(()=>{
       getUser(match.params.login);
        getUserRepos(match.params.login);  
        //eslint-disable-next-line
    }, []);
        const {
            name,
            company,
            avatar_url,
            login,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;
        if (loading) return <Spinner />
        return <Fragment>
            <a href='/' className='btn btn-light'>Back to Search</a>
            Hireable: {' '}
            {hireable ? (<i className='fas fa-check text-success' />) : (<i className='fas fa-times-circle text-danger' />)}
            <div className='card grid-2'>
                <div className='all-center'>
                    <img src={avatar_url} alt="loading image..." className='round-img'
                        style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>UserName : </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company : </strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Blog : </strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>Followers : {followers}</div>
                <div className='badge badge-success'>Following : {following}</div>
                <div className='badge badge-danger-light'>Public Repo's : {public_repos}</div>
                <div className='badge badge-dark'>Public Gists : {public_gists}</div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    }


export default User;

