// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:[
         {image:"/images/content.png",txt:"内容",class:'tab_choiced',check:false},
         {image:"/images/font.png",txt:"字体",class:'tab_choice',check:true},
         {image:"/images/size.png",txt:"大小",class:'tab_choice',check:true},
         {image:"/images/color.png",txt:"颜色",class:'tab_choice',check:true},
         {image:"/images/picture.png",txt:"图片",class:'tab_choice',check:true},
         {image:"/images/effect.png",txt:"效果",class:'tab_choice',check:true},
         {image:"/images/direction.png",txt:"方向",class:'tab_choice',check:true}
    ],
    // tab_type:'tab_choice',
    screen:{
      HdIndex:0,
      BdIndex:0
    },
    barrage_data: { textarea: "", font: "SimHei", size: "200rpx", color: "#e4ff00", picture_1: "", picture_2: "", effect: "none", direction:"vertical"},
    preset_list:[
      { txt: "欢迎回家", choiced:""},
         { txt: "团友们 请集合", choiced: ""},
         { txt: "生日快乐", choiced: ""},
         { txt: "我爱你", choiced: ""},
         { txt: "嫁给我吧", choiced: ""},
         ],
    font_style:[
      { style: "黑体", family: "SimHei", choiced: "color:#7dbd29;"},
      { style: "书宋", family: "HYA1GJ", choiced: ""},
      { style: "仿宋", family: "FangSong", choiced: ""},
      { style: "楷书", family: "KaiTi", choiced: ""},
         ],
    size_style:[
      { style: "最大", size: "200rpx", size_view: "80rpx", choiced: "color:#7dbd29;"},
      { style: "较大", size: "150rpx", size_view: "70rpx", choiced: ""},
      { style: "大", size: "100rpx ", size_view: "60rpx",choiced: ""},
      { style: "中", size: "60rpx ", size_view: "50rpx",choiced: "" },
      { style: "小", size: "30rpx ", size_view: "30rpx", choiced: ""},
         ],
    color_style:[
      { style: "1", color: "#e4ff00", choiced: "color:#7dbd29;"},
      { style: "2", color: "#bdde35", choiced: ""},
      { style: "3", color: "#5cffdd", choiced: ""},
      { style: "4", color: "#49d6ff", choiced: ""},
      { style: "5", color: "#457cf9", choiced: ""},
      { style: "6", color: "#ac93ff", choiced: ""},
      { style: "7", color: "#eea9ff", choiced: ""},
      { style: "8", color: "#ff449c", choiced: ""},
      { style: "9", color: "#fe2433", choiced: ""},
      { style: "10", color: "#ff520e", choiced: ""},
      { style: "11", color: "#ffae00", choiced: ""},
      { style: "12", color: "#f8cc00", choiced: ""},
      { style: "13", color: "#ffb7d6", choiced: ""},
      { style: "14", color: "#b0f6fc", choiced: ""},
      { style: "15", color: "#ffffff", choiced: ""},
         ],
    picture_style:[
      { style: "最大", size: "80rpx", picture: "", choiced: "color:#7dbd29;"},
      { style: "较大", size: "60rpx", picture: "", choiced: ""},
         ],
    effect_style:[
      { style: "闪烁", effect: "flash", choiced: ""},
      { style: "翻转", effect: "flipInY", choiced: ""},
      { style: "摇摆", effect: "swing ", choiced: ""},
      { style: "抖动", effect: "shake ", choiced: ""},
      { style: "放大抖动", effect: "tada ", choiced: ""},
         ],
    direction_style:[
      { style: "vertical", direction: "vertical_icon", icon: "/images/verticaled.png", choiced: "color:#7dbd29;"},
      { style: "transverse", direction: "transverse_icon", icon: "/images/transverse.png", choiced: ""},
    ],
  
  },
  btn_reset(){
    wx.redirectTo({
      url: '/pages/set/set'
    })
  },
  btn_save(){
    var that = this;
    var tab = that.data.tab;
    var flag = true;
    var barrage_data = that.data.barrage_data;
    var picture_style = that.data.picture_style;

    for(var i = 0;i<tab.length;i++){
      if(tab[i].check==false){
        flag = false;
        wx.showModal({
        title: '提示',
        content: '请设置弹幕的'+tab[i].txt,
        success: function(res) {
          if (res.confirm) {

          } else if (res.cancel) {

          }
        }
      })
        break;  //数据传输速度块，弹窗显示最后一个，加上break强制退出循环
      }
      
    }
    if(flag){
      wx.setStorageSync("barrage_data",barrage_data);
      wx.setStorageSync("picture_style",picture_style);

      wx.navigateTo({
        url: '/pages/index/index'
      })
    }else{

    }  
  },
  direction_choiced(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var direction_style = that.data.direction_style;
    var tab = that.data.tab;
    var barrage_data = that.data.barrage_data;
    var direction_style = that.data.direction_style;
    switch(id)
    {
    case 0:
      direction_style[0].icon = "/images/verticaled.png";
      direction_style[1].icon = "/images/transverse.png";      
      break;
    case 1:
      direction_style[0].icon = "/images/vertical.png";
      direction_style[1].icon = "/images/transversed.png";
      break;
    default:
      console.log('选择屏幕方向出错')
    }
    barrage_data.direction = direction_style[id].style;
    tab[6].check = true;
    that.setData({
        direction_style:direction_style,
        tab:tab,
        barrage_data:barrage_data
      })
  },
  effect_choiced(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var effect_style = that.data.effect_style;
    var tab = that.data.tab;
    var barrage_data = that.data.barrage_data;
    barrage_data.effect = effect_style[id].effect;
    for(var i = 0;i<effect_style.length;i++){
      effect_style[i].choiced = "";
    }
    tab[5].check = true;
    effect_style[id].choiced = "color:#7dbd29;";
    that.setData({
      effect_style:effect_style,
      tab:tab,
      barrage_data: barrage_data
    })
  },
  addPicture(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var picture_style = that.data.picture_style;
    var barrage_data = that.data.barrage_data;
    wx.chooseImage({
      count: 1,
      sizeType:['original'],// 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
      
      picture_style[id].picture = tempFilePaths;
      switch(id)
        {
        case 0:
          barrage_data.picture_1 = tempFilePaths;
          break;
        case 1:
          barrage_data.picture_2 = tempFilePaths;
          break;
        default:
          console.log('图片路径出错')
        }

      that.setData({
        picture_style:picture_style
      })
      // wx.previewImage({
      //   current: '', // 当前显示图片的http链接
      //   urls: [tempFilePaths] // 需要预览的图片http链接列表
      // })
  }
    })
  },
  color_choiced(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var color_style = that.data.color_style;
    var tab = that.data.tab;
    var barrage_data = that.data.barrage_data;
    for(var i = 0; i < color_style.length;i++){
      color_style[i].choiced = false;
    }
    tab[3].check = true;
    color_style[id].choiced = true;
    barrage_data.color = color_style[id].color;
    that.setData({
      color_style : color_style,
      tab:tab,
      barrage_data: barrage_data
    })
  },
  size_choiced(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var size_style = that.data.size_style;
    var tab = that.data.tab;
    var barrage_data = that.data.barrage_data;
    for(var i = 0;i<size_style.length;i++){
      size_style[i].choiced = "";
    }
    tab[2].check = true;
    size_style[id].choiced = "color:#7dbd29;";
    barrage_data.size = size_style[id].size;
    that.setData({
      size_style:size_style,
      tab:tab,
      barrage_data: barrage_data
    })
  },
  font_choiced(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var font_style = that.data.font_style;
    var tab = that.data.tab;
    var barrage_data = that.data.barrage_data;
    for(var i = 0;i<font_style.length;i++){
      font_style[i].choiced = "";
    }
    tab[1].check = true;
    font_style[id].choiced = "color:#7dbd29;";
    barrage_data.font = font_style[id].family;
    that.setData({
      font_style:font_style,
      tab:tab,
       barrage_data: barrage_data
    })
  },
  txt_choiced(e){
    var that = this;
    var preset_list = that.data.preset_list;
    var id = e.currentTarget.dataset.id;
    var txt = preset_list[id].txt;
    var tab = that.data.tab;
    var barrage_data = that.data.barrage_data;


    for(var i = 0;i<preset_list.length;i++){
      preset_list[i].choiced = "";
    }
    tab[0].check = true;
    tab[0].choiced = ""; 
    preset_list[id].choiced = "color:#7dbd29;";
    barrage_data.textarea = txt;
    that.setData({
      preset_list:preset_list,
      tab:tab,
      barrage_data:barrage_data
    })
  },
  entry(e){
    var that = this;
    var value = e.detail.value;
    // var after_num = value.length - 4;
    var tab = that.data.tab;
    var preset_list = that.data.preset_list;
    var barrage_data = that.data.barrage_data;
    barrage_data.textarea = "";
    if(value.length>4){
      value = value.replace(/\n/g,"") ;

      var front = value.substr(0, 4);
      var after = value.substr(4,4)
      value = front + '\n' + after;

    }
    

    if(value.length>0){
      tab[0].check = true;
      tab[0].choiced = "border:8rpx solid #7dbd29;";
      for(var i = 0;i<preset_list.length;i++){
      preset_list[i].choiced = "";
      barrage_data.textarea = value;
      }

    }
    else{
      tab[0].choiced = "";
      tab[0].check = false;
    }
    // barrage_data.textarea = value;
    that.setData({
        barrage_data:barrage_data,
        tab:tab,
        preset_list:preset_list
      })
  },
  
  //三目运算控制变量显示不同选项内容
  screentop(e){
    var that = this;

    var _datasetId = e.currentTarget.dataset.id;
    var screenobject={};
    var tab = that.data.tab;
    screenobject.HdIndex = _datasetId;
    screenobject.BdIndex = _datasetId;
    for(var i =0; i<tab.length;i++){
      tab[i].class='tab_choice';
    }
    tab[_datasetId].class='tab_choiced';
    that.setData({
      tab:tab,
      screen:screenobject
    })

  },
  // tab(e){
  //   var that = this;
  //   var id=e.currentTarget.dataset.id;
  //   var tab = that.data.tab;
  //   for(var i =0; i<tab.length;i++){
  //     tab[i].class='tab_choice';
  //   }
  //   tab[id].class='tab_choiced';
  //   that.setData({
  //     tab:tab
  //   })
  // },

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