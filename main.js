searchTerapeak = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.ebay.com/sh/research?dayRange=365&sorting=-avgsalesprice&tabName=SOLD&keywords=" + query});
 };

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
     id: "1",
     title: "Terapeak this!",
     contexts:["selection"],  // ContextType
    });
})

chrome.contextMenus.onClicked.addListener(searchTerapeak);
