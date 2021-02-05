import JsonP from 'jsonp'
// import axios from 'axios'
export default class Axios {
    static jsonp(options){
        new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function (err,response){
                //to-do
                // debugger;
                if(response.status == 'success'){
                    resolve(response);
                }else {
                    reject(response.message);
                }
            })
        })
    }
}