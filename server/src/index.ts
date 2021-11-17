import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import dataSources from './dataSources';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

const schema = loadSchemaSync('./src/schema/schema.graphql', {
  loaders: [new GraphQLFileLoader()]
});

const schemaWithResolvers = addResolversToSchema(schema, resolvers);

const server = new ApolloServer({
  schema: schemaWithResolvers,
  dataSources
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
