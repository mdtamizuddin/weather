
const noakhali =()=>{
    document.getElementById('spinner').style.display="flex";
    const url = `
    http://api.weatherapi.com/v1/current.json?key=68b1723daf7c4908bef123733220203&q=noakhali&aqi=yes`;
    fetch(url)
    .then(res => res.json())
    .then(data => noakhaliData(data))
}
const noakhaliData=(data)=>{
    document.getElementById('name').innerText=data.location.name;
    document.getElementById('country').innerText=data.location.country;
    document.getElementById('condition').innerText=data.current.condition.text;
    const iconImg = document.getElementById('icon');
    iconImg.setAttribute('src', data.current.condition.icon);
    
    document.getElementById('tempereture').innerText=data.current.temp_c;
    document.getElementById('time').innerText=data.location.localtime;
    document.getElementById('spinner').style.display="none";
}
noakhali();

const searchBtn =()=>{
    document.getElementById('spinner').style.display="flex";
    const api_key =`68b1723daf7c4908bef123733220203`;
    const cityName = document.getElementById('city-input').value;
    const url = `
    http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityName}&aqi=yes`;
    fetch(url)
    .then(res => res.json())
    .then(data => allData(data))
}


    const allData=(data)=>{

            document.getElementById('name').innerText=data.location.name;
            document.getElementById('country').innerText=data.location.country;
            document.getElementById('condition').innerText=data.current.condition.text;
            const iconImg = document.getElementById('icon');
            iconImg.setAttribute('src', data.current.condition.icon);

            document.getElementById('tempereture').innerText=data.current.temp_c;
            document.getElementById('time').innerText=data.location.localtime;
            document.getElementById('spinner').style.display="none";
            document.getElementById('error-message').style.display="none";
            
  
}
{

}
       
