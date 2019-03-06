/**
 * 睡眠模拟函数
 * @param  {Number} numberMillis 毫秒
 */
exports.sleep = function(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime)
      return;
  }
}

/**
 * 算出一共有多少页数
 * @param totalRecord
 * @param pageSize 默认就是上面的数量
 * @returns {number}
 */

exports.getTotalPageNum = function (totalRecord, pageSize) {
    return (totalRecord + pageSize - 1) / pageSize;
};
