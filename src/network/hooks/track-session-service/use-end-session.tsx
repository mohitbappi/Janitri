import { useMutation } from '@tanstack/react-query';
import { onEndSession } from '../../api/services/track-session-service';

export const useEndSession = () => {
    const query = useMutation(onEndSession);

    return query;
};
