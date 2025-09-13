document.addEventListener('mouseover',function (e){
    const info={
        Tag:e.target.tagName,
        Class:e.target.className,
        Id:e.target.id,
    }
    chrome.runtime.sendMessage({type:'INFO',data:info})
    //console.log(e.target);
    })


