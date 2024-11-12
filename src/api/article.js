import request from './request';

export function getAllArticle() {
  return request({
    url: '/article/list/',
    method: 'GET',
  });
}

export function getArticleById(id) {
  return request({
    url: `/article/${id}`,
    method: 'GET',
  });
}