import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Search from './Search';
import Profile from './Profile';
import Repos from './Repos';
import { Grid } from 'semantic-ui-react';
 
const API     = 'https://api.github.com';
const user    = process.env.REACT_APP_GIT_HUB_USER;
const token   = process.env.REACT_APP_REACT_APP_GIT_HUB_TOKEN;
const creds   = `${user}:${token}`;
const auth    = btoa(creds);
const options = {
  mode: 'cors',
  headers: {
    'Authorization': 'Basic ' + auth,
  }
}

class Home extends Component {
  state = { username: 'zlarsen-zl',
            name:'',
            avatar:'',
            location:'',
            repos: [ ],
            repos_number:'',
            followers: '',
            following:'',
            homeUrl:'',
            notFound:''
          };

  fetchProfile(username) {
    const url = `${API}/users/${username}`;
    fetch(url, options)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos_number: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
    .catch((error) => console.log('There Is A Problem') )
  }

  fetchRepos(username) {
  const url = `${API}/users/${username}/repos`;
    fetch(url, options)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          repos: data
        })
      })
      .catch((error) => console.log('There Is A Problem') )
  }

  componentDidMount() {
    this.fetchProfile(this.state.username);
    this.fetchRepos(this.state.username);
  }

  render() {
    return (
      <div>
        <Search
          fetchProfile={this.fetchProfile.bind(this)}
          fetchRepos={this.fetchRepos.bind(this)}
        />
        <Grid divided='vertically'>
          <Grid.Row columns={2} >
            <Grid.Column computer={8} mobile={16}>
              <Profile data={this.state} />
            </Grid.Column>
            <Grid.Column computer={8} mobile={16}>
              <Repos data={this.state}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
