let path =  process.env.NODE_ENV == "development" ? require('../env/dev.js')  : require('../env/prod.js')

import store from '../store/index.js'
export const request = (options = {}) => {
    return new Promise((resolve, rejects) => {
        handleRequest(options, resolve, rejects)
    })
}

// 发起请求
function handleRequest(options, resolve, reject) {
    const openid = uni.getStorageSync('wx_openid')
	const wId=store.state.WId;//微信公众号
    uni.showLoading({
        title: "加载中"
    });
    if (!openid&&!whiteList(options)) {
        // 执行没有登录的逻辑
        uni.reLaunch({
            url:'/pages/index/info'
        })
        uni.hideLoading()
        return;
    }
    if(whiteList(options)){
        uni.request({
            url:path.baseUrl + options.url,
            method: options.method,
			header: {
				'Content-Type': 'application/json;charset=UTF-8',
				'WId':wId
			},
            data: options.data,
            success: (response) => {
				//失败统一提示
				if(!response.data.Success){
					uni.showToast({
					  icon: 'error',
					  position: 'top',
					  title: response.data.ErrorMessage
					});
					return
				}
				
                return resolve(response)
            },
            fail: (err) => {
                return reject(err);
            },
            complete() {
                uni.hideLoading();
            }
        })
        return
    }
    uni.request({
        url: path.baseUrl + options.url,
        method: options.method,
        header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'WId':wId,
			'OpenId':openid
        },
        data: options.data,
        success: (response) => {
            if(!response.data.Success){
            	uni.showToast({
            	  icon: 'error',
            	  position: 'top',
            	  title: response.data.ErrorMessage
            	});
				return
            }
            return resolve(response)
        },
        fail: (err) => {
            console.log('error', err)
            return reject(err);
        },
        complete() {
            uni.hideLoading();
        }
    })
}

// openid 白名单
function whiteList(config) {
    let list = [
        (config.url == '/Home/GetHomeListPage' && config.method == 'GET'),
        (config.url == '/Home/GetHomeSwiper' && config.method == 'GET')
    ]
    let bol = false
    for (const item of list) {
        if (item) {
            bol = true
        }
    }
    return bol
}