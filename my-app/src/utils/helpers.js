export const getCurrentAge = (date) =>{
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

export default getCurrentAge