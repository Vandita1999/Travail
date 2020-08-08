$(document).ready(function(){
	 $(document).on("click", "#logout_button", function() { //destroying session on logging out
        $.ajax({
            type: "POST",
            async: false,
            url: "php/destroy_session.php",
            data: {
                'mydata': "",
            },
            success: function(result) {

                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);

                console.log(result);
                if (result.msg == "session destroyed") {
                    window.location = "index.html";
                }
            }
        });
    });
});