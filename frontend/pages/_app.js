import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import Page from '../components/Page';
import Meta from '../components/Meta';
import withApollo from '../lib/withApollo';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		// this exposes the query to the user
		pageProps.query = ctx.query;

		return { pageProps };
	}

	render() {
		console.warn('[App] render');
		const { apollo, Component, pageProps } = this.props;

		return (
			<Container>
				<ApolloProvider client={ apollo }>
					<Meta />
					<Page>
						<Component { ...pageProps } />
					</Page>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApollo(MyApp);
