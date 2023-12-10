
export const searchByName = (data, name) => {

    if (name == '') {
        return data;
    }

    const result = data.filter((country) => {
        return country.name.toLowerCase() == name.toLowerCase();
    })


    if (result.length != 0) {
        return result;
    }

    return null;

}



export const searchByRegion = (data, region) => {
    if (region == 'all') {
        return data;
    } else {
        return data.filter((country) => {
            return country.region.toLowerCase() == region;
        })
    }

}