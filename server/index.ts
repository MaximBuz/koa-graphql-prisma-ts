import { ApolloServer } from 'apollo-server-koa';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import Koa from 'koa';
import cors from '@koa/cors';
import http from 'http';
import resolvers from './gql/resolvers';
import typeDefs from './gql/typeDefs';

(async function (typeDefs: any, resolvers: any) {
  const httpServer = http.createServer();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  const app = new Koa();
  app.use(cors());
  server.applyMiddleware({ app });
  httpServer.on('request', app.callback());

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
})(typeDefs, resolvers);
