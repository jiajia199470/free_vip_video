import {
    System as SystemConfig
} from '../config';
module.exports = {
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
  },
  api: {
    domain: 'http://v.qq.com/x/search/?q=',
    movie: '',
    television: ''
  },
  tengxun: {
    domain: 'http://v.qq.com',
    movie: 'http://v.qq.com/x/list/movie?itype=-1',
    tv: 'http://v.qq.com/x/list/tv?iyear=1&sort=18',
    tvDetail: 'https://v.qq.com/detail/b',//例如花不弃详情页：https://v.qq.com/detail/b/brq7blajvjhrcit.html
  },
  domain: SystemConfig.API_server_type+SystemConfig.API_server_host,
  port: SystemConfig.API_server_port
}
