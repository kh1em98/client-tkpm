import {
  cacheExchange,
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
} from 'urql';
import { persistedFetchExchange } from '@urql/exchange-persisted-fetch';

export const client = createClient({
  url: 'http://localhost:8080/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    dedupExchange,
    // cacheExchange({
    //   updates: {
    //     Mutation: {
    //       login: (_result, args, cache, info) => {
    //         betterUpdateQuery<LoginMutation, MeQuery>(
    //           cache,
    //           { query: MeDocument },
    //           _result,
    //           (result, query) => {
    //             if (result.login.__typename.endsWith(ERROR_RESPONSE_END_WITH)) {
    //               return query;
    //             } else {
    //               return {
    //                 me: { ...result.login } as User,
    //               };
    //             }
    //           },
    //         );
    //       },
    //       logout: (_result, args, cache, info) => {
    //         betterUpdateQuery<LogoutMutation, MeQuery>(
    //           cache,
    //           { query: MeDocument },
    //           _result,
    //           () => ({ me: null }),
    //         );
    //       },
    //     },
    //   },
    // }),
    cacheExchange,
    persistedFetchExchange({
      preferGetForPersistedQueries: true,
    }),
    fetchExchange,
  ],
});
