const fs=require('fs')
const sqlite=require('sqlite3')

class DB{
    constructor(name){
        this.db=new sqlite.Database(name);
        if(!fs.existsSync(name)){
            fs.openSync(name,'w')
        }
    }

    //创建表结构
    createTable(sql){
        //此方法的回调不是异步回调。在该回调中调度的所有数据库语句将被序列化运行，即一个接一个地执行
        this.db.serialize(()=>{
            this.db.run(sql,(err)=>{
                if(err){
                    console.log(`创建表结构失败了${err}`)
                    return
                }
                console.log('create table success')
            })
        })
    }

    //插入一条或者多条的数据
    insertData(sql,datas){//datas默认是数组的格式
        this.db.serialize(()=>{
            //预执行绑定指定参数的SQL语句，返回一个Statement对象,Statement对象是可以复用的，避免了重复编译sql语句
            let statement=this.db.prepare(sql);
            try{
                datas.forEach((item,index)=>{
                    statement.run(item)
                })
            }catch(err){
                console.log(`插入数据失败了${err}`);
            }

        })
    }
    //编辑更新数据
    updateData(sql){
        this.db.serialize(()=>{
            this.db.run(sql,(err)=>{
                if(err){
                    console.log(`更新数据失败了${err}`);
                    return
                }
                console.log('数据更新成功')
            })
        })
    }
    //删除数据
    deleteData(sql){
        this.db.serialize(()=>{
            this.db.run(sql,(err)=>{
                if(err){
                    console.log(`数据删除失败了${err}`);
                    return
                }
                console.log('数据删除成功')
            })
        })
    }
    //查询一条数据
    findOneData(sql,callback){
        this.db.serialize(()=>{
            this.db.get((sql,(err,data)=>{
                if(err){
                    console.log(`查询数据失败了${err}`);
                    return
                }
                callback&&callback(data)
            }))
        })
    }
    //查询多条数据
    findManyData(sql,callback){
        this.db.serialize(()=>{
            this.db.all(sql,(err,datas)=>{
                if(err){
                    console.log(`查询多条数据失败了${err}`);
                    return
                }
                callback&&callback(datas)
            })
        })
    }
    //关闭数据库
    closeDB(sql){
        this.db.serialize(()=>{
            this.db.run(sql,(err)=>{
                if(err){
                    console.log(`数据库关闭失败${err}`);
                    return;
                }
                console.log('数据库关闭成功')
            })
        })
    }
}

export default DB;