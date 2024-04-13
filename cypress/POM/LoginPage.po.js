class CreateAcc {

    OrangeHRMLogo(){

        return 'img[alt="company-branding"]'
    }
    Username(){

        return 'input[name="username"]'
    }
    password(){

        return 'input[type="password"]'
    }

    LoginButton(){

        return 'button[type="submit"]'
    }

    Loginerror(){

        return 'Invalid credentials'
}
}

const newLogin = new CreateAcc
export default newLogin