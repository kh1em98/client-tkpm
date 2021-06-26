import { AuthGateway } from '../gateways/AuthGateway';
import { LoginUser } from '../models/Account';
import { ISignUpForm } from '../pages/betterRegister/SignUpForm';

export class AuthService {
  private authGateway: AuthGateway;

  constructor(options: { authGateway: AuthGateway }) {
    this.authGateway = options.authGateway;
  }

  public async loginWithEmail(body: {
    email: string;
    password: string;
  }): Promise<LoginUser | null> {
    const { token } = await this.authGateway.loginWithEmail(body);
    this.authGateway.setAccessToken(token);
    return this.getLoginUser();
  }

  public getLoginUser(): LoginUser | null {
    return this.authGateway.getLoginUser();
  }

  public async signUp(body: ISignUpForm) {
    return this.authGateway.signUp(body);
  }

  public logout(): void {
    this.authGateway.logout();
  }

  public setAccessToken(accessToken: string): void {
    this.authGateway.setAccessToken(accessToken);
  }
}
