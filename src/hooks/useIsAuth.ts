import { useAppDispatch } from '../redux/store';
import { ACCESS_TOKEN } from '../gateways/AuthGateway';
import { Redirect, useHistory } from 'react-router-dom';
const useIsAuth = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const history = useHistory();

  if (!accessToken) {
    return history.push('/sign-in');
  }
};

export default useIsAuth;
