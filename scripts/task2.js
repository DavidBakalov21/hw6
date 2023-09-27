
function show(button){   
    let buttonDate=button.innerText
    let promise = new Promise(function(resolve, reject) {
        fetch('https://api.nasa.gov/planetary/apod?api_key=0maG7qCTmlBLzRvOZDZSOetjxiDpQNL0x8nKdKS6&date=2023-09-'+buttonDate)
        .then(response => {
            if (!response.ok) {
               
                return response.json().then(err => reject(err));
            }
          
            return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
    
    promise.then(function(data){
        document.getElementById('image').src = data.url;
        document.getElementById('par').textContent = data.title;
        document.getElementById('par2').textContent = data.date;
    }).catch(function(error){
       
        alert(error.msg);
    }).finally(function(){
        alert("completed")
        document.getElementById('finallyM').textContent ="completed"
    });



  
}



