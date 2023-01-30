import { httpClient } from '@aws-amplify/core';

export function AppSync(){
    async function readTodos() {
      const result = await httpClient({
        authMode: 'SigV4',
        body: {
          query: listTodos,
        },
        endpoint: 'https://mbp2drwa4fbbrcfyeoltvdezb4.appsync-api.us-east-1.amazonaws.com/graphql',
        headers: null,
        method: 'POST',
        service: 'appsync',
        region: 'us-east-1'
      });

        alert(JSON.stringify(result.data, null, 2));
    }

    return <button onClick={readTodos}>Call AppSync</button>
}

const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;