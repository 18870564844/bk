// const mysql = require('mysql')

// module.exprts = class Model {
//     static conn = null

//     static connection(){
//         model.conn = mysql.createConnection({
//             host:'127.0.0.1',
//             user:'root',
//             password:'123456',
//             datebase:'blog'
//         })
//         Model.conn.connect(err=>{
//            if(err){
//                console.log(`数据库连接失败：${err.message}`)
//            } 
//         })
//     }
//     static end(){
//         if(null != Model.conn){
//             Model.conn.end()
//         }
//     }
//     static query(sql,params = []){
//         return new Promise((resolve,reject)=>{
//             this.connection()

//             Model.conn.query(sql,params,(err,results)=>{
//                 if(err){
//                     reject(err)
//                 }else{
//                     resolve(results)
//                 }
//             })
//             this.end()
//         })
//     }
// }

const mysql =require('mysql')

/**
 * 数据模型的基类
*封装了数据库操作
*/
module.exports= class Model{
    //数据库连接对象
    static conn = null

/*
数据库的连接方法

*/ 
static connection(){
    Model.conn = mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'123456',
        database:'blog',
        port:3306
    })
    Model.conn.connect(err=>{
        if(err){
            console.log(`数据库连接失败：${err.message}`)
        }
    })
}
/**
 * 关闭数据库连接
 */
    static end(){
        if(null !=Model.conn){
            Model.conn.end()
        }
    }
    /**通用查询方法
     * @param{string} sql 要执行的sql语句
     * @param{Array} params 给sql语句的占位符进行赋值的参数数组
     * 
     */

    static query(sql,params=[]){
        return new Promise((resolve, reject)=>{
            this.connection()

            Model.conn.query(sql,params,(err,results)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })

            this.end()
        })
    }

}