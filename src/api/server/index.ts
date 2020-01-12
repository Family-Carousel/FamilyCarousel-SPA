import axios from 'axios';

export const bffApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export function setHeaders(jwt: string): void {
    bffApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
    bffApi.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
}

export function clearJWT(): void {
    delete bffApi.defaults.headers.common.Authorization;
}

export async function postFamily(familyData: any): Promise<any | undefined> {
    try {
        const response = await bffApi.post('', familyData);
        return (response.data as any);
    } catch (e) {
        console.error('post to BFF for family data failed with: ', e);
        throw new Error('Post to Server failed');
    }
}
