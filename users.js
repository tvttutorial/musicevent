function sigin(){
          const tds = ['tts@ps_001', 'tts@ps_002', 'tts@ps_003', 'tts@ps_004', 'tts@ps_005', 'PS@admin' ];
  var t = document.getElementById("txtpas").value;
  var r = tds.indexOf(t);
            if (r === -1) {
				if (t != "") {
               document.getElementById("noti").style.inerHTML = "Tài khoản hoặc mã kích hoạt không đúng!";
            } else {
              document.getElementById("noti").style.inerHTML = "Tài khoản hoặc mã kích hoạt đúng!";
            }
          }
function frame(link) {
               document.getElementById('tools').src = link;
}
