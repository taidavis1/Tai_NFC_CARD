$(document).ready(function(){


    $("#facebook").click(function(){
        window.open('https://www.facebook.com/profile.php?id=100009281947149');
    })


    $("#git").click(function(){
        window.open('https://github.com/taidavis1');
    })

    $("#foxv_shop").click(function(){
        window.open('https://foxvshop.herokuapp.com/');
    })

    $("#phone").hover(function(){
        $("#phone_number").text("(408)-315-1453");
        }, function(){
            $("#phone_number").text("Phone Number");
    });

    $("#youtube").click(function(){
        window.open('/static/resume/Resume (1).pdf' , '_blank');
    });
    $("#resume").click(function(){
        window.open('');
    });
    
    $("#thagi_shop").click(function(){
        
        window.open('https://www.thagi3.com');

    });
});
