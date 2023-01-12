export const baseURL = 'https://eevee.prod.janitri.in/api/v1'

export const apiConstants = {
    login: '/accounts/login/',
    verifyOtp: 'accounts/otp/verify/',
    userProfile: '/accounts/me/',
    userLogout: '/accounts/logout/',
    startSession: {
        baseUrl: '/accounts/',
        endUrl: '/keyar/monitoring-sessions/'
    },
    endSession: {
        baseUrl: '/accounts/',
        endUrl: '/keyar/monitoring-sessions/'
    },
    pastRecords: {
        baseUrl: '/accounts/',
        endUrl: '/keyar/monitoring-sessions/'
    }
}

export const persistKeys = {
    token: 'token',
    isUserRegistered: 'isUserRegistered'
}

export const apiKeys = {
    userProfile: 'userProfile',
    pastRecords: 'pastRecords'
}
