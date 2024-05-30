// API リファレンス：https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

    //title
    $w('#section3').onViewportEnter((event) => {

        $w('#columnStrip12').show('slide', { duration: 1200, delay: 0 });

    });

    //$w('#section14').collapse();
   // $w('#section5').collapse();
});