const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
  users: [
    // { id: 1, followed: false, fullName: "Ivan", status: "Ok", location: {city: 'Moscow', country: 'Russia'}},
    // { id: 2, followed: false, fullName: "Grisha", status: "Ok", location: {city: 'Kiev', country: 'Ukraine'}},
    // { id: 3, followed: true, fullName: "Krot", status: "Ok", location: {city: 'Tokyo', country: 'Japan'}},
    // { id: 4, followed: true, fullName: "Galeta", status: "Ok", location: {city: 'Sidney', country: 'Australia'}},
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;