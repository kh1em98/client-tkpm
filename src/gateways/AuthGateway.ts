import Cookies from 'js-cookie';
import { AxiosInstance } from 'axios';
import { LoginUser } from '../models/Account';
import { ISignUpForm } from '../pages/betterRegister/SignUpForm';
import { getDecodedPayload, transformToLoginUser } from '../utils/helper';

const AUTHORIZATION_HEADER = 'Authorization';

export const ACCESS_TOKEN = 'accessToken';

export class AuthGateway {
  private restConnector: AxiosInstance;
  private jwt: string | null;

  constructor(options: { restConnector: AxiosInstance }) {
    this.jwt = localStorage.getItem(ACCESS_TOKEN);
    this.restConnector = options.restConnector;

    this.loadAccessToken();
  }

  public async signUp(body: ISignUpForm) {
    return await this.restConnector.post('/sign-up', body);
  }

  public async loginWithEmail(body: {
    email: string;
    password: string;
  }): Promise<{ token: string }> {
    const { data } = await this.restConnector.post('/sign-in', body);
    return data;
  }

  public getLoginUser(): LoginUser | null {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      return null;
    } else {
      this.jwt = localStorage.getItem(ACCESS_TOKEN);
    }

    try {
      const payload = getDecodedPayload(this.jwt!);

      return transformToLoginUser(payload);
    } catch (error) {
      console.log('load jwt error : ', error);
      return null;
    }
  }

  public logout(): void {
    this.setAccessToken(null);
  }

  public setAccessToken(token: string | null): void {
    if (token) {
      this.jwt = token;
      localStorage.setItem(ACCESS_TOKEN, token);
      this.restConnector.defaults.headers[AUTHORIZATION_HEADER] = `${token}`;
    } else {
      this.jwt = null;
      localStorage.removeItem(ACCESS_TOKEN);
      delete this.restConnector.defaults.headers[AUTHORIZATION_HEADER];
    }
  }

  private loadAccessToken(): void {
    // On browser, load access token from cookie storage.
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    this.jwt = accessToken;
    this.restConnector.defaults.headers[
      AUTHORIZATION_HEADER
    ] = `${accessToken}`;
  }
}
