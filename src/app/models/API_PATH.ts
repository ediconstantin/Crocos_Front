import { environment } from '../../environments/environment';

export const API_PATH = {
    USER_LOGIN: `${environment.baseUrl}/login`,
    USER_LOGOUT: `${environment.baseUrl}/logout`,
    QUIZ_TEST: `${environment.baseUrl}/test`
};
