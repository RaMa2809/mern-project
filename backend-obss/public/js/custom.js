$(document).ready(function (){
  const toastroptions = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "200",
    "hideDuration": "300",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  const submitRegistration = function(form) {
    toastroptions.onHidden = function (){
      return window.location.href = '/login';
    }

    $.ajax({
      method:'post',
      url : 'http://localhost:3001/v1/auth/register',
      data : form.serialize(),
      success: (data) => {
        console.log(data)
        toastr.success("You are now registered, Please login..!!",'Operation Successful',toastroptions)
      },
      error:(data)=>{
        toastr.error(data.responseJSON.message)
      }
    }).catch(function (e){
      console.error('something went wrong', e.responseJSON)
    })
  }
  const registerForm = $('#RegisterForm')
  const registrationHandler = (event) => {

    registerForm.validate({
      errorClass: 'text-danger font-weight-normal',
      submitHandler: async (form,event) => {
        event.preventDefault();
        console.log('submitHandler called.',registerForm.serialize())
        await submitRegistration(registerForm)
      },
      errorPlacement: function(error, element) {
        error.insertAfter(element.parent());
      },
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6,
        },
        confirm_password: {
          required: true,
          equalTo: '[name="password"]'
        },
        terms: {required: true},
      },
      messages: {
        name: "Please specify your name",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        password: {
          required: "Password is required.",
          minlength: "Password must be minimum 6 digits long"
        }
      },
      highlight: function(element) {
        $(element).addClass('border border-danger');
      },
      unhighlight: function(element) {
        $(element).removeClass('border border-danger');
      },

    })
  }

  $("#registerSubmit").on('click',registrationHandler)
})
