import React, { Component } from 'react';
import { Input, Header, Segment, Form, Button  } from 'semantic-ui-react';
 
class Search extends Component {
  state = { username: ''};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
   e.preventDefault();
    let username = this.state.username
    this.props.fetchProfile(username);
    this.props.fetchRepos(username);
    this.state.username = '';
  }

  render() {
    const { username } = this.state
    return (
      <div>
        <Segment padded>
          <Header as='h1' textAlign='center' dividing>
            GitHub API Challenge
          </Header>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group>
              <Form.Input
                autoFocus
                required
                placeholder='Type Username'
                name='username'
                value={ username }
                onChange={this.handleChange}
                width={6}
              />
              <Button primary positive type='submit'>Submit</Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    )
  }
}

export default Search;
