(function (window, $) {
    var  baseUrl = 'https://www.myxin.top/jx/api/?url=';
    var videoUrl = $('#vplay').attr('data-src');
    var playUrl = '';
    var $vplay = $('#vplay');
    var piframe = {
        init: function () {
            var self = this;
            self.changePort();
            self.videoPlay();

            if($(window).width()<=544){
                $('#ckvip').css('height','200px');
            }
            $(document).on('click','#playAddressBtn',function () {
                videoUrl = $(this).closest('div').find('input').val();
                $vplay.attr('src', baseUrl + videoUrl);
                $(this).text('播放中...');
            })
        },
        videoPlay: function () {
            $('.api:first').trigger('click');
        },
        changePort: function () {
            $(document).on('click', '.api', function () {
                var me = $(this);
                var uid = me.find('input').attr('id');
                if (+uid === 1) {
                    baseUrl ='http://www.vipjiexi.com/tong.php?url=';//高清蓝光
                } else if (+uid === 2) {
                    baseUrl = 'https://jx.wslmf.com/?url=';
                } else if (+uid === 3) {
                    baseUrl = 'https://www.myxin.top/jx/api/?url=';
                }else if(+uid==4){
                    baseUrl ="https://z1.m1907.cn/?jx=";
                }else if(+uid==5){
                    baseUrl ='https://www.wocao.xyz/index.php?url=';//no ad
                }else if(+uid==6){
                    baseUrl = 'https://api.bbbbbb.me/jx/?url=';//  ad
                }
                $vplay.attr('src', baseUrl + videoUrl||$('#playAddress').val());
                $('.api').each(function () {
                    $(this).removeClass('active');
                });
                me.addClass('active');
            });
        },
    };
    piframe.init();
})(window, jQuery);