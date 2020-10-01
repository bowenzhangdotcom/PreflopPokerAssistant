
export const fetchData = async (inputChartType, inputHeroPosition, inputVillianPosition) => {
    let username = 'user';
    let password = 'pass';
    let url = `http://localhost:8080/api/getChartRange/?chartType=${inputChartType}&heroPosition=${inputHeroPosition}&villianPosition=${inputVillianPosition}`
    let authString = `${username}:${password}`
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(authString))
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: headers,
        });
        let data = await response.json();
        return data[0];
    } catch (error) {
        console.log(error);
    }
};