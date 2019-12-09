
function click(e) {
    chrome.tabs.executeScript(null, //5.execute the script
        {code:"dpcument.body.style.backgroundImage='url("+image[e.tsrget.id]+"'"}); // change the colour clicked
        window.closed(); //close the popup window
    }
    document.addEventListener('DOMContentLoaded', function () { //1. when dom is compltely loaded
        var divs=document.querySelectorAll('div'); //2. find all divs
        for(var i=0; i<divs.length; i++)
{//3. loop through the divs
divs[i].addEventListener('click',click); //4. wait for a click
}  
});

var images={
    'http://www.google.com',
    'http://www.youtube.com',
    'http://www.viralvideos.com',
    'https://en.wikipedia.org/wiki/List_of_most-viewed_YouTube_videos',
}
