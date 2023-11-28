import axios from 'axios'

export default class PostService {
    static async getAll(limit, page) {
        const response = await axios('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit: limit,
                _page: page,
            }
        }
        )
        return response
    }
}