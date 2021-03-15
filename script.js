var zodiac = ['leo', 'aries', 'taurus', 'cancer', 'scorpio'];
var p_zodiac;
function ch_zodiac(){
    return p_zodiac = zodiac[Math.floor(Math.random() * zodiac.length)];
}




var name = document.getElementById('name');
var dob = document.getElementById('dob');
var check = document.getElementById('check');

var result = document.getElementById('result');

var def_zodiac = "You have a great zodiac personality"

check.addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;

    result.innerHTML = name + ": Zodiac Sign: " + ch_zodiac();

    document.querySelector('.card-body').innerHTML = def_zodiac;
}

)

function showResult(){
    document.querySelector('.print').style.display = block;
}