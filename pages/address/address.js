// pages/address/address.js

//区域
const area_list = require('../../utils/area.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    areaList: area_list,
    area_text: '',
    province: '',
    city: '',
    county: ''
  },
  showArea() {
    this.setData({
      show: true
    })
  },
  hideArea() {
    this.setData({
      show: false
    })
  },

  areaConfirm(event) {
    const area = event.detail.values
    this.setData({
      show: false,
      province: area[0].code,
      city: area[1].code,
      county: area[2].code,
      area_text: area[0].name + ' ' + area[1].name + ' ' + area[2].name
    })
  },
  areaCancel() {
    this.setData({
      show: false
    })
  },
  goPersonal() {
    wx.switchTab({
      url: '/pages/personal/personal',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})