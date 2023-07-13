import request from './../utils/request';
const BASE_URL = "https://quanlycudan.azurewebsites.net/api";

export function getAllListBookingServicesService(payload) {
    return request(`${BASE_URL}/services/get-all-booking`, {
        method: "POST",
        data: payload,
    });
};