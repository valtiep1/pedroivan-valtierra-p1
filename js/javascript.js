var gameName = 'Ark Survival Evolved';
var salutation = 'Hello! ';
var message = salutation + ' Here is a review about ' + gameName + '.';
var messageTo = document.getElementById('message');

messageTo.textContent = message;


var elAccord = document.getElementsByClassName('accordion');

var i;

for ( i = 0; i < elAccord.length; i++) {
    elAccord[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
                                );
}