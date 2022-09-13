// 当前这个模块：API进行统一管理
import requests from "./request";
// 引入虚拟数据mock请求
import mockRequests from './mockRequest'

// 三级联动接口
// /api/product/getBaseCategoryList  get 无参数
// 发请求：axios发送请求返回结果是Promise对象
// 对外暴露一个函数，只要外部调用这个函数，就向服务器发起ajax请求、获取三级菜单数据。当前这个函数只需要把服务器返回结果返回即可
export const reqCategoryList = ()=>{
  return requests({url:'/product/getBaseCategoryList',method:'get'})
}
// 切记：当前函数执行需要把服务器返回结果返回

// 获取banner （Home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequests.get('/banner')
// 获取floor数据
export const reqGetFloorList = ()=>mockRequests.get('/floor')
 
// 获取搜索模块数据 地址: /api/list 请求方式:post 参数：需要带参数
// 当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})