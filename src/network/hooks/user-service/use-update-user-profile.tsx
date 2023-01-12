import { useMutation } from '@tanstack/react-query';
import { onUpdateUserProfile } from '../../api/services/user-service';

export const useUpdateUserProfile = () => {
    const query = useMutation(onUpdateUserProfile);

    return query;
};
