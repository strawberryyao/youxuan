import {
  RECEIVE_DATA,
  RECEIVE_HOME_DATA,
  RECEIVE_BANNER
} from "./mutations-type";
import {
  reqData,
  reqHome,
  reqBanner
} from "../api";

export default {

  async getData({commit,state},cb){
    const result = await reqData()
    if(result.code===0){
      const data = result.data
      commit(RECEIVE_DATA,{data})
      cb && cb()
    }
  },
  //
  async getHome({commit,state},cb){
    const result = await reqHome()
    if(result.code===0){
      console.log(result.data);
     /* const homeData = result.data*/
      commit(RECEIVE_HOME_DATA,{homeData:result.data})
      cb && cb()
    }
  },
  //
  async getBanner({commit,state},cb){
    const result = await reqBanner()
    if(result.code===0){
      const banners = result.data
      commit(RECEIVE_BANNER,{banners})
      cb && cb()
    }
  }
}
