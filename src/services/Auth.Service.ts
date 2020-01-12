import { IAuthData } from '@/interfaces/IAuthData';
import { UserAuth } from '@/store/modules/auth/store.auth';
import { SnackBar } from '@/store/modules/snackbar/store-snackbar';
import { Auth } from 'aws-amplify';

export interface IAuthService {
    logInUser(email: string, password: string): Promise<IAuthData>;
    getCurrentAuthenticatedUser(): Promise<IAuthData>;
}

class AuthService implements IAuthService {

    public async logInUser(email: string, password: string): Promise<IAuthData> {
        return Auth.signIn(email, password)
            .then((res) => {
                UserAuth.setCurrentUser({
                    displayName: res.attributes.name,
                    emailAddress: res.attributes.email,
                    expTime: res.signInUserSession.idToken.payload.exp,
                    id: res.username,
                    jwt: res.signInUserSession.accessToken.jwtToken,
                    loginTime: res.signInUserSession.idToken.payload.iat,
                    refreshToken: res.signInUserSession.refreshToken.token
                });
            }).catch((err) => {
                SnackBar.setSnackBar({
                    color: 'error',
                    text: `${err.message}`,
                    timeout: 6000
                });
                return err;
            });
    }

    public async getCurrentAuthenticatedUser(): Promise<IAuthData> {
        return await Auth.currentAuthenticatedUser();
    }

    public async SignUpUser(emailAddress: string, displayName: string, userPassword: string): Promise<IAuthData> {
        return Auth.signUp({
            attributes: {
                email: emailAddress,
                name: displayName
            },
            password: userPassword,
            username: emailAddress,
            validationData: []
        }).catch((err) => {
            SnackBar.setSnackBar({
                color: 'error',
                text: `${err.message}`,
                timeout: 6000
            });
            return err;
        });
    }

    // TODO confirm account Function
    // TODO Resend Code Function
    // TODO forgot password function
}

export const authService = new AuthService();
