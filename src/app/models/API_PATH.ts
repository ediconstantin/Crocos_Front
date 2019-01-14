import { environment } from '../../environments/environment';

export const API_PATH = {
    USER_LOGIN: `${environment.baseUrl}/login`,
    USER_LOGOUT: `${environment.baseUrl}/logout`,
    USER_INFO: `${environment.baseUrl}/user`,
    USER_PHOTO: `${environment.baseUrl}/user/photo/`,
    QUIZ_TEST: `${environment.baseUrl}/test`
};
