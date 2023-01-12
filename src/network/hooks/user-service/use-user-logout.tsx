import { useMutation } from '@tanstack/react-query';
import { onUserLogout } from '../../api/services/user-service';

export const useUserLogout = () => {
    const query = useMutation(onUserLogout);

    return query;
};
