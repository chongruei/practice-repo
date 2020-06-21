var largeDiv = document.getElementById('largeId');

// id 更換成有css style的id
largeDiv.id = 'largeDiv'
largeDiv.style.fontSize = 'initial'
largeDiv.style.backgroundSize = 'cover';

// 把原本的文字存下來
var defaultWording = largeDiv.innerText

// 取得所有 thumbnail class 的 dom
var allThumbs = document.querySelectorAll('.thumbnail');

// 對所有的dom加上事件判斷
for(var i = 0; i < allThumbs.length; i++) {
  var thumb = allThumbs[i]

  // 滑鼠進到image裡面
  // 圖片換掉
  // 文字顯示圖片的alt
  thumb.onmouseover = function () {
    var imgSrc = this.src
    var imgAlt = this.alt
    largeDiv.style.backgroundImage = 'url(' + imgSrc + ')'
    largeDiv.innerText = imgAlt
  }

  // 滑鼠出去image
  // 顯示原本的文字
  thumb.onmouseout = function () {
    largeDiv.style.backgroundImage = 'none'
    largeDiv.innerText = defaultWording
  }
}

