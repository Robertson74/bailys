﻿
// this is to handle email submission
$('#signUpForm').submit(function (event) {
    event.preventDefault();
    var $form = $(this),
        url = $form.attr('action');
    var posting = $.post(url, { email: $('#email').val() });
    posting.done(function (data) {
        console.log(data);
    });
});
