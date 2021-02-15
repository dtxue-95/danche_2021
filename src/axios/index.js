// import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';
export default class Axios {
    //天气封装的jsonp
    // static jsonp(options){
    //     new Promise((resolve,reject)=>{
    //         JsonP(options.url,{
    //             param:'callback'
    //         },function (err,response){
    //             //to-do
    //             // debugger;
    //             if(response.status === 'success'){
    //                 resolve(response);
    //             }else {
    //                 reject(response.message);
    //             }
    //         })
    //     })
    // }
//封装axios
    static ajax(options){
        // https://www.fastmock.site/mock/a7ca75d7ecc413eb4a0f2ed600ffc80b/mockapi
        let baseApi = 'https://www.fastmock.site/mock/a7ca75d7ecc413eb4a0f2ed600ffc80b/mockapi'
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if(response.status === 200){
                    let res = response.data;
                    if(res.code === 0){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        })
    }
}

