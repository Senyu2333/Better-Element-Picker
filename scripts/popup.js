chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const { Tag, Class, Id } = request.data;
        if (request.type === 'INFO') {
            const domInfo = document.getElementById('domInfo');
            domInfo.innerHTML = `
                <div class="info-item">
                    <span class="info-label">🏷️ 标签</span>
                    <span class="info-value">${Tag || '无'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">🎨 类名</span>
                    <span class="info-value">${Class || '无'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">🆔 ID</span>
                    <span class="info-value">${Id || '无'}</span>
                </div>
            `;
        }
    }
);