import request from './request';

export function getActivity() {
  return request({
    url: '/activity?page=1&pageSize=6',
    method: 'GET',
  });
}

export function getRecentActivity() {
  return request({
    url: '/activity/recent',
    method: 'GET',
  });
}

export function getActivityById(id){
  return request({
    url: `/activity/detail?id=${id}`,
    method: 'GET',
  });
}
