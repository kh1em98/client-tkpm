import { AxiosInstance } from 'axios';

export class UploadGateway {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async uploadImage(file) {
    const { data } = await this.restConnector.post('/upload', file);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(
    //       'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/208367199_2908563739392464_2766679157560401547_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=brzAFCMM_-gAX-RyJQo&_nc_oc=AQnLEKIlxGwmdBOdAc-9ntpxK5tMirHzEfE5NkO1N4aw1dFl-vTJTqWX5L_OOTykEDq4PDHZU0Lv1b4hPHmyVPEh&_nc_ht=scontent.fsgn5-7.fna&oh=fdc37082410eccac3d2b1fedd568a094&oe=60DC8BFA',
    //     );
    //   }, 2000);
    // });

    return data;
  }
}
