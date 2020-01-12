export interface IAuthData {
    id: string;
    emailAddress: string;
    jwt: string;
    displayName: string
    expTime: number;
    loginTime: number;
    refreshToken: string;
    user?: ICognitoUser
}

export interface ICognitoUser {
    username: string;
}