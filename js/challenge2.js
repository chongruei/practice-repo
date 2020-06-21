var useAddress = document.getElementById("useAddress");
var bill = document.getElementById("bill");
var home = document.getElementById("home");

useAddress.onchange = function () {
  // 確認有沒有打勾
  var checked = this.checked;

  if (checked === false) {
    home.value = ""; // 清空
    home.disabled = false; // 給編輯
  } else {
    home.value = bill.value; // 複製第一個textarea的值到第二個
    home.disabled = true; // 不給編輯
  }
};
