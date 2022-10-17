import User from '../models/Task';
/**
 * 
 * @param {User} user 
 */
export default function validateData(user){
    let error ='Sucesso'
   error= validateName(user.username)
   error= validateAge(user.userage)
   console.log(error)
    return error
}
function validateName(username){
    if(username==''){
        return 'Username está vazio'
    }
    return
}
function validateAge(userage){
    if(userage==''){
        return 'Userage está vazio'
    }
    return
}