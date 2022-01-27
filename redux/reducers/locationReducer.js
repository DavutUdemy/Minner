export const initialState = {
    location: [],

  };
  export const getLocationOfUser = (location)=>{
    console.log(action);
    switch (action.type) {
      case "GET_LOCATION":
        return {
          ...state,
          location: [...state.location],
        };

    }  
  }
  export default getLocationOfUser;