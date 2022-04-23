import UserService from "../services/UserService.js";

class UserController {

    async store(req, res){
        try {
            await UserService.saveUser(req.body);
            return res.status(201).json({
                status:true,
                msg:"User created with success."
            });
        } catch (error){
            return res.json({
                status: false,
                msg: error.message
            })
        }
    }

    async show(req, res) {
        try {
            const {id} = req.params;

            const user = await UserService.getUserByID(id);

            return res.status(201).json({
                status:true,
                user
            });
        } catch (error){
            return res.json({
                status: false,
                msg: error.message
            })
        }
    } 

    async singIn(req, res){
        try {
            const user = await UserService.singIn(req.body);
            return res.json({
                status:true,
                user
            })
        } catch (error){
            return res.json({
                status: false,
                msg: error.message
            })
        }
    }

}

export default new UserController();