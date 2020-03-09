$(function(){
  function buildHTML(memo){
    let html = `<div class="memo-content">
                  <div class="memo-head">
                    <div class="memo-title">
                      ${memo.created_at}
                    </div>
                    <div class="memo-cross">
                      <a href="/memos/${memo.id}" data-method="delete" class="black">☓</a>
                    </div>
                  </div>
                  <div class="memo-description">
                    ${memo.memo}
                  </div>
                </div>`
    return html;
  }
  $('#new_memo').on('submit', function(e){
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
        console.log("成功なり")
        let html = buildHTML(data);
        $('.memo-contents').append(html);
        $('.btn-memo').prop('disabled', false);
        $('#memo_memo').val("");
      },
      false: function(){
      console.log("失敗しました")
      }
    })
  })
})