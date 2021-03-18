zodiacs = {
    taurus: 'People born under the Taurus zodiac sign are often incredibly dedicated, reliable and dependable. Above all things, they value their sense of security and stability.  After Aries brings its fiery energy, it is Taurus that lays down the foundations and follows through. They tend to be rather stubborn and dislike change. When they settle with a routine that they like, it can take much effort to get them to change. ',
    aries: 'Those born under the Aries zodiac sign often have an exciting and enthusiastic energy. They often seek new and challenging adventures that can push their limits. They are driven, ambitious and curious, and aries tends to have a strong sense of justice. They love competition, in all its forms. They are generally quite optimistic, and they love being placed in leadership positions.', 
    gemini: 'Those born under the Gemini zodiac sign enjoy socializing and love surrounding themselves with people. They are ruled by the planet Mercury, and so they are never happier than when they are sharing their ideas and communicating with the people around them. They enjoy chit-chat and tend to have expression and communication very high on their list of priorities. Sometimes their love for sharing themselves with others, and their never-ending list of ideas can make them seem nervous, excited, and sometimes even manic.',
    cancer: 'Those born under the zodiac sign Cancer need to be needed. They have an great desire to feel loved and appreciated in every part of their lives. This is needed so that they can develop a sense of security and identity. To the Cancer zodiac sign, their sense of home is very important to their feeling of safety and comfort. They find it rather difficult to achieve unless they feel safe in their home. They are talented at developing home environments for people that are close to them - in both an emotional and physical sense. ',
    leo: 'Leos tend to have almost a royal air about them. Their planetary ruler is the Sun, and so they are talented at bringing warmth, life and light into the relationships that are important to them. Many Leos will have a large group of friends that adore them. They have a kind of natural charisma which often makes other signs gravitate towards them. Like their planetary ruler, Leos love to be at the center of attention and they deeply appreciate compliments and even flattery. Their happy and outgoing attitude towards life makes them pleasurable to be around. ',
    virgo: 'Those born under the Virgo zodiac sign have capable, organized and analytical minds, which often makes them a pleasure to chat with. Even when they have rather fantastic stories, the charming way they tell them can make those stories convincing. Virgos are curious people, and they have a natural gift for research - whether it comes to assignments, or even people. They also often have great memory and a talent for intuition. They make for excellent team members in both work and social situations. They love to collaborate, although their sometimes critical nature can annoy others when those criticisms are not understood.',
    libra: 'The zodiac sign Libra is thrives when their needs of balance, justice, and stability are met. They are charming creatures that somehow always surround themselves with a sense of beauty and harmony. Admittedly, some of them can go to extremes searching for that harmony - which can make their situations unreasonable or unhealthy. Their ruling planet is Venus meaning that Libras are nurturing, caring, and they can make great defenders of the downtrodden. Sometimes, they can be shy if they find difficulties in coming out of their shell and letting their guard down. Despite their more introverted side they still love a good debate.',
    scorpio: 'Unfortunately, those born under the Scorpio zodiac sign are often misunderstood. They are quite bold, with intense personalities and feelings that hide underneath their cool exterior. They are capable people that can complete great and massive projects with control and confidence. Their intensity when approaching a situation means that they can surmount almost all obstacles if they can truly put their mind to the task. Many Scorpios have an unshakable focus when they need to call on it. However, they are often secretive, seeming withdrawn and uninterested, when they are actually keenly observing.',
    sagittarius: 'The Sagittarius zodiac sign often gains the reputation of the philosopher among their fellow zodiac signs. They do have a great ability to focus, but this may be surprising since many of them love exploring and wandering the world, tasting all the pleasures of life. From an early age, they must learn how to channel their energy or else they risk stretching themselves out too thin going in too many directions. They often are hasty individuals and lack patience. When they encounter failure they can sometimes make a sudden comeback, much to the surprise of others. While they are loyal friends, they may find it hard to commit as this can run counter to their desire for freedom and expansion. ',
    capricon: "Those born under the Capricorn zodiac sign are talented at applying their keen intelligence and ambition to practical matters.  Stability and order are important to them - and this makes them good organizers. Their goals are often lofty, and they achieve them slowly - but purposefully, and systematically. They are gifted with a sharp intuition, although they can be rather secretive about what they perceive. They are patient with themselves - they have confidence that they can accomplish all their goals if they follow their step-by-step plan. They are responsible people that often take the heavy burden of others - whether willingly, or just because they are so capable. However, they find it difficult to share their own troubles and can struggle with depression if they don't learn how to express their feelings.",
    aquarius: "Aquarius often comes off as an oddball - they have quirky personalities and quietly go about accomplishing their goals in quiet, and unorthodox ways. Oftentimes, just because Aquarius chooses to take the path less traveled, the results of their eccentric methods are surprisingly effective. They are the humanitarians of the zodiac, taking up banners for the greater good of humanity. Many of them are also easy going and their peculiarity alongside their curious nature make them fast friendships. Sometimes, if they don't strive to motivate themselves, they can succumb to laziness. Many are often gifted with a strong sense of art and poetry.",
    pisces: "Aquarius often comes off as an oddball - they have quirky personalities and quietly go about accomplishing their goals in quiet, and unorthodox ways. Oftentimes, just because Aquarius chooses to take the path less traveled, the results of their eccentric methods are surprisingly effective. They are the humanitarians of the zodiac, taking up banners for the greater good of humanity. Many of them are also easy going and their peculiarity alongside their curious nature make them fast friendships. Sometimes, if they don't strive to motivate themselves, they can succumb to laziness. Many are often gifted with a strong sense of art and poetry.",
}






var name = document.getElementById('name');
var dob = document.getElementById('dob');
var check = document.getElementById('check');

var result = document.getElementById('result');

var def_zodiac = "You have a great zodiac personality"

check.addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;

    result.innerHTML = name;

    document.querySelector('.card-body').innerHTML = assign_zodiac();

    showResult();
}

)

function showResult(){
    document.querySelector('.print').style.display = 'block';
}

// process date of birth
var my_dob;
function getDate(){
    let dob = document.getElementById('dob').value;
    dob = dob.split("-")

    let my_dob = Number(dob[1]);
    return my_dob;
}

// determine date of birth
var colDate;
function sel_zodiac(){
    let colDate = getDate()
    return colDate;
}

// assign zodiac
function assign_zodiac(){
    var dob = sel_zodiac();
    if(dob === 1) {
        return zodiacs.aries;
    }
    if(dob === 2) {
        return zodiacs.taurus;
    }
    if(dob === 3) {
        return zodiacs.gemini;
    }
    if(dob === 4) {
        return zodiacs.cancer;
    }
    if(dob === 5) {
        return zodiacs.leo;
    }
    if(dob === 6) {
        return zodiacs.virgo;
    }
    if(dob === 7) {
        return zodiacs.libra;
    }
    if(dob === 8) {
        return zodiacs.scorpio;
    }
    if(dob === 9) {
        return zodiacs.sagittarius;
    }
    if(dob === 10) {
        return zodiacs.capricon;
    }
    if(dob === 11) {
        return zodiacs.aquarius;
    }
    if(dob === 12) {
        return zodiacs.pisces;
    }
    else{
        return "Date of Birth not recognised";
    }
}