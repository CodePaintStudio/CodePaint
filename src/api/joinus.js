import request from './request';

export function sendFeedback(newFeedback) {
  return request({
    baseURL: '/details/add',
    method: 'POST',
    data: newFeedback,
  })
}