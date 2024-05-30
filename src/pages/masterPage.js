// このファイルのコードはサイトの各ページで読み込まれます
import wixLocation from 'wix-location';
import { session } from 'wix-storage';
import wixWindow from 'wix-window';

let notpage = "https://www.a-design.online/technicaltest";
if (wixWindow.formFactor === "Desktop") {

        if (!session.getItem("firstTimePopupShown")) {
            
            session.setItem("firstTimePopupShown", "yes");
            wixWindow.openLightbox("welcome");
        }   
        //     setTimeout(() => {
        //         $w('#customElement2').hide('slide', { duration: 1100, direction: 'left' });
                
        //     }, 3000);
        //     setTimeout(() => {
        //         $w('#customElement2').collapse();
        //     }, 4800);
        // } else {
        //     $w('#customElement2').collapse();
        // }
    }

$w.onReady(function () {

    // if (wixWindow.formFactor === "Desktop") {

    //     if (!session.getItem("firstTimePopupShown")) {
            
    //         session.setItem("firstTimePopupShown", "yes");
    //         wixWindow.openLightbox("welcome");
    //     }   
    //     //     setTimeout(() => {
    //     //         $w('#customElement2').hide('slide', { duration: 1100, direction: 'left' });
                
    //     //     }, 3000);
    //     //     setTimeout(() => {
    //     //         $w('#customElement2').collapse();
    //     //     }, 4800);
    //     // } else {
    //     //     $w('#customElement2').collapse();
    //     // }
    // }

    if (wixLocation.url == notpage) {
        ///
    } else {
        $w('#header1').onViewportLeave(() => {
            $w('#headerStp').hide();
        });
        $w('#header1').onViewportEnter(() => {
            $w('#headerStp').show();
        });
    }

});