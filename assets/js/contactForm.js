/**
 * Created by Linus on 15-4-2016.
 */

$(function() {
    var form = $('#contactForm');
    var formMessages = $('#contactFormMessage');

    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            $(formMessages).text(response);

            $(form).hide();
        })
        .fail(function(data) {
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            }
            else {
                $(formMessages).text('An error occured. Could not sent the message.');
            }
        });
    });
});