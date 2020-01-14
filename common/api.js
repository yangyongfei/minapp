import http from '@/utils/http.js'
import {post,get} from '@/utils/http.js'


export const articleList = params => get('/article/list', params)

const  api = {
	articleList
}

export default api