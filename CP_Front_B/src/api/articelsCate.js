import request from "../utils/request.js";

export function getArticleListServer () {
    return request.get("/article")
}

export function deleteArticleServer (id) {
    return request.delete(`/article/${id}`)
}