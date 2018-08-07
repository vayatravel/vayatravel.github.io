// validate contact form
$("#contactForm").on("submit", function(){
    $("#contactForm").ajaxSubmit({
        type:"POST",
        data: $(form).serialize(),
        url:"../inc/process.php",
        success: function() {
            $('#contactForm :input').attr('disabled', 'disabled');
            $('#contactForm').fadeTo( "slow", 0.15, function() {
                $(this).find(':input').attr('disabled', 'disabled');
                $(this).find('label').css('cursor','default');
                $('#contact-success').fadeIn();
            });
            alert("sucess!")
        },
        error: function() {
            $('#contactForm').fadeTo( "slow", 0.15, function() {
                $('#contact-error').fadeIn();
                alert("error");
            });
        },
        complete: function(){
            alert("complete");
        }
    });
})
