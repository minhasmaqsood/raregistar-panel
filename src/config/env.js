// export const base = 'http://192.168.146.93:4001';
export const base = 'http://raregistar-backend.codecandid.com';

export const config = async () => {
    let token = await  localStorage.getItem('userToken');
    return {
        headers: {
            'Authorization': `${token}`,
            'Accept': "application/json",
        }
    }
}

export const multipartConfig = async () => {
    let token = await  localStorage.getItem('userToken');
    return {
        headers: {
            'Authorization': `${token}`,
            'Accept': "application/json",
            "Content-Type": "multipart/form-data"
        }}

}
