!function () {
    window.onload = function () {
        let duration = 130
        let isopen = true
        let useCss = document.querySelector('.usecss')
        let prevcode = document.querySelector('.prevcodeinner')
        let write_timer
        let talkTimer
        let csscode = `
/*亲爱的果晶晶同学：  ლ(°◕‵ƹ′◕ლ)
  
  嘿嘿 我是干爹，

  但是今天我有一个新的身份！

  我是丘比特的弟弟： “丘~~干爹！”  ヾ(๑╹◡╹)ﾉ"
  
  木错啦！是那个超级超级喜欢小朋友的丘~~干爹！
  
  我猜你一定认识一个小孩 
  那个叫：[皮卡丘] 的家伙，
  
  不过，告诉你哈  我和他没关系，
  我比它帅多啦！

  而且告诉你一个秘密！

  我是小朋友的头号大粉丝，就是那个“Big Fan”!
  
  没错！是Big Fan！  ヽ(ﾟ∀ﾟ)ﾒ(ﾟ∀ﾟ)ﾉ (◕ᴗ◕✿)
  
  为了证明我是小朋友粉丝，
  
  我会破例奉上小朋友肖像一张，
  
  就让你瞅瞅干爹的厉害！
  ❤❤❤
  ❤
  ❤
  */
/*接下来马上出场的是小朋友鼻子*/

.nose {
    border: 11px solid red;
    border-color: black transparent transparent transparent;
    border-radius: 9px;
    left: calc(50% - 11px);
    top: 28px;
}

/*  快过来 瞅瞅你的大眼睛
  
  它可是干爹亲亲过的呢*/

.eye {
    background-color: #2e2e2e;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid black;
}

/*哇哦❤❤小朋友眼睛好亮啊！ 
  
  有星星在里面~
  你瞅*/

.eye::before {
    background-color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 5px;
    top: 1px;
    border: 1px solid #000;
}

/*嗯哼 小朋友的眼睛好看吧*/

.eye.left {
    left: calc(50% - 25px - 90px);
}
.eye.right {
    right: calc(50% - 25px - 90px);
}

/*嘿嘿，还有腮红呢*/

.blusher {
    background-color: #fc0d1c;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 2px solid #000;
    top: 70px;
}
.blusher.left {
    left: calc(50% - 34px - 140px);
}
.blusher.right {
    right: calc(50% - 34px - 140px);
}

/*看这迷人的上嘴唇！*/
.upperLip {
    background-color: #fee433;
    width: 80px;
    height: 20px;
    border: 2px solid black;
    top: 50px;
}
.upperLip.left {
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    left: calc(50% - 80px);
    transform: rotate(-15deg);
}
.upperLip.right {
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    right: calc(50% - 80px);
    transform: rotate(15deg);
}


/*还有甜甜可爱的嘴巴❤❤❤木嘛*/

.lowerLip {
    background: #990513;
    width: 140px;
    height: 600px;
    border: 2px solid #000;
    border-radius: 50%;
    bottom: 0;
}
.lowerLip::after {
    bottom: -120px;
    background: red;
    width: 100px;
    height: 200px;
    left: calc(50% - 50px);
    border-radius: 50%/20%;
}

/*好啦，这就是今天的小朋友，是不是好好看，好可爱！


  诶？
  
  奇怪
  
  今天怎么这么冷啊！
  
  噢完蛋，秀过头了，
  
  把皮给忘家里啦………………
  
  稍~~~~
  等~~~~
*/
.show{background-color:#fee433;}
`
        let csscode2 = `
		
		
/*哇塞！这才是小朋友的完全体❤
  
  重申一遍！
  
  这可不是皮卡丘，因为它没有毛毛的
  
  是和它一样可爱的小朋友！

  它的名字是赖皮大王！
  
  赖皮大王！！！
  
  好了，我秀完了，
  
  我走啦  拜拜咯
  
  啦啦啦~~  骑上我心爱的小摩托~

  它永远不会堵……
  
  啥？？
  
  你还想看？
  
  那你要不要奖励干爹一个ლ(°◕‵ƹ′◕ლ)
  
  ╭(╯^╰)╮
  
  那好吧 允许你免费再看几秒，

        3

        2

        1

  小朋友走啦，拜拜！
  巴啦啦乌黑拉忽小朋友消失 变！！
*/
.wrapper{display:none;}


/*额。。。糟糕，皮又落下了
……*/

.show{background:#fff;}
.mytext{display:block;} 

  拜拜咯 
  木嘛ლ(°◕‵ƹ′◕ლ)蹭一个亲亲O(∩_∩)O~      
    
	
  嗯哼？
  
  你怎么还不走？
       ……
    
   
  快走啦，这里没东西啦！
       ……
    
   
  哼 小朋友烦人虫！
  你是要跟我耗下去吗？
  	   ……
       
    
   
  那好吧 看你这么执着
       ……
  
  *就送你一个大惊喜吧*
      
	  不许呼吸
	     
      噢不好意思
	  
	  屏主呼吸！
         3  
         2 
         1
*/
`
    let lovetext = `
	

/*亲爱的果晶晶小朋友 ：

  
  干爹觉得好幸运 好幸运
  
  好开心 可以陪着小朋友，可以给小朋友讲好多
  好多悄悄话！

  今天是小朋友的生日，

  其实干爹期待了好久，

  但还是有点难过不能见到小朋友，
  
  小朋友不许不开心！！！！
  
  答应小朋友要补回来一个生日啦~ 
  
  会有一个棒棒的小蛋糕！
  
  快 笑一个！  O(∩_∩)O哈哈~
  
  今天送小朋友一个代码式的罗曼蒂克，

  哈哈哈 不出意外的话小朋友还没见过吧
  
  好想好想小朋友啊 抱抱你！

  祝小朋友生日快乐！
  天天快乐
  从早上起床快乐到晚上进被窝！
  
  把地球上所有好好吃的全部吃光光
  而不胖胖！
  
  身体棒棒  不许不开心！
  
  要每天想想那些可爱的大盘鸡
  
  可爱的牛肉饭
  
  可爱的寿司
  
  可爱的仟吉
  
  可爱的泡芙
  
  可爱的干爹鹅(*╹▽╹*)(ღ˘⌣˘ღ)
  
  小朋友要每天心情都要美美的！
  痘痘全部都会好哒
  
  干爹想要陪小朋友好久好久好久好久好久好久好久

  我才不管，小朋友永远是最可爱的
  最最最好看的鹅
  
  不对
  是最最最最好看的小孩儿
  
  想要牵牵爪子
  抓抓头发~
  
  
  小朋友5岁啦！ლ(′◉❥◉｀ლ)  ٩(๑❛ᴗ❛๑)۶  
  
  
  木嘛~（づ￣3￣）づ╭❤～
  
  
  真的走咯！
  
  ( ﾟдﾟ)つBye
                   
				   ---爱小朋友的干爹mua! (*╯3╰)
*/
    `
        clickControl()
        writeCode(csscode, talk, function () { writeCode(csscode2, function () { showHeart() }) })

        function writeCode(add_code, callBack, callBack2) {
            let n = 0
            write_timer = setTimeout(function timer() {
                n++
                useCss.innerHTML += add_code.slice(n - 1, n)
                prevcode.innerHTML += add_code.slice(n - 1, n)
                prevcode.scrollTop = prevcode.scrollHeight
                if (n < add_code.length) {
                    write_timer = setTimeout(timer, duration)
                } else {
                    callBack && callBack()
                    callBack2 && callBack2()
                }
            }, duration)
        }

        function talk(callBack) {
            window.clearInterval(talkTimer)
            talkTimer = setInterval(() => {
                if (isopen) {
                    $('.wrapper-lowerlip').removeClass('open').addClass('close')
                    isopen = false
                } else {
                    $('.wrapper-lowerlip').removeClass('close').addClass('open')
                    isopen = true
                }
            }, 500)
            callBack && callBack()
        }

        function showHeart() {
            $('.rectangle .rectange-wrapper div>div>div').each(function () {
                $(this).css({
                    // position: 'relative',
                    // top: '-200px',
                    width: '0px',
                    height: '0px',
                    opacity: 0
                });
                var wait = Math.floor((Math.random() * 3000) + 1);
                $(this).delay(wait).animate({
                    // top: '0px',
                    width: '30px',
                    height: '30px',
                    opacity: 1
                }, 1000);
            })
            setTimeout(function(){writeCode(lovetext,showText)},5000)
        }

        function showText(){
            $('.mytext').attr('style','color:#000;')
        }

        function clickControl() {
            $('.control').on('click', 'button', function (event) {
                let $btn = $(event.currentTarget)
                let speed = $btn.attr('data-speed')
                console.log(speed)
                $btn.attr('class', 'clicked').siblings().attr('class', 'unclick')
                switch (speed) {
                    case 'slow':
                        duration = 150
                        break
                    case 'normal':
                        duration = 120
                        break
                    case 'fast':
                        duration = 80
                        break
                    case 'end':
                        $btn.prop('disabled',true)
                        clearInterval(write_timer)
                        useCss.innerHTML = csscode
                        prevcode.innerHTML = csscode
                        prevcode.scrollTop = prevcode.scrollHeight
                        talk()
                        writeCode(csscode2, function () { showHeart() })
                        break
                }
            })
        }
    }

}.call() 