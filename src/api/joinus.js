import request from './request';

export function sendFeedback(newFeedback) {
  return request({
    baseURL: '/api/details/add',
    method: 'POST',
    data: newFeedback,
  })
}