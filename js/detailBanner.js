        $(function () {
            var i = 0;
            var uls = $(".scroll");
            var lis = $(".scroll a").innerWidth()+20//20是左右padding和左右各1像素边框
            var ulw = $('.scroll a').length*lis;
            let a=0;
            $('.next').click(function () {
                i=i+220;
                //判断轮播图
                if (i >=ulw-uls.innerWidth()) {
                    i = ulw-uls.innerWidth() + 20; //40为ul的父元素大盒子的左右padding
                    $('.scroll').css({left: -i+"px"}) ;//保证无缝轮播，设置left值
                };
                $('.scroll').animate({left: -i});


            })

            // 上一个按钮
            $('.prev').click(function () {
                if(i>0){
                    i= -i + 220;
                }else if(i<0){
                    i = i + 220;
                }
                let num = Math.abs(i);
                if (num <=(ulw%220)) {
                    i=0;
                    $('.scroll').css({left: i});
                }
                $('.scroll').animate({left: i});

            })
        })