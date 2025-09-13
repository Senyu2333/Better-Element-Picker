chrome.runtime.onMessage.addListener(
    function (request,sender,sendResponse){
        const {Tag,Class,Id}=request.data
        if(request.type==='INFO'){
            document.getElementById('domInfo').innerHTML=
            `
                <p>Tag:${Tag}</p>
                <p>Class:${Class}</p>
                <p>ID:${Id}</p>
            `
        }
    }
)