const User = require('../models/user');

module.exports = {
  getAll: async(req, res)=>{
    let finalResult = {
      data:[],
      success:false,
      error:null,
      message:''
    }
    try{
      const UserData = await User.find({});
      finalResult.data = UserData;
      finalResult.success = true;
      finalResult.message = 'Data user berhasil didapatkan';
      res.send(finalResult);
    }catch(e){
      finalResult.error = e;
      finalResult.message = 'Data user gagal didapatkan';
      res.send(finalResult);
    }
  }
}
