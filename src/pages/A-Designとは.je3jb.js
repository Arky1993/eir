// API リファレンス：https://www.wix.com/velo/reference/api-overview/introduction
import { timeline } from 'wix-animations';
import  wixWindow  from 'wix-window';

$w.onReady(() => {

    //title
    $w('#section3').onViewportEnter( (event) => {

        $w('#columnStrip12').show('slide', { duration: 1200, delay: 0 });

    });


    if(wixWindow.formFactor === "Desktop"){

        /*****案内セクションアニメーション*****/
            const revealTimeline = timeline()   //図形セット
                .add($w('#Leftbutton'), { duration: 1500, x: -160, scale: 1.3, easing: 'easeOutBack' })
                .add($w('#Rightbutton'), { duration: 1500, x: 160, scale: 1.3, easing: 'easeOutBack' }, 0)
                .add($w('#Centorbutton'), { duration: 1500, x: 0, scale: 1.3, easing: 'easeOutBack' }, 0)
          
            $w('#columnStrip16').onViewportEnter( (event) => {   //アニメーション
                
                $w('#image4').hide('fade',{ duration: 300});
                
                revealTimeline.play();
                
                $w('#Leftbutton').show('fade',{duration : 500});
                $w('#Rightbutton').show('fade',{duration : 500});
                $w('#Centorbutton').show('fade',{duration : 500});
            });

        /*****低コストアニメーション*****/
            const costTimeline = timeline()     //図形セット
                .add($w('#imgCost'), { duration: 850, x: -480, scale: 1.0 })

            $w('#section5').onMouseIn(() => {   //アニメーション
                
                costTimeline.play();
                
                costTimeline.onStart( () => {

                    $w('#text33').show("fade");

                });
            });

        /*****スピード力アニメーション*****/
            const speedTimeline = timeline()    //図形セット
                .add($w('#imgSpeed'), { duration: 850, x: -480, scale: 1.0 })

            $w('#section8').onMouseIn(() => {   //アニメーション

                speedTimeline.play();

                speedTimeline.onStart(() => {

                    $w('#text34').show("fade");
                });
            });

        /*****チャレンジアニメーション*****/
            const chalTimeline = timeline()
                .add($w('#imgChar'), { duration: 850, x: -480, scale: 1.0 })

            $w('#section9').onMouseIn(() => {

                chalTimeline.play();
                
                chalTimeline.onStart(() => {
                    $w('#text35').show("fade");
                });
            });

    }
    else{ //mobile

        /*****案内セクションアニメーション*****/
        const revealTimeline = timeline()   //図形セット
            .add($w('#Leftbutton'), { duration: 1500, x: -60, scale: 1, easing: 'easeOutBack' })
            .add($w('#Rightbutton'), { duration: 1500, x: 60, scale: 1, easing: 'easeOutBack' }, 0)
            .add($w('#Centorbutton'), { duration: 1500, x: 0, scale: 1, easing: 'easeOutBack' }, 0)

        $w('#text30').onViewportEnter( (event) => {  //アニメーション
                $w('#image4').hide('fade',{ duration: 300});
                
                revealTimeline.play();
                
                $w('#Leftbutton').show('fade',{duration : 500});
                $w('#Rightbutton').show('fade',{duration : 500});
                $w('#Centorbutton').show('fade',{duration : 500});
        }); 

        /*****低コストアニメーション*****/
        const costTimeline = timeline() //図形セット
            .add($w('#imgCost'), { duration: 850, y: -120, scale: 1.0 })

        $w('#columnStrip13').onViewportLeave( () => {  //アニメーション

            costTimeline.play();

            costTimeline.onStart(() => {

                $w('#text33').show("fade");

            });

        });

        /*****スピード力アニメーション*****/
            const speedTimeline = timeline()    //図形セット
                .add($w('#imgSpeed'), { duration: 850, y: -120, scale: 1.0 })

            $w('#columnStrip20').onViewportEnter(() => {   //アニメーション

                speedTimeline.play();

                speedTimeline.onStart(() => {

                    $w('#text34').show("fade");
                });
            });

        /*****チャレンジアニメーション*****/
            const chalTimeline = timeline()
                .add($w('#imgChar'), { duration: 850, y: -120, scale: 1.0 })

            $w('#columnStrip22').onViewportEnter(() => {   //アニメーション

                chalTimeline.play();
                
                chalTimeline.onStart(() => {
                    $w('#text35').show("fade");
                });
            });
    }
 

    
});