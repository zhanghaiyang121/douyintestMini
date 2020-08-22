// pages/index/index.js
const util=require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videolist:[

    ],
    baseserver:util.baseServer,
    screenWidth:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me=this
    var screenWidth = wx.getSystemInfoSync().screenWidth;
    me.setData({
      screenWidth: screenWidth,
    });
    let app=getApp()
    let userinfo=app.globalData.userinfo
    this.getVedioList(userinfo)
  },
  getVedioList(userinfo){
    let that=this
    wx.request({
      url: util.baseServer+"/videolist",
      method:"POST",
      data:{
        userId:userinfo.id
        // userId:"200820GDY9FFW568"
      },
      success(res){
        console.log(res.data.data)
        that.setData({
          videolist:res.data.data
        })

      }
    })
  },
  showVideoInfo(e){
    var me = this;
    var videolist = me.data.videolist;
    var arrindex = e.target.dataset.arrindex;
    var videoInfo = JSON.stringify(videolist[arrindex]);
console.log(videoInfo)
    wx.redirectTo({
      url: '../videoinfo/index?videoInfo=' + videoInfo
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