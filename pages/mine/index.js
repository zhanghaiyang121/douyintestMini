// pages/mine/index.js
const util=require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  choosevideo(){
    console.log(1111111111)
    let me=this
    let app=getApp()
    let userinfo=app.globalData.userinfo
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        console.log(res);

        wx.showLoading({
          title: '上传中...',
        })
        
        wx.uploadFile({
          url: util.baseServer + '/testvideo',  //app.userInfo.id,
          filePath: res.tempFilePath,
          name: 'file',
          method:"POST",
          formData:{
            userid:userinfo.id,
            audioId:"",
            videoSeconds:res.duration,
            videoWidth:res.width,
            videoHeight:res.height,
            videoDesc:"测试"
          },
          success: function (res) {
            var data = JSON.parse(res.data);
            console.log(data);
            wx.hideLoading();
            if (data.status == 200) {
              wx.showToast({
                title: '上传成功!~~',
                icon: "success"
              });
              wx.navigateTo({
                url: '../index/index',
              })
            }

          }
        })


      }
    })
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