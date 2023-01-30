import { signInWithSRP, confirmSignIn, fetchSession, fetchCredentials } from '@aws-amplify/auth/cognito'
import { record } from '@aws-amplify/analytics/pinpoint';

export function SignIn() {
    async function signIn() {
        const username = prompt('username');
        const password = prompt('password');
        const result = await signInWithSRP({
            username,
            password
        });

        if (result.challenge === 'SOFTWARE_TOKEN_MFA') {
            const code = prompt('MFA Code');
            await confirmSignIn({ code });

            // UX sacrifice
            await fetchSession({ credentialsProvider: fetchCredentials });
            
            record({ name: 'user logged in' });
        }
    }
    return <button onClick={signIn}>Sign In</button>
}