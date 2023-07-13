import request from './../utils/request';
const BASE_URL = "https://quanlycudan.azurewebsites.net/api";

export function getAllNotificationServicesService(payload) {
    return request(`${BASE_URL}/Notifications/get-all`, {
        method: "POST",
        data: payload,
    });
};