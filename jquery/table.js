var jsonData = [{ "id": 1, "first_name": "Jennee", "last_name": "O' Kelleher", "email": "jokelleher0@va.gov", "gender": "Female" },
{ "id": 2, "first_name": "Boonie", "last_name": "Bayliss", "email": "bbayliss1@usda.gov", "gender": "Male" },
{ "id": 3, "first_name": "Sarena", "last_name": "Portress", "email": "sportress2@gov.uk", "gender": "Female" },
{ "id": 4, "first_name": "Bevvy", "last_name": "Rebillard", "email": "brebillard3@marriott.com", "gender": "Female" },
{ "id": 5, "first_name": "Collie", "last_name": "Perkinson", "email": "cperkinson4@canalblog.com", "gender": "Female" },
{ "id": 6, "first_name": "Anastassia", "last_name": "Blannin", "email": "ablannin5@imdb.com", "gender": "Female" },
{ "id": 7, "first_name": "Gery", "last_name": "Craft", "email": "gcraft6@seesaa.net", "gender": "Male" },
{ "id": 8, "first_name": "Tremain", "last_name": "Cowill", "email": "tcowill7@comcast.net", "gender": "Male" },
{ "id": 9, "first_name": "Kathie", "last_name": "Muzzi", "email": "kmuzzi8@reverbnation.com", "gender": "Female" },
{ "id": 10, "first_name": "Gian", "last_name": "Moncrieffe", "email": "gmoncrieffe9@howstuffworks.com", "gender": "Male" },
{ "id": 11, "first_name": "Dave", "last_name": "Beddis", "email": "dbeddisa@gravatar.com", "gender": "Male" },
{ "id": 12, "first_name": "Waylin", "last_name": "Lanfare", "email": "wlanfareb@biglobe.ne.jp", "gender": "Male" },
{ "id": 13, "first_name": "Gil", "last_name": "Olech", "email": "golechc@godaddy.com", "gender": "Male" },
{ "id": 14, "first_name": "Abbye", "last_name": "Wrixon", "email": "awrixond@taobao.com", "gender": "Female" },
{ "id": 15, "first_name": "Rip", "last_name": "Eastes", "email": "reastese@posterous.com", "gender": "Male" }];

var titles = ['id', 'first_name', 'last_name', 'email', 'gender'];

$(document).ready(function () {
    var $table = $('<table />').attr('border', '1');
    var $tr = $('<tr />');
    titles.forEach(function (o) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);
    //데이터 영역
    jsonData.forEach(function(o) {
        $tr = $('<tr />').mouseenter(mouseenterFunc)
                         .mouseout(mouseoutFunc);
        titles.forEach(function(f) {
            $tr.append($('<td />').text(o[f]));
        })
        
        $table.append($tr);
    });

    $('#show').append($table);
})

function mouseenterFunc() {
    $(this).css('background', 'yellow');
}

function mouseoutFunc() {
    $(this).css('background', '');
}