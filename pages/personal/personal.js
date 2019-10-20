// pages/personal/personal.js

//获取应用实例
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onShow:function(){
    wx.checkSession({
      success(){
        wx.showToast({
          title: 'hahaha',
        })
      },
      fail(){
        wx.showToast({
          title: 'lalala',
        })
      }
    })  
  }
})