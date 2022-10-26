import axios from 'axios';
const API_URL = "http://192.168.1.110:5000/api/v1";

const token = localStorage.getItem('foodie_token');

// export const user_signup = (value) => {
//     return axios.post(API_URL + "/admin/login",value)
// }

export const user_login = (value) => {
    return axios.post(API_URL + "/admin/login", value);
}

export const getFoodType = () => {
    return axios.get(API_URL + "/food/type", { headers: { "Authorization": `Bearer ${token}` } });
}

export const addFoodType = (value) => {
    return axios.post(API_URL + "/food/type", value,{ headers: { "Authorization": `Bearer ${token}` } });
}


export const updateFoodType = (id, value) => {
    return axios.patch(API_URL + `/food/type/${id}`, value, { headers: { "Authorization": `Bearer ${token}` } });
}

export const deleteFoodType = (food_id) => {
    return axios.delete(API_URL + `/food/type/${food_id}`, { headers: { "Authorization": `Bearer ${token}` } });
}



export const getMenuType = (value) => {
    return axios.get(API_URL + "/menu/category", { headers: { "Authorization": `Bearer ${token}` } });
}

export const addMenuType = (value) => {
    return axios.post(API_URL + "/menu/category", value,{ headers: { "Authorization": `Bearer ${token}` } });
}


export const updateMenuType = (id, value) => {
    return axios.patch(API_URL + `/menu/category/${id}`, value, { headers: { "Authorization": `Bearer ${token}` } });
}

export const deleteMenuType = (menu_category_id) => {
    return axios.delete(API_URL + `/menu/category/${menu_category_id}`, { headers: { "Authorization": `Bearer ${token}` } });
}



export const getMenuitem = (value) => {
    return axios.get(API_URL + "/menu/items", { headers: { "Authorization": `Bearer ${token}` } });
}

export const addMenuitem = (value) => {
    return axios.post(API_URL + "/menu/item", value,{ headers: { "Authorization": `Bearer ${token}` } });
}


export const updateMenuitem = (id, value) => {
    return axios.patch(API_URL + `/menu/item/${id}`, value, { headers: { "Authorization": `Bearer ${token}` } });
}

export const deleteMenuitem = (menu_item_id) => {
    return axios.delete(API_URL + `/menu/item/${menu_item_id}`, { headers: { "Authorization": `Bearer ${token}` } });
}

export const getTimeslot = (value) => {
    return axios.get(API_URL + "/time/slot", { headers: { "Authorization": `Bearer ${token}` } });
}

export const addTimeslot = (value) => {
    return axios.post(API_URL + "/time/slot", value,{ headers: { "Authorization": `Bearer ${token}` } });
}


export const updateTimeslot = (id, value) => {
    return axios.patch(API_URL + `/time/slot/${id}`, value, { headers: { "Authorization": `Bearer ${token}` } });
}

export const deleteTimeslot = (time_slot_id) => {
    return axios.delete(API_URL + `/time/slot/${time_slot_id}`, { headers: { "Authorization": `Bearer ${token}` } });
}


export const getPackages = (value) => {
    return axios.get(API_URL + "/package", { headers: { "Authorization": `Bearer ${token}` } });
}

export const addPackages = (value) => {
    return axios.post(API_URL + "/package", value,{ headers: { "Authorization": `Bearer ${token}` } });
}


export const updatePackages = (id, value) => {
    return axios.patch(API_URL + `/package/${id}`, value, { headers: { "Authorization": `Bearer ${token}` } });
}

export const deletePackages = (package_id) => {
    return axios.delete(API_URL + `/package/${package_id}`, { headers: { "Authorization": `Bearer ${token}` } });
}

export const getTodayMenu = (value) => {
    return axios.get(API_URL + "/today/menu?date=2022-10-19", { headers: { "Authorization": `Bearer ${token}` } });
}

export const addTodayMenu = (value) => {
    return axios.post(API_URL + "/today/menu", value,{ headers: { "Authorization": `Bearer ${token}` } });
}


export const updateTodayMenu = (id, value) => {
    return axios.patch(API_URL + `/today/menu/${id}`, value, { headers: { "Authorization": `Bearer ${token}` } });
}

export const deleteTodayMenu = (today_menu_id) => {
    return axios.delete(API_URL + `/today/menu/${today_menu_id}`, { headers: { "Authorization": `Bearer ${token}` } });
}

export const getStaffdetail = (value) => {
    return axios.get(API_URL + "/staff", { headers: { "Authorization": `Bearer ${token}` } });
}

export const addStaffdetails = (value) => {
    return axios.post(API_URL + "/staff", value,{ headers: { "Authorization": `Bearer ${token}` } });
}


export const user_logout = (value) => {
    return axios.post(API_URL + "/", value, {
        headers: { "Authorization": `Bearer ${token}` }
    });
}
