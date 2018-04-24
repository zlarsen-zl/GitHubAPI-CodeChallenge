import React, { Component } from 'react';
import { List, Card, Header } from 'semantic-ui-react';

class Profile extends Component {
  render() {
    const data         = this.props.data;
    const userLocation = (data.location || 'No Where around Here')
    const titleName    = (
      <Header as='h1' textAlign='center' dividing>
        <a href={data.homeUrl} target="_blank" >
          {data.name || data.username}
        </a>
      </Header>
    );

    const extra = (
      <List>
        <List.Item>
          <List.Icon name='users' />
          <List.Content>
            Followers: {data.followers}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='numbered list' />
          <List.Content>
            Repos: {data.repos_number}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='like' />
          <List.Content>
            Following: {data.following}
          </List.Content>
        </List.Item>
      </List> 
    );

    return (
      <div>
        <Card
          fluid
          image={data.avatar}
          header={titleName}
          meta={userLocation}
          description={extra}
        />
      </div>
    )
  }
}
export default (Profile);
