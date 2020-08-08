$(document).ready(function() {
    $('.modal').modal();
    $('.tabs').tabs();

    $("#modalsign").click(function() {
        var modalemail = $("#modalemail").val();
        $("#emails").val(modalemail);
        $("#login_email").val(modalemail);

    });

    var data = {};

    $("#loginsubmit").click(function() {
      data={};
        var emails = $("#login_email").val();
        var passwords = $("#login_pwd").val();
        data['emails'] = emails;
        data['passwords'] = passwords;
        data['type'] = "login";


        datapass = JSON.stringify(data);
        console.log(datapass);
        $.ajax({
            type: "POST",
            async: false,
            url: "php/index.php",
            data: {
                'mydata': datapass,
            },
            success: function(result) {
                console.log(result);
                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);
                if (result.msg == "logged in") {
                    window.close();
                    

                }
                else{
                     M.toast({html: 'Email/Password Invalid!'});
                }
            }
        });
    });
    var datasign = {}
    $("#signsubmit").click(function() {
      datasign={};
        var emailsign = $("#emails").val();
        var firstsign = $("#firstname").val();
        var lastname = $("#lastname").val();
        var passsign = $("#signpwd").val();
        var copypass = $("#cpassword").val();
        var mobilesign = $("#mobiles").val();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var mob = /^[1-9]{1}[0-9]{9}$/;
        if(mobilesign.length>10 || mobilesign.length<10)
        {
          M.toast({html: 'Enter Valid Mobile Number!'});  
        }
        else if(mob.test(mobilesign)==false)
        {
             M.toast({html: 'Enter Valid Mobile Number!'});
        }
        else if(passsign!=copypass)
        {
             M.toast({html: 'You copied the password wrong'}); 
        }
        else if(passsign.length<8){

             M.toast({html: 'Password too short'}); 
        }
        else if(reg.test(emailsign) == false)
        {
            M.toast({html: 'Enter Valid Email'}); 
        }
        else{
        datasign['emailsign'] = emailsign;
        datasign['firstsign'] = firstsign;
        datasign['passsign'] = passsign;
        datasign['lastsign'] = lastname;
        datasign['copypass'] = copypass;
        datasign['mobilesign'] = mobilesign;
        datasign['type'] = "signup";



        datasign = JSON.stringify(datasign);

        $.ajax({
            type: "POST",
            async: false,
            url: "php/index.php",
            data: {
                'mydata': datasign,
            },
            success: function(result) {
                   console.log(result);
                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);
             
                if (result.msg == "erroremailmobile") {
                 M.toast({html: 'Email and Mobile already used!'});
               }
                 else if(result.msg=="erroremail")
                 M.toast({html: 'Email already used!'});
                 else if(result.msg=="errormobile")
                 M.toast({html: 'Mobile already used!',classes: 'round'});
                 else if(result.msg=="inserted")
                window.close();


               else
                M.toast({html: 'Please try again'});


                }
        });
    }
    });


});