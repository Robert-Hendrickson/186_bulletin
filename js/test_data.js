$(document).ready(function (){
    if(document.location.href.match(/localhost/).length || document.location.search.match(/^\?=test/)){
        $('#Presiding input')[0].value = 'presiding',
        $('#Conducting input')[0].value = 'conducting';
        $('#Pianist input')[0].value = 'pianist';
        $('#Chorister input')[0].value = 'chorister';
        $('#OpenHymn input')[0].value = 'openhymn';
        $('#Invocation input')[0].value = 'invocation';
        $('#new-members-list')[0].value = 'welcome new members!';
        $('#stake-buisness input')[0].value = 'stakebuisness';
        $('#SacramentHymn input')[0].value = 'sacramenthymn';
        $('#Theme input')[0].value = 'theme';
        $('#speaker1 input')[0].value = 'speaker1';
        $('#speaker2 input')[0].value = 'speaker2';
        $('#IntermediateHymn input')[0].value = 'intermediatehymn';
        $('#speaker3 input')[0].value = 'speaker3';
        $('#ClosingHymn input')[0].value = 'closinghymn';
        $('#Benediction input')[0].value = 'benediction';
        $('#next-weeks week1').children()[1].value = 'week 1';
        $('#next-weeks week2').children()[1].value = 'week 2';
        $('#next-weeks week3').children()[1].value = 'week 3';
    };
});
