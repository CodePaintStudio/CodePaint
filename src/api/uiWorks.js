import request from './request';

export function getAllWorks(){
  return request({
    url: '/work/list',
    method: 'GET',
  });
}
