// イベントが登録されている日にajaxを用いり色付け、画像付けをしたかったがうまく行かず保留

// $(function(){
//   function scheduleNew(){
//     $("#new_schedule").on('submit', function(e){
//       e.preventDefault();
//       let formData = new FormData(this);
//       console.log(formData.get('date'))
//       console.log("はさみ")
//       let url = $(this).attr('action')
//       $.ajax({
//         url: url,
//         type: "POST",
//         data: formData,
//         dataType: 'html',
//         processData: false,
//         contentType: false,
//         success: function(data){
//           // let date = formData.get('date');
//           console.log(data.get('date'))
//           $(`.fc-day[data-date=${date}]`).addClass("sche_exist")
//           $('.sche_exist').css('background', 'rgb(125,125,125)')
//         },
//         false: function(){
//           console.log("失敗しました")
//         }
//       });
//     })
//   }
//   // デフォルトで呼び出し状態とする
//   scheduleNew();
// })



// スケジュール登録の非同期化を目指したがフラッシュメッセージで不具合が発生した為保留とする

// $(function(){
//   function buildHTML(sche){
//     let tag = sche.tag_id
//     switch(tag){
//       case 1: tagname = `<div class="right-schetag__1">${sche.tag_name}</div>`;
//         break;
//       case 2: tagname = `<div class="right-schetag__2">${sche.tag_name}</div>`;
//         break;
//       case 3: tagname = `<div class="right-schetag__3">${sche.tag_name}</div>`;
//         break;
//       case 4: tagname = `<div class="right-schetag__4">${sche.tag_name}</div>`;
//         break;
//       case 5: tagname = `<div class="right-schetag__5">${sche.tag_name}</div>`;
//         break;
//       case 6: tagname = `<div class="right-schetag__6">${sche.tag_name}</div>`;
//         break;
//     }
//     let starttime = sche.starttime.slice(11,16);
//     let finishtime = sche.finishtime.slice(11,16);
//     let html = `<a href="/schedules/${sche.id}/edit">
//                   <div class="right-schedule">
//                     <div class="right-schedule__top">
//                       ${tagname}
//                       <div class="right-sche__time">
//                         ${starttime}
//                         <p>〜</p>
//                         ${finishtime}
//                       </div>
//                     </div>
//                     <div class="right-sche__title">
//                       ${sche.title}
//                     </div>
//                   </div>
//                 </a>`
//     return html;
//   }
//   $('#new_schedule').on('submit', function(e){
//     e.preventDefault();
//     let formData = new FormData(this);
//     let url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false,
//       success: function(data){
//         console.log("成功なり")
//         let html = buildHTML(data);
//         $('.right-schedules').append(html);
//         $('.btn-post').prop('disabled', false);
//         $('#schedule_starttime').val("");
//         $('#schedule_finishtime').val("");
//         $('#schedule_tag_id_1').val("");
//         $('#schedule_title').val("");
//         $('#schedule_description').val("");
//       },
//       false: function(){
//         $('.btn-post').prop('disabled', false);
//       console.log("失敗しました")
//       }
//     })
//   })
// })