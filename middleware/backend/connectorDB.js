import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool=new pg.Pool({
    database:process.env.PGDATABASE,
    user:process.env.DBCLIENT,
    host:process.env.DBHOST,
    port:process.env.DBPORT,
    password:process.env.DBPASSWORD
})

const addClient=async(data)=>{
    let values=[...Object.values(data)]
    let insertdata=''
    for(let i=0;i<values.length;i++)i==values.length-1?insertdata+=`$${i+1}`:insertdata+=`$${i+1}, `
    let request=`INSERT INTO metal.client_mail (${Object.keys(data)}) values (`+ insertdata+')'
    const client=await pool.connect()
    try{
        await client.query(request,values)
    }catch(err){
        console.log(err)
    }
    finally{
        client.release()
    }
}

export {addClient}