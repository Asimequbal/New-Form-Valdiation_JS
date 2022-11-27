function  ReportLogin(){
    let UserName = document.querySelector('#fullName').value
    let UserNameLength = UserName.length

    let userEmail = document.querySelector('#EmailId').value
    let emilIdFormat =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    let loginPasword = document.querySelector('#user_pasword').value
    let paswordlength = loginPasword.length

  if (UserNameLength <5){
    document.querySelector('.error_message').innerText = 'Minimum 5 Character'
  }else if(!userEmail.match(emilIdFormat)){
    document.querySelector('.error_message').innerText= 'This is not Valid Email'
  }else if(paswordlength <=11){
    document.querySelector('.error_message').innerText= 'Password is too Short'
  }
  else{
    document.querySelector('.error_message').innerText = ''
    document.querySelector('.success_message').innerText = 'successfully Submitted'
  } 
    
}
