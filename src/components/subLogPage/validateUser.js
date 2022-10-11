export const validate = (data , type) =>{

    const errors ={}

    if(type==="SingUp"){
        if(!data.email){
            errors.email = "لطفا ایمیل خود را وارد کنید !";
        }else if(! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
            errors.email ="لطفا ایمیل را به درستی وارد کنید"
        }else{
            delete errors.email ;
        }

        if(!data.confrimPassword){
            errors.confrimPassword = "لطفا تکرار رمز عبور خود را وارد کنید !";
        }
        else if(data.password !== data.confrimPassword){
            errors.confrimPassword= "لطفا تکرا رمز عبور را به درستی وارد کنید !" ;
        }else{
            delete errors.confrimPassword ;
        }
    
        if(data.isAccepted){
            delete errors.isAccepted ;
        }else{
            errors.isAccepted = "در صورت پذیرش قوانین سایت کلیک کنید :)"
        }
    }

    if(!data.name.trim()){
        errors.name= "لطفا نام کاربری را وارد کنید !" ;
    }else{
        delete errors.name ;
    }

    if(!data.password){
        errors.password = "لطفا رمز عبور خود را وارد کنید !";
    }
    else if(data.password.lengh < 8){
        errors.password= "رمز عبور باید حداقل شامل 8 نویسه باشد !" ;
    }else{
        delete errors.password ;
    }
    
   

    return errors

}