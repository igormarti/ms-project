import axios from 'axios';

class UserService{

    async getUserByID(id){
        const resp = await axios.get(`http://ms-users:3002/users/${id}`);

        if(resp.data.length==0) throw new Error('Erro ao tentar processar o usuário.');

        if(resp.data.status==false) throw new Error('Usuário não encontrado.');

        return resp.data.user
    }

}

export default new UserService();