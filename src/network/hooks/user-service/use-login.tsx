import { useMutation } from '@tanstack/react-query';
import { onLogin } from '../../api/services/user-service';

export const useLogin = () => {
    const query = useMutation(onLogin);

    return query;
};
