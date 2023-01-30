import { Amplify } from '@aws-amplify/core';
import { fetchSession, fetchCredentials } from '@aws-amplify/auth/cognito';

export function initUser(setUserToken) {
    const loadUser = async () => {
        fetchSession({ credentialsProvider: fetchCredentials });
      };
  
      loadUser();
      Amplify.observeUser((user) => setUserToken(user.accessToken));
}