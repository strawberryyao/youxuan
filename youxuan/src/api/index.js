import ajax from './ajax'

export const reqData = () => ajax('/data')

export const reqHome = () => ajax('/home')
//获取首页轮播的请求
export const reqBanner = ()=>ajax('/banner')

