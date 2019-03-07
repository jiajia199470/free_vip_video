(function (window, $) {
    var baseUrl = 'https://www.myxin.top/jx/api/?url=';
    var videoUrl = $('#vplay').attr('data-src');
    var playUrl = '';
    var $vplay = $('#vplay');
    var piframe = {
        init: function () {
            var self = this;
            console.log($('.api:first'));
            self.changePort();
            self.videoPlay();

            if($(window).width()<=544){
                $('#ckvip').css('height','200px');
            }
        },
        videoPlay: function () {
            $('.api:first').trigger('click');
        },
        changePort: function () {
            $(document).on('click', '.api', function () {
                var me = $(this);
                var uid = me.find('input').attr('id');
                if (+uid === 1) {
                    baseUrl = 'https://www.myxin.top/jx/api/?url=';
                } else if (+uid === 2) {
                    baseUrl = 'https://jx.wslmf.com/?url=';
                } else if (+uid === 3) {
                    baseUrl = 'https://api.bbbbbb.me/jx/?url=';
                }
                $vplay.attr('src', baseUrl + videoUrl);
                $('.api').each(function () {
                    $(this).removeClass('active');
                });
                me.addClass('active');
            });
        },
    };
    piframe.init();
})(window, jQuery);