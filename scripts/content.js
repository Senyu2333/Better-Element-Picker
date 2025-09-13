const overlay= document.createElement('div')
overlay.style.cssText=
    `
        position:fixed;
        z-index:9999;
        background:linear-gradient(135deg, #48bb78 0%, #38a169 100%);
        pointer-events:none;
        top:0;
        left:0;
        width:0;
        height:0;
        `
document.body.appendChild(overlay)
document.addEventListener('mouseover', function (e) {
    const info = {
        Tag: e.target.tagName,
        Class: e.target.className,
        Id: e.target.id,
    };
    
    const rect = e.target.getBoundingClientRect();
    overlay.style.top = rect.top + 'px';
    overlay.style.left = rect.left + 'px';
    overlay.style.width = rect.width + 'px';
    overlay.style.height = rect.height + 'px';
    overlay.style.display = 'block';
    
    chrome.runtime.sendMessage({ type: 'INFO', data: info });
});


