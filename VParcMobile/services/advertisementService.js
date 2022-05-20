import axios from "axios";

const log = () =>{
    console.log(process.env.BASE_URL);
}

const getAll = async () =>{
    log();
    let advertisements = [{}];
    await axios.get(process.env.BASE_URL + '/advertisement')
        .then(
            (response)=>{
                advertisements = response.data.data.result;
                
            }
        )
        .catch(
            (error)=>{
                advertisements = error.response.data
            }
        )
    return advertisements;
}

const createAdvertisement = async (advertisement) =>{
    log();
    let response = [{}];
    await axios.post(process.env.BASE_URL + '/advertisement', advertisement)
        .then(
            (responseApi)=>{
                response = responseApi.data;
            }   
        )
        .catch(
            (error)=>{
                response = error.response.data;
            }
        )
    return response
}

const deleteAdvertisement = async (advertisement) =>{
    log();
    let response = {};
    let id = advertisement._id
    await axios.delete(process.env.BASE_URL + '/advertisement/' + id)
        .then(
            (responseApi)=>{
                response = responseApi;
            }
        )
        .catch(
            (error)=>{
                response = error.response.data;
            }
        )
    return response;
}

const updateAdvertisement = async (advertisement)=>{
    log();
    let response = {};
    let id = advertisement._id;
    await axios.put(process.env.BASE_URL + '/advertisement/' + id, advertisement)
        .then(
            (responseApi)=>{
                response=responseApi;
            }
        )
        .catch(
            (error)=>{
                response = error.response.data;
            }
        )
    return response;
}

const getAdFromUser = async(id) => {
    log();
    let adsFromUser = [];
    await getAll().then(
        (advertisements)=>{
            advertisements.map(
                (ad)=>{
                    if(ad.userId === id){
                        adsFromUser.push(ad);
                    }
                }
            )
        }
    )
    return adsFromUser;
}
const getAdvertisement = async(id) =>{
    log();
    let response;
    await axios.get(process.env.BASE_URL+'/advertisement/'+id).then(
        (res) =>{
            response=res;
        }
    ).catch(err => console.log(err));
    return response.data.data.result[0];
}

const uploadImage = async(id, image)=>{
    log();
    let response;
    const imgBody = new FormData();
    imgBody.append("image", image.file);
    await axios.post(process.env.BASE_URL + '/advertisement/image?id='+id,imgBody,{
    }).then(res=>{
        response =res;
    }).catch(err=>{
        console.log(err.response);
    });
    return response;
}



export {getAll, deleteAdvertisement, updateAdvertisement, createAdvertisement, getAdFromUser, uploadImage, getAdvertisement};
