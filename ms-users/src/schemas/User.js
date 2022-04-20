import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import {v1 as uuidv1} from 'uuid';
import crypto from 'crypto';

const UserSchema = new Schema(
    {
        name:{
            type: String,
            trim:true,
            required:true
        },
        email:{
            type: String,
            trim:true,
            required:true
        },
        status: {
            type: Boolean,
            default: true
        },
        hashed_password:{
            type:String,
            required:true
        },
        salt:String,
    },
    { 
        toJSON: { getters: true }
    }
);

UserSchema.virtual('password')
.set(function(password){
    //Create a variable temporary called _password
    this._password = password
    //Generate timestamp
    this.salt = uuidv1();
    //EncryptPassword
    this.hashed_password = this.encryptPassword(password)
}).get(function(){
    return this._password
})

//method
UserSchema.methods = {
    authenticate:function(pass){
        return this.encryptPassword(pass)===this.hashed_password
    },
    encryptPassword:function(password){
        if(!password)return""
        try{
            return crypto.createHmac('sha256',this.salt)
            .update(password).digest('hex')    
        }catch(err){
            return ''
        }
    }
}

export default model("User", UserSchema);