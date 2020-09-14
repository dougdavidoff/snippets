var myStorage = window.localStorage

var dougDavidoff = {
    firstName: 'Doug',
    lastName: 'Davidoff',
    location: 'CT'
}



localStorage.setItem('doug', JSON.stringify(dougDavidoff))

var  fetchedDoug = JSON.parse(localStorage.getItem('doug'))

setTimeout(function(){
    console.log(fetchedDoug)
}, 1000)