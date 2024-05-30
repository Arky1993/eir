// API リファレンス：https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';

import { session } from 'wix-storage';
import wixWindow from 'wix-window';

$w.onReady(function () {

    /*
    	setTimeout(function () {	//モバイルアクセス時のみの表示画面

    		if(wixWindow.formFactor === "Mobile"){      
    			wixLocation.to('https://www.a-design.online/mobilehome');
    		}
    	}, 7500);
    */
    
    //「見てもらえる」
    $w("#vectorImage14").onViewportEnter((event) => {
        $w('#line1').show('float', { duration: 800, direction: 'left' });
    });

    //Wixとは？
    $w("#vectorImage8").onViewportEnter((event) => {
        $w('#vectorImage10').show('fade');
        $w('#text38').show('fade');
    });

    //ご相談ください
    $w("#vectorImage12").onViewportEnter((event) => {
        $w('#vectorImage13').show('fade');
        $w('#text40').show('fade');
    });

    //プロフ
    $w("#Section1RegularSubtitle1").onViewportEnter((event) => {
        $w('#Section1RegularTitle1').show('roll', { duration: 1500 });
    });

});