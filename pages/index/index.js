// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      preset_list:[
         {txt:"欢迎回家"},
         {txt:"团友们 请集合"},
         {txt:"生日快乐"},
         {txt:"我爱你"},
         {txt:"嫁给我吧"},
         ],
    font_style:[
         {style:"黑体",family:"SimHei"},
         {style:"书宋",family:"HYA1GJ"},
         {style:"仿宋",family:"FangSong"},
         {style:"楷书",family:"KaiTi"},
         ],
    size_style:[
         {style:"最大",size:"80rpx"},
         {style:"较大",size:"60rpx"},
         {style:"大",size:"50rpx "},
         {style:"中",size:"40rpx "},
         {style:"小",size:"30rpx "},
         ],
    color_style:[
         {style:"1",color:"#e4ff00"},
         {style:"2",color:"#bdde35"},
         {style:"3",color:"#5cffdd"},
         {style:"4",color:"#49d6ff"},
         {style:"5",color:"#457cf9"},
         {style:"6",color:"#ac93ff"},
         {style:"7",color:"#eea9ff"},
         {style:"8",color:"#ff449c"},
         {style:"9",color:"#fe2433"},
         {style:"10",color:"#ff520e"},
         {style:"11",color:"#ffae00"},
         {style:"12",color:"#f8cc00"},
         {style:"13",color:"#ffb7d6"},
         {style:"14",color:"#b0f6fc"},
         {style:"15",color:"#ffffff"},
         ],
    picture_style:[
      { style: "最大", size: "80rpx", picture:"http://www.korjo.cn/xcx/geographyImg/default.png",display:""},
      { style: "较大", size: "60rpx", picture:"http://www.korjo.cn/xcx/geographyImg/default.png",display:""},
         ],
    effect_style:[
         {style:"闪烁",effect:"flash"},
         {style:"翻转",effect:"flipOutY"},
         {style:"摇摆",effect:"swing "},
         {style:"抖动",effect:"shake "},
         {style:"放大抖动",effect:"tada "},
         ],
    direction_style:[
         {style:"",direction:"vertical_icon",icon:"/images/vertical.png"},
         {style:"",direction:"transverse_icon",icon:"/images/transverse.png"},
    ],
    direction:"",
    barrage_data:{textarea:"",font:"",size:"",color:"",picture:"",effect:"",direction:"",MinWidth:"",MaxWidth:"",MixHeight:"",MaxHeight:"",LineHeight:"",width:"",height:"",length:"",},
    animation:"",
    picture:"",
    picture_class:"",
    textarea_1:"",
    textarea_2:"",
    style_class:"",
    
  },
  btn_exit(){
    wx.redirectTo({
      url: '/pages/page/page'
    })
  },
  btn_back(){
    wx.navigateBack({
      url: '/pages/set/set'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var barrage_data = wx.getStorageSync("barrage_data");
    var picture_style = wx.getStorageSync("picture_style");
    var direction =that.data.direction;
    var textarea = barrage_data.textarea;
    var size = barrage_data.size;
    var picture = that.data.picture;
    var get_size = that.data.barrage_data.size = size;
        get_size = get_size.replace("rpx","");
    var style_class = that.data.style_class;

    if(!picture_style[0].picture){
       picture_style[0].display = "display:none";
    }
    if(!picture_style[1].picture){
       picture_style[1].display = "display:none";
    }

    switch(barrage_data.direction)
    {
    case "transverse":
      barrage_data.MinHeight = get_size;
        barrage_data.MaxHeight = get_size*2;
        // barrage_data.MaxHeight = barrage_data.MaxHeight.toString();
        barrage_data.LineHeight = get_size;
        barrage_data.bgminheight = barrage_data.width = get_size*4;
        barrage_data.length = get_size*6;
        style_class = true;
        

        var picture_class ="picture_2";
        
        
        


      picture = "-webkit-animation:pic_2"+barrage_data.effect+" 1.5s linear infinite;animation:pic_2"+barrage_data.effect+" 1.5s linear infinite;margin-top:"+barrage_data.length+"rpx";
      var picture_2 = "-webkit-animation:pic_2"+barrage_data.effect+" 1.5s linear infinite;animation:pic_2"+barrage_data.effect+" 1.5s linear infinite;margin-top:300rpx";
      
        

      if(barrage_data.effect == "flipInY"){
        barrage_data.effect = "flipInX";
      }
      // direction = "dynamic_vertical";
      if(textarea.length<=4){
        direction = "transverse";
        var animation = "-webkit-animation:transverse_"+barrage_data.effect+" 1.5s linear infinite";
        
      }else{
        direction = "transverse_2";
        var animation = "-webkit-animation:transverse_2"+barrage_data.effect+" 1.5s linear infinite";
        
      }
      
      break;
    case "vertical":
        style_class = false;
        direction = "vertical";
        barrage_data.MinWidth = get_size;
        barrage_data.MaxWidth = get_size*2;
        barrage_data.LineHeight = get_size;
        barrage_data.bgminheight = barrage_data.height = get_size*4;
        barrage_data.length = get_size*5;
        if(textarea.length>4){
          var textarea_1 = textarea.slice(0,4)
          var textarea_2 = textarea.slice(4)
        }else{
          var textarea_1 = textarea.slice(0,4)
          var textarea_2 = ""
        }

        var picture_class ="picture";
        var animation = "-webkit-animation:vertical_"+barrage_data.effect+" 1.5s linear infinite";
        picture = "-webkit-animation:pic_"+barrage_data.effect+" 1.5s linear infinite;animation:pic_"+barrage_data.effect+" 1.5s linear infinite;margin-top:"+barrage_data.length+"rpx";
        var picture_2 = "-webkit-animation:pic_"+barrage_data.effect+" 1.5s linear infinite;animation:pic_"+barrage_data.effect+" 1.5s linear infinite;margin-top:100rpx";
      break;
    default:
      console.log('选择屏幕方向出错')
    }



    
    this.setData({
      barrage_data:barrage_data,
      direction:direction,
      animation:animation,
      picture:picture,
      picture_2:picture_2,
      picture_class:picture_class,
      picture_style:picture_style,
      textarea_1:textarea_1,
      textarea_2:textarea_2,
      style_class:style_class,
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