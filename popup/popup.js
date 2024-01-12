document.getElementById('filter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var filter = document.getElementById('filter-input').value;
    addFilterToList(filter);
});

chrome.runtime.onMessage.addListener(function(message) {
    alert('URL: ' + message.url);
    addFilterToList(message.url);
});

function addFilterToList(filter) {
    var li = document.createElement('li');
    li.textContent = filter;
    li.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });
    if (filter !== ''){
        document.getElementById('filter-list').appendChild(li);
    }
    document.getElementById('filter-input').value = '';
}