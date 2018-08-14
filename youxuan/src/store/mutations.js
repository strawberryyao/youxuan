import {
  RECEIVE_DATA,
  RECEIVE_HOME_DATA,
  RECEIVE_BANNER
} from "./mutations-type";

export default {
  [RECEIVE_DATA](state,{data}){
    state.data = data
  },
  [RECEIVE_HOME_DATA](state,{homeData}){
    console.log(homeData);
    state.homeData = homeData
  },
  [RECEIVE_BANNER](state,{banners}){
    state.banners = banners
  },

}
