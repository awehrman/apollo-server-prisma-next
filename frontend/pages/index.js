import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query GET_USERS_QUERY {
  	users {
	  	id
			name
			email
		}
  }
`;

class Index extends React.PureComponent {
	render() {
		return (
			<Query query={ GET_USERS }>
				{
					({ loading, error, data }) => {
						const { users } = data;

						return (
							<React.Fragment>
								{/* Error and Loading Messages */}
								{ (loading) ? <div className="loading">Loading Index...</div> : null }
								{ (error) ? <div>{ error } </div> : null }
								{ users.map(u => <p key={ u.id }>{ u.name }</p>) }
							</React.Fragment>
						);
					}
				}
			</Query>
		);
	}
}


export default Index;
