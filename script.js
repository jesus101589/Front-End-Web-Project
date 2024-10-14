document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');

    function checkEmailMatch() {
        
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must be identical.');

            
            confirmEmail.style.borderColor = 'red';

            
            alert('Email addresses are not identical. Please enter identical email addresses.');
        } else {
            confirmEmail.setCustomValidity('');

            
            confirmEmail.style.borderColor = 'green';

            
            alert('Email addresses match. Verification successful.');


        }
    }

    email.addEventListener('change', checkEmailMatch);
    confirmEmail.addEventListener('change', checkEmailMatch);
});
