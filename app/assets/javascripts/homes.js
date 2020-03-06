$(function(){
  // ログインのこちらをクリックするとログインフォームを消し、新規登録画面を呼び出す
  $(".today-sub").click(function(){
    $(".login").fadeOut("normal",function(){
      $(".login").css("display","none")
    });
    setTimeout(function(){
      $(".signup").fadeIn("slow",function(){
      $(".signup").css("display","block")
    })
    },400);
  });
  // 新規登録のこちらをクリックすると新規登録画面を消し、ログインフォームを呼び出す
  $(".already-sub").click(function(){
    $(".signup").fadeOut("normal",function(){
      $(".signup").css("display","none")
      });
      setTimeout(function(){
        $(".login").fadeIn("slow",function(){
        $(".login").css("display","block")
      })
      },400);
    });

});