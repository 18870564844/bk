module.exports = class User extends require('./model'){


    static login(username,password){
        return new Promise((resolve,reject)=>{
            let sql = 'select id,username from `user` where username = ? and password = ?'
            this.query(sql,[username,password]).then(results=>{
                resolve(results[0])
            }).catch(err=>{
                console.log('登录失败:'+ err.message)
                reject(err)
            })
        })
    }
}