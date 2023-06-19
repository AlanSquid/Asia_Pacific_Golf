$(document).ready(function () {
  $('#myTable').DataTable({
    // 中文化
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/zh-HANT.json',
    },
    // 分頁器
    paging: true,
    // 滾軸頁面
    scrollY: 400,
    // 關鍵字搜尋
    searching: false,
    // 排序
    ordering: false,
    // 開啟伺服器端分頁
    // serverSide: true,
  })
})
