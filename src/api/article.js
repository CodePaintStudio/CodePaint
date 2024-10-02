import request from './request';

export function getAllArticle(){
  return request({
    url: '/article',
    method: 'GET',
  });
}
