$(function(){
  // タイマーの初期化
  let hour = 0
  let min = 25
  let sec = 0

  // スタートボタンのクリックイベントの定義
  function start(){
    $("#start").click(function(){
      $('#timer').css('color','#00FFFF');
      // 1秒おきに1秒ずつ減らす
      timer = setInterval(countdown, 1000);
      // スタートボタンを削除
      $(this).remove()
      // 一時停止ボタンを挿入
      $("#reset").before(` <button name="button" type="button" class="button__pause button-time" id="pause">
                            <i class="fas fa-pause"></i>
                          </button>`)
      // リセットボタンの無効化
      $("#reset").prop("disabled", true)
      // 一時停止ボタンのクリックイベントの呼び出し
      pause();
    });
  }
  
  // 一時停止ボタンのクリックイベントの定義
  function pause(){
    $("#pause").click(function(){
      // タイマーを停止
      clearInterval(timer)
      $('#timer').css('color','#FFF');
      // 一時停止ボタンを削除
      $(this).remove()
      // 再生ボタンを挿入
      $("#reset").before(` <button name="button" type="button" class="button__start button-time" id="start">
                            <i class="fas fa-play"></i>
                          </button>`)
      // リセットボタンの有効化
      $("#reset").prop("disabled", false)
      // スタートボタンのクリックイベントの呼び出し
      start();
    });
  }

  // ストップボタンのクリックイベントの定義
  function stop(){
    $("#stop").click(function(){
      // タイマーの停止
      clearInterval(timer);
      $('#timer').css('color','#FFF');
      // ストップボタンの無効化
      $(this).prop("disabled", true);
      // 休憩ボタンとリセットボタンの有効化
      $("#rest, #reset").prop("disabled", false);
      // アラームタグの削除
      $("#audio_add").remove();
      $('#timer').html("00:00:00");
    });
  };

  // ストップボタンのクリックイベントの内容だけを別個定義
  function stopmotion(){
    // タイマーの停止
    clearInterval(timer);
    $('#timer').css('color','#FFF');
    // ストップボタンの無効化
    $("#stop").prop("disabled", true);
    // 休憩ボタンとリセットボタンの有効化
    $("#rest, #reset").prop("disabled", false);
    // アラームタグの削除
    $("#audio_add").remove();
  }

  // リセットボタンのクリックイベントの定義
  function reset(){
    $("#reset").click(function(){
      hour = 0;
      min = 25;
      sec = 0;
      $("#timer").html("00:25:00")
      clearInterval(timer)
      $(this).prop('disabled', true);
      $("#pause,#stop,#start").remove()
      // スタートボタンを挿入
      $(this).before(`  <button name="button" type="button" class="button__start button-time" id="start">
                          <i class="fas fa-play"></i>
                        </button>`)
      $('#rest').prop('disabled', false);
      // スタートボタンのクリックイベントの呼び出し
      start();
    });
  }

  // 休憩ボタンのクリックイベントの定義
  function rest(){
    $("#rest").click(function(){
      // 表記を5分に変更
      $('#timer').html("00:05:00");
      $('#timer').css('color', '#FFAAFF')
      // タイマーの初期値を5分の物に変更
      hour = 0
      min = 5
      sec = 0
      timer = setInterval(countdown, 1000);
      $('#start,#stop').remove();
      $("#reset").before(`<button name="button" type="button" class="button__stop button-time" id="stop">
                            <i class="fas fa-stop"></i>
                          </button>`);
      $('#rest').prop('disabled', 'true');
      stop();
    })
  }
  // カウントダウン関数
  function countdown(){
    sec -= 1;
  
    if (sec < 0) {
      if(min == 0 && hour == 0 ){
        // 時も分も秒も0の時
        clearInterval(timer)
        console.log("終わり！閉廷！")
        $('#timer').html("00:00:00");
        $(".audio").prepend(`<audio autoplay="autoplay" src="/assets/alert-69440d0564764ecd4633a475dbbb750194bf7bf69a575893935855f1e2886b5d.mp3" id="audio_add"></audio>`)
        $("#reset").before(`<button name="button" type="button" class="button__stop button-time" id="stop">
                              <i class="fas fa-stop"></i>
                            </button>`);
        stop();
        $("#start,#pause").remove();
        // ストップのボタンをクリック、あるいは5秒経過した時の動作を記述
        setTimeout(function(){
          stopmotion();
        },5000);
        return false
      }
      else if(min == 0 && hour > 0){
        // 時が0でなく、分と秒が0の時
        hour -= 1;
        min = 59;
        sec = 59;
      }
      else if(min > 0){
        min -= 1;
        sec = 59;
      }
    };
    // 0埋め
    sec_number = ('0' + sec).slice(-2);
    min_number = ('0' + min).slice(-2);
    hour_number = ('0' + hour).slice(-2);
  
    $('#timer').html(hour_number + ':' +  min_number + ':' + sec_number);
  }

  // スタートとリセットと休憩のクリックイベントをデフォルトで呼び出す
  start();
  reset();
  rest();

});