/*
使用mockjs 提供mock数据接口
*/
import Mock from 'mockjs'

import data from './data.json'
import home_data from './home_data.json'

Mock.mock('/data',{code:0,data:data.categoryL1List})

Mock.mock('/home',{code:0,data:home_data})

Mock.mock('/banner',{code:0,data:home_data.focusList})
