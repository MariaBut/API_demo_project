const get_api_res_btn = document.getElementById('get_api_res_btn')
const api_result = document.getElementById('api_result')
const uiday = document.getElementById('uiday')
const uimonth = document.getElementById('uimonth');

get_api_res_btn.addEventListener('click', getAPI);
    function getAPI(){
        let endPoint = "http://numbersapi.com/" + uimonth.value + "/" + uiday.value + "/date";
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.text())
    .then(data=> {
        api_result.innerHTML = data;
    });
};
