import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {ThunkAction} from "redux-thunk";
import {ActionsTypes, AppStateType} from "./redux-store";

let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: AuthReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

type AuthReducerActionsTypes = ActionsTypes<typeof authReducerActionCreators>;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthReducerActionsTypes>;

/*export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.me().then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setUserData(id, login, email, true));
                }
            }
        );
    };
};*/


export const getAuthUserData = () => async (dispatch: any) => {
    let meData = await authAPI.me();
    if (meData.resultCode === 0) {
        const {id, login, email} = meData.data;
        dispatch(authReducerActionCreators.setUserData(id, login, email, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
     let data = await authAPI.login(email, password, rememberMe, captcha);
         if(data.resultCode === ResultCodesEnum.Success) {
             dispatch(getAuthUserData())
         } else {
             if(data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired)  dispatch(getCaptchaUrl());
             let message = data.messages.length > 0 ? data.messages[0] : "Some error";
             // @ts-ignore
             dispatch(stopSubmit("login", {_error: message}));
         }
};

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout();
         if(data.resultCode === ResultCodesEnum.Success) {
             dispatch(authReducerActionCreators.setUserData(null, null, null, false))
         }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(authReducerActionCreators.getCaptchaUrlSucces(captchaUrl));
};

export const authReducerActionCreators = {
    setUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => (
        {
            type: 'SET_USER_DATA',
            payload: {userId, login, email, isAuth}}
    ),
    getCaptchaUrlSucces: (captchaUrl: string) => ({type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}})
};

export default authReducer;