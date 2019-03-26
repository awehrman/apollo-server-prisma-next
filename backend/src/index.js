import 'dotenv/config';
import express from 'express';

import createServer from './createServer';

const app = express();
const server = createServer();

server.applyMiddleware({
	app,
	path: '/graphql',
});

app.listen({ port: process.env.PORT || 3001 }, (err) => {
	if (err) throw err;
	console.log(`Apollo Server ready at http://localhost:${ process.env.PORT }${ server.graphqlPath }`);
});
