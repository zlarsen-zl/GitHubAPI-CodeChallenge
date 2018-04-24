import React, { Component } from 'react';
import {
  Card,
  Image,
  Header
} from 'semantic-ui-react';

const API     = 'https://api.github.com/repos';
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
class Repo extends Component {
  state = {
            Ruby:         '0',
            Javascript:   '0',
            Python:       '0',
            Css:          '0',
            PHP:          '0'
          };

  fetchRepoLanguage(fullName) {
    const url = `${API}/${fullName}/languages`;
    fetch(url, options)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          Ruby:         data.Ruby,
          Javascript:   data.JavaScript,
          Python:       data.Python,
          PHP:          data.PHP,
          Css:          data.CSS,
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

  componentDidMount() {
    this.fetchRepoLanguage(this.props.repo.full_name);
  }

  render() {
    const {repo} = this.props;
    return(
      <Card fluid key={repo.id}>
        <Card.Content>
          <Card.Header>
            <a href={repo.html_url} target='_blank'>{repo.name}</a>
          </Card.Header>
          <Card.Description>
            <Header as='h4'dividing>
              Main Language: {repo.language}
            </Header>
            Ruby: {this.state.Ruby}
            <br />
            Javascript: {this.state.Javascript}
            <br />
            Python: {this.state.Python}
            <br />
            PHP: {this.state.PHP}
            <br />
            CSS: {this.state.Css}
            <br />
            Issues: {repo.open_issues}
            <br />
            Description: {repo.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default Repo;
