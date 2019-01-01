import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import '../styles/App.css'

const GET_GUEST = gql`
  query Guest {
    guest(id: "recqPmp6c3I7eJNh9") {
      email
      firstName
      lastName
      groupId
      rsvp
    }
  }
`

export default () => (

  <Query query={GET_GUEST}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      if (!loading && data.guest) return (
        <div>
          <p>{ data.guest.email }</p>
          <p>{ data.guest.firstName }</p>
          <p>{ data.guest.lastName }</p>
        </div>
        
      );

    }}
  </Query>

)