import User from "../schemas/User.js";

class UserService {

    async saveUser(user){

        const userExists = await this.getUserByEmail(user.email);
        if(userExists) throw new Error('User already exists');
        const docUser = new User(user);
        return await docUser.save();
    }

    async getUserByEmail(email){
        return await User.findOne({email});
    }

    async getUserByID(id){
        const user = await User.findById(id);

        if(!user) throw new Error("User not found");

        return {
            id: user._id,
            name: user.name,
            email: user.email,
        }
    }

    async singIn(user){
        const {email,password} = user;

        const userExists = await this.getUserByEmail(email);

        if(!userExists) throw new Error("User not found");

        //Authenticate with method of the user model
        if(!userExists.authenticate(password)) throw new Error("Email and password d'ont match");

        return {
            id: userExists._id,
            name: userExists.name,
            active:userExists.status, 
            email
        };
    }
}

export default new UserService();