(function(window, $) {
  var pagination = {
    init: function() {
      var self = this
      self.loadpage()
    },
    exeData: function(num,type) {
      pagination.loadData(num);
      pagination.loadpage();
    },
    loadData: function(num) {
      $("#PageCount").val(num);
    },
    loadpage: function() {
      var myPageCount = parseInt($("#PageCount").val());
      var myPageSize = parseInt($("#PageSize").val());
      var countindex = parseInt($('#countindex').val());
      $('#pagination').jqPaginator({
        totalPages: myPageCount,
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: countindex,
        first: '<li class="first"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页<i class="arrow arrow3"></i></a></li>',
        last: '<li class="last"><a href="javascript:;">末页(总'+myPageCount+'页)</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
          // console.log(type + ':' + num)
            if (type == "change") {
              pagination.exeData(num, type);
            }
        }
      })
    }
  }
  pagination.init()

})(window, jQuery)