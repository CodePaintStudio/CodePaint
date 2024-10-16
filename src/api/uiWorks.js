import request from './request';

export function getAllWorks(){
  return request({
    url: '/work/list',
    method: 'GET',
  });
}

export function getWorkById(id){
  return request({
    url: `work/${id}`,
    method: 'GET',
  });
}
