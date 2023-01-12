import { useMutation } from '@tanstack/react-query';
import { onVerifyOtp } from '../../api/services/user-service';

export const useVerifyOtp = () => {
    const query = useMutation(onVerifyOtp);

    return query;
};
