import request from "../utils/request.js";

export function loginServer(data) {
    return request.post("login", data)
}

export function getInfoByNameServer(data) {
    return request.get("user", data)
}

export function changePasswordServer(data) {
    return request.patch("user/NewPassword", data)
}