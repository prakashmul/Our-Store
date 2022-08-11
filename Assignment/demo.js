function validate(){
    //alert('form validation')

    var name,email,phone,message;

    name = document.getElementById('name').value;
    email= document.getElementById('email').value;
    phone= document.getElementById('phone').value;
    message = document.getElementById('message').value;

    if(name == '' || email == '' || phone == '' || message == ''){

        if(name == ''){
            document.getElementById('nameErr').innerHTML = 'Name is required';
        }

        if(email == ''){
            document.getElementById('emailErr').innerHTML = 'Email is required';
        }

        if(phone == ''){
            document.getElementById('phoneErr').innerHTML = 'Number is required';
        }

        if(message == ''){
            document.getElementById('msgErr').innerHTML = 'Message is required';
        }

        return false;   
    }
    else{
        return true;
    }
}