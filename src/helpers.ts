
export const fileUpload = async (file:File) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/piero-rolando/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'planeta-interno');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            return null;
        }

    } catch (err) {
        throw err;
    }


    // return url de la imagen
}