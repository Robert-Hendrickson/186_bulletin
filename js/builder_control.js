function addAnnouncment(){
    $('.announce-wrapper').append(`<div>
            <input type="text" />
            <input type="text" />
            <span onclick="$(this).parent().remove()">X</span>
        </div>`);
};
function addBuisness(){
    $('.buisness-wrapper').append(`<div>
            <span onclick="$(this).parent().remove()">X</span>
            <input type="text" placeholder="Buisness Header" />
            <textarea></textarea>
        </div>`);
};
function getAnnouncments() {
    let announce_json = {};
    $('.announce-wrapper > div').each(function (index,el) {
        announce_json[`announce_${index + 1}`] = {
            title: el.children[0].value,
            content: el.children[1].value
        };
    });
    return announce_json;
};
function getWardBuisness(){
    let buisness_json = {};
    $('.buisness-wrapper > div').each(function (index,el) {
        buisness_json[`announce_${index + 1}`] = {
            title: el.children[0].value,
            content: el.children[1].value
        };
    });
    return buisness_json;
}
function sendPreviewData(){
    var preview_json = {
        presiding: $('#Presiding input')[0].value,
        conducting: $('#Conducting input')[0].value,
        pianist: $('#Pianist input')[0].value,
        chorister: $('#Chorister input')[0].value,
        openhymn: $('#OpenHymn input')[0].value,
        invocation: $('#Invocation input')[0].value,
        newmembers: $('#new-members-list')[0].value,
        stakebuisness: $('#stake-buisness input')[0].value,
        sacramenthymn: $('#SacramentHymn input')[0].value,
        theme: $('#Theme input')[0].value,
        speaker1: $('#speaker1 input')[0].value,
        speaker2: $('#speaker2 input')[0].value,
        intermediatehymn: $('#IntermediateHymn input')[0].value,
        speaker3: $('#speaker3 input')[0].value,
        closinghymn: $('#ClosingHymn input')[0].value,
        benediction: $('#Benediction input')[0].value,
        week1: {
            date: $('#next-weeks week1').children()[0].innerText,
            content: $('#next-weeks week1').children()[1].value
        },
        week2: {
            date: $('#next-weeks week2').children()[0].innerText,
            content: $('#next-weeks week2').children()[1].value
        },
        week3: {
            date: $('#next-weeks week3').children()[0].innerText,
            content: $('#next-weeks week3').children()[1].value
        },
    }
    if ($('.announce-wrapper > div').length > 0) {
        preview_json.announcments = getAnnouncments();
    }
    if ($('.buisness-wrapper > div').length > 0) {
        preview_json.wardbuisness = getWardBuisness();
    }
    console.log(preview_json);
    window.open('./preview.html?data='+ JSON.stringify(preview_json),'_blank')
};
$(document).ready(function (){
    //todo need to make sure this is set for the next upcoming sunday if not already sunday.
    let today = new Date();
    let time_to_sunday = 0;
    if (today.getDay() != 0 ) {
        time_to_sunday = today.getDay();
    }
    let week1 = new Date(new Date().setDate(today.getDate() + (7 - time_to_sunday)));
    let week2 = new Date(new Date().setDate(today.getDate() + (14 - time_to_sunday)));
    let week3 = new Date(new Date().setDate(today.getDate() + (21 - time_to_sunday)));
    var dateArray = [week1,week2,week3];
    for(i=0;i<dateArray.length;i++){
        document.querySelector(`week${i+1} label`).innerText = `${dateArray[i].getMonth()+1}/${dateArray[i].getDate()}/${dateArray[i].getFullYear()}`;
    };
});