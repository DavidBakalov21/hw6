function runXHR() {
    let text=document.getElementById('data');
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.github.com/users/DavidBakalov21')
    xhr.onreadystatechange = function(params) {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            text.textContent=xhr.responseText
        
        }
    }
    xhr.send()
}
function runXHRError() {
    let text=document.getElementById('data');
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.github.com/users/DavhgfidBakalov21')
    xhr.onreadystatechange = function(params) {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            text.textContent=xhr.responseText
        }else{
            alert("Can't access url");
        }
    }
    xhr.send()
}
