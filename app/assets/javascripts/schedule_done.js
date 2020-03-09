// $(function(){
//   $('.btn-done').on("click",function(e){
//     e.preventDefault()
//     let url = $(this).parent().attr('action')
//     console.log(url)
//     $.ajax({
//       url: url,
//       type: "POST",
//       processData: false,
//       contentType: false,
//       success: function(){
//         $(this).removeClass().addClass('btn-finish');
//         $(".schedule-content:has(this)").removeClass().addClass('schedule-content-done')
//       },
//       false: function(){
//         console.log("失敗です")
//       }
//     })
//   })
// })