import { request} from '@/utils/request.js'

export function getList() {
    return request({
        url: '/Home/GetHomeListPage',
        method: 'GET',
    })
}

export function getSwipers() {
    return request({
        url: '/Home/GetHomeSwiper',
        method: 'GET',
    })
}