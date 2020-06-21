var form = document.getElementById('ch3form')
form.onsubmit = checkform

function checkform () {
  // 驗證預設為true 其中一項規則不通過 則為false
  var valid = true;

  // 以css selector選取 有選擇的 radio standing
  var standing = document.querySelector("input[name='standing']:checked");

  // 以css selector選取 有選擇的 radio gradDate
  var gradDate = document.querySelector("input[name='gradDate']:checked");
  
  if (standing === null || gradDate === null )
    valid = false

  if (standing === null && gradDate === null) { // 如果兩個都沒有選取的話
    alert('You must select a class standing and graduation date')
  } else if (standing === null) {   // 如果 standing 沒有選取的話
    alert('You must a class standing')
  } else if (gradDate === null) {   // 如果 gradDate 沒有選取的話
    alert('You must a class gradDate')
  }

  return valid;
}