fetch('https://whatyearisit-eight.vercel.app/date')
.then(response => response.json())
.then(data=> {
    document.querySelector('#year').innerHTML+= data.year
})