// ki.setConfig({
//     baseUrl: "lib/",
//     paths: {
//         jquery: "jquery.js",
//         underscore: "underscore.js"
//     }
// });

// vk.use(["jquery"], function() {
//     // rgba(0,0,0);
//     var color = ["rgba(", Math.floor(Math.random() * 255), ",", Math.floor(Math.random() * 255), ",", Math.floor(Math.random() * 255), ")"];

//     setTimeout(function() {
//         $(".background").css({
//             position: "fixed",
//             top: "0px",
//             bottom: "0px",
//             left: "0px",
//             right: "0px",
//             background: color.join("")
//         });
//     }, 3000);
// });

vk.use(["jquery", "underscore"], function() {
    // rgba(0,0,0);
    alert(123);
    var color = ["rgba(", Math.floor(Math.random() * 255), ",", Math.floor(Math.random() * 255), ",", Math.floor(Math.random() * 255), ")"];

    $(".background").css({
        position: "fixed",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        background: color.join("")
    });

    window._.each([1, 2, 3, 4, 5], function(item) {
        console.log(item * 33);
    });
});
