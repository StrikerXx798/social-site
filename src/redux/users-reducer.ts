import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {ActionsTypes, AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of urers ids
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: UsersReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case 'SET_USERS':
            return {...state, users: [...action.users]};

        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount};

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage};

        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }

        case 'TOGGLE_FOLLOWING_IN_PROGRESS': {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

};

export default usersReducer;

type UsersReducerActionsTypes = ActionsTypes<typeof usersReducerActionCreators>

type DispatchType = Dispatch<UsersReducerActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersReducerActionsTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(usersReducerActionCreators.toggleIsFetching(true));

        let data = await userAPI.getUsers(page, pageSize);
        dispatch(usersReducerActionCreators.toggleIsFetching(false));
        dispatch(usersReducerActionCreators.setUsers(data.items));
        dispatch(usersReducerActionCreators.setCurrentPage(page));
        dispatch(usersReducerActionCreators.setTotalUsersCount(data.totalCount));
    }
};

const _followUnfollowFlow = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => any
) => {
    dispatch(usersReducerActionCreators.toggleFollowingInProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) dispatch(actionCreator(userId));
    dispatch(usersReducerActionCreators.toggleFollowingInProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), usersReducerActionCreators.followSuccess);
    }
};

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), usersReducerActionCreators.unfollowSuccess);
    }
};


export const usersReducerActionCreators = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    } as const)
};