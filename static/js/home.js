$(document).ready(function(){


    $("#facebook").click(function(){
        window.open('https://www.facebook.com/profile.php?id=100009281947149');
    })


    $("#git").click(function(){
        window.open('https://github.com/taidavis1');
    })

    $("#foxv_shop").click(function(){
        window.open('https://www.facebook.com/foxvcomvn');
    })

    $("#phone").hover(function(){
        $("#phone_number").text("(425)-520-0692");
        }, function(){
            $("#phone_number").text("Phone Number");
    });

    $("#youtube").click(function(){
        window.open('https://musicconverted.thagi3.com/');
    });
    $("#resume").click(function(){
        window.open('/static/resume/Resume (1).pdf' , '_blank');
    });
    
    $("#thagi_shop").click(function(){
        
        window.open('https://www.thagi3.com');

    });
});
