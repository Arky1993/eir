// API リファレンス：https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';

    
$w.onReady(function () {
    //$w('#mobileMenu1').collapse();
    $w('#headerStp').collapse();
    $w('#startmenu').onViewportEnter( (event) => {
        $w('#headerStp').expand();
    });
    $w('#startmenu').onViewportLeave( (event) => {
        $w('#headerStp').collapse();
    });

});