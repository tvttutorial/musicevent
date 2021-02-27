function sai() {
          Swal.fire({
  text: 'Sai mã đăng nhập! Vui lòng nhập lại mã đăng nhập hoặc liên hệ quản trị để được hướng dẫn.',
  icon: 'warning',
  timer: 1500,
  confirmButtonText: 'OK'
})}
	 function dangxuat() {
          Swal.fire({
  text: 'Bạn đã đăng xuất, hãy đảm bảo nhớ mật khẩu để quay lại!',
  icon: 'success',
  timer: 1500,
  confirmButtonText: 'OK'
})}
          function dung() {
          Swal.fire({
  text: 'Đăng nhập thành công!',
  icon: 'success',
  timer: 1500,
  confirmButtonText: 'OK'
})
          }
          function sigin(){
          const tds = ['tts@ps_001', 'tts@ps_002', 'tts@ps_003', 'tts@ps_004', 'tts@ps_005', 'PS@admin' ];
  var t = document.getElementById("txtpas").value;
  var r = tds.indexOf(t);
            if (r === -1) {
				if (t != "") {
              sai();}
            } else {
              dung();
              action();
			  login();
			  document.getElementById("login").style.display = "none";
			  document.getElementById("myTopnav").style.display = "block";
			  document.getElementById("tools").style.display = "block";
            }
          }
          function frame(link) {
               document.getElementById('tools').src = link;
          }
