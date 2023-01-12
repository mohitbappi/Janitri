import { useMutation } from '@tanstack/react-query';
import { onStartSession } from '../../api/services/track-session-service';

export const useStartSession = () => {
    const query = useMutation(onStartSession);

    return query;
};
