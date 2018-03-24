
class MUtil {
    request(param){
        return new Promise((resolve, reject) => {
            $.ajax({
                type        : param.type        || 'get',
                url         : param.url         || '',
                dataType    : param.dataType    || 'json',
                data        : param.data        || null,
                success     : res =>{

                    if(0 === res.status){
                        // 数据请求成功
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }else if(10 === res.status){
                        // 没有合建状态，强制登陆
                        this.doLogin();

                    }else{
                        // 错误状态
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error       : err => {
                    typeof reject === 'function' && reject(err.statusText);
                }

            })
        });
    }
    // 跳转成功
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    // 获取URL参数
    getUrlParam(name){
        // xxx.com?param=123&paraml1=456
        let queryString = window.location.search.split('?')[1] || '';
        let reg         = new RegExp("(^|&)" + name + "=([^&*])(&|$)");
        let result      = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
        // result: ['param=123', '', '123', '&']


    }
    successTips(successMsg){
        alert(successMsg || '操作成功了~~~！');
    }
    // 错误提示
    errorTips(errMsg){
        alert(errMsg || '好像哪里不对了~~~！');
    }
    // 本地存储数据
    setStorage(name, data){
        let dataType = typeof data;
        if(dataType === 'object'){
            // json对象类型
            window.localStorage.setItem(name, JSON.stringify(data));
        }else if(['number', 'string', 'boolean'].indexOf(dataType) >= 0){
            // 基础数据类型
        }else{
            // 其它不支持的类型
            alert('该类型不能用于本地存储');
        }
    }
    // 取出存储内容
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return '';
        }
    }
    // 删除本地存储内容
    removeStorage(name){
        window.localStorage.removeItem(name);
    }

}

export default MUtil;