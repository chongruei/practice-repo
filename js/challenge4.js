var nmError = document.getElementById('nmError')
var addrError = document.getElementById('addrError')
var form = document.getElementById('challenge4_form')
form.onsubmit = checkform

function checkform () {
  // 驗證預設為true 其中一項規則不通過 則為false
  var valid = true;
  var name = document.getElementById('name')
  var addr = document.getElementById('addr')

  var nameValue = name.value
  var addrValue = addr.value

  // 如果name沒有輸入值
  if (nameValue === '') {
    // 顯示錯誤wording
    nmError.style.display = 'block'
    valid = false
  } else {
    // 取消顯示錯誤wording
    nmError.style.display = 'none'
  }

  // 如果addr沒有輸入值
  if (addrValue === '') {
    // 顯示錯誤wording
    addrError.style.display = 'block'
    valid = false
  } else {
    // 取消顯示錯誤wording
    addrError.style.display = 'none'
  }

  return valid
}