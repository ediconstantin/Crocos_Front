import { environment } from '../../environments/environment';

export const API_PATH = {
    USER_LOGIN: `${environment.baseUrl}/login`,
    USER_LOGOUT: `${environment.baseUrl}/logout`,
    USER_REGISTER: `${environment.baseUrl}/register`,
    USER_INFO: `${environment.baseUrl}/user`,
    USER_PHOTO: `${environment.baseUrl}/user/photo/`,
    QUIZ_TEST: `${environment.baseUrl}/test/public`,
    QUIZ_CLONE: `${environment.baseUrl}/test/clone`,
    QUIZ_UPDATE: `${environment.baseUrl}/test`,
    QUIZ_QUESTION_DELETE: `${environment.baseUrl}/test/question`,
    QUIZ_DELETE: `${environment.baseUrl}/test`,
    SESSIONS: `${environment.baseUrl}/session`,
    SESSIONS_PUBLIC: `${environment.baseUrl}/session/public`,
    SESSIONS_CLOSE: `${environment.baseUrl}/session/close`,
    QUESTION: `${environment.baseUrl}/question`,
    QUESTION_CREATE: `${environment.baseUrl}/question`,
    QUESTION_DELETE: `${environment.baseUrl}/question`
};
