import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import endpoint from '../config';

export const typeDefs = gql`
  type Container {
  	id: ID
  	color: String
  }

  type Mutation {
    setCurrentCard(
    	id: ID!
			color: String
    ) : Container
  }

  type Query {
    containers: [ Container ]
  }
`;

export default withApollo(({ ctx, headers, initialState }) => (
	new ApolloClient({
		uri: endpoint,
		request: operation => operation.setContext({
			fetchOptions: { credentials: 'include' },
			headers,
		}),
		clientState: {
			resolvers: {
				Mutation: {
					setCurrentCard(_, variables, { cache, getCacheKey }) {
						// TODO whatever local operation
					},
				},
			},
			typeDefs,
		},
	})
));
