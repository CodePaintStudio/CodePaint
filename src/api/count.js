import request from './request';

export default function countPost() {
  return request({
    url: '/count',
    method: 'POST',
  });
}
