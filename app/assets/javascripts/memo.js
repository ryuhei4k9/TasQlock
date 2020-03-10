$(function(){
  function buildHTML(memo){
    let html = `<div class="memo-content">
                  <div class="memo-head">
                    <div class="memo-title">
                      ${memo.created_at}
                    </div>
                    <div class="memo-cross">
                      <a href="/memos/${memo.id}" data-method="delete" class="black cross" data-remote="true" rel=”nofollow”>☓</a>
                    </div>
                  </div>
                  <div class="memo-description">
                    ${memo.memo}
                  </div>
                </div>`
    return html;
  }
  // メモの送信を非同期させる記述
  function memosubmit(){
    $('#new_memo').off('submit');
    $('#new_memo').on('submit',function(e){
      e.preventDefault();
      let formData = new FormData(this);
      let url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(data){
          let html = buildHTML(data);
          $('.memo-contents').append(html);
          memodelete();
          $('.btn-memo').prop('disabled', false);
          $('#memo_memo').val("");
          $(".memo-contents").animate({
            scrollTop: $(".memo-contents")[0].scrollHeight
          });
        },
        false: function(){
        console.log("失敗しました")
        }
      });
    });
  };
  // メモの削除を非同期させる記述
  function memodelete(){
    $('a.cross').off('click');
    $('a.cross').on('click', function(e){
      e.preventDefault();
      let url = $(this).attr('href')
      let element = $(this).parents('.memo-content')
      $.ajax({
        url: url,
        type: "DELETE",
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(){
          element.remove();
        },
        false: function(){
        console.log("失敗しました")
        }
      })
    })
  }
  // メモの投稿、削除をデフォルトで呼び出し状態とする
  memosubmit();
  memodelete();
})