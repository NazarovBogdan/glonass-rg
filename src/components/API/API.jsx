import * as axios from 'axios';



const instanse = axios.create({
    baseURL: "http://glonass.orangedm.agency/backend"
})


export const setItemsCategory = (params) => {
    return instanse({
        method: 'post',
        url: 'setItemsCategory.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const deleteItemsCategory = (params) => {
    return instanse({
        method: 'post',
        url: 'deleteItem.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const setItemsAPI = (params) => {
    return instanse({
        method: 'post',
        url: 'test.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const setItemChangeModal = (params) => {
    return instanse({
        method: 'post',
        url: 'admin_change_modal.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const addItems = (params) => {
    return instanse({
        method: 'post',
        url: 'addItem.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const changeNameItem = (params) => {
    return instanse({
        method: 'post',
        url: 'changeName.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const changeDescItem = (params) => {
    return instanse({
        method: 'post',
        url: 'changeDesc.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const changeImgItem = (params) => {
    return instanse({
        method: 'post',
        url: 'changeImg.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const changeCharItem = (params) => {
    return instanse({
        method: 'post',
        url: 'changeRecord.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const deleteChar = (params) => {
    return instanse({
        method: 'post',
        url: 'deleteChar.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const setUser = (params) => {
    return instanse({
        method: 'post',
        url: 'setUser.php',
        data: params
    }).then(response => {
        return response.data
    })
}