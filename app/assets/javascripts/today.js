$(document).ready(function(){
  $('#date').toDate({
    format : 'Y/m/d/(w) H:i:s'
  });
  $('#time').toDate({
    format : 'H:i:s'
  });
  $('#index').toDate({
    format : '本日はm月d日 W曜日です。今日も一日頑張りましょう！'
  });
  $('#today').toDate({
    format : 'm月d日のスケジュール確認'
  });
  $('example').toDate({
    format : 'Y/m/d'
  });
})