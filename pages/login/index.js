// pages/login/index.js
const util=require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"dong",
    password:"123"
  },
  formSubmit(e){
    wx.request({
      url: util.baseServer+'/login',
      method:"POST",
      data:{
        username:e.detail.value.username,
        password:e.detail.value.password,
      },
      success(res){
        console.log(res.data)
        const app=getApp()
        app.globalData.userinfo=res.data.data
        console.log(app)
        wx.navigateTo({
          url: '../index/index',
        })
      }
    })
  },
  formReset(e){
    console.log(e)
  },
  goRegistPage(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})