var jsonData = [{"customer_no":1,"name":"Florette","phone":"725-316-0636","email":"fhordell0@google.ca","gender":"Female"},
{"customer_no":2,"name":"Tallulah","phone":"304-778-6674","email":"tabdie1@lulu.com","gender":"Female"},
{"customer_no":3,"name":"Aurelea","phone":"688-572-9521","email":"acrippill2@gizmodo.com","gender":"Female"},
{"customer_no":4,"name":"Delbert","phone":"197-383-9557","email":"dmackonochie3@wiley.com","gender":"Male"},
{"customer_no":5,"name":"Orran","phone":"829-578-9926","email":"owiggam4@cbc.ca","gender":"Male"},
{"customer_no":6,"name":"Noelani","phone":"381-597-9514","email":"ncrowne5@biblegateway.com","gender":"Female"},
{"customer_no":7,"name":"Bernadina","phone":"439-697-3484","email":"bmcramsey6@harvard.edu","gender":"Female"},
{"customer_no":8,"name":"Brunhilde","phone":"574-171-2569","email":"bavrahamoff7@over-blog.com","gender":"Female"},
{"customer_no":9,"name":"Randie","phone":"625-785-7136","email":"rfeeham8@umich.edu","gender":"Female"},
{"customer_no":10,"name":"L;urette","phone":"255-469-2109","email":"lsoutherill9@so-net.ne.jp","gender":"Female"},
{"customer_no":11,"name":"Lilli","phone":"278-789-9831","email":"lphilippsona@wisc.edu","gender":"Female"},
{"customer_no":12,"name":"Kristyn","phone":"390-470-8831","email":"kwickettb@google.cn","gender":"Female"},
{"customer_no":13,"name":"Reamonn","phone":"514-486-8044","email":"rkingswellc@yale.edu","gender":"Male"},
{"customer_no":14,"name":"Pyotr","phone":"915-842-6431","email":"pmintod@wordpress.com","gender":"Male"},
{"customer_no":15,"name":"Mervin","phone":"548-957-8225","email":"mmacgraithe@si.edu","gender":"Male"},
{"customer_no":16,"name":"Angele","phone":"348-946-2703","email":"anottramf@time.com","gender":"Female"},
{"customer_no":17,"name":"Goldi","phone":"313-563-0264","email":"gapthorpeg@earthlink.net","gender":"Female"},
{"customer_no":18,"name":"Valaree","phone":"300-382-8382","email":"vcolbertsonh@meetup.com","gender":"Female"},
{"customer_no":19,"name":"Eduard","phone":"571-643-6543","email":"eclueri@deviantart.com","gender":"Male"},
{"customer_no":20,"name":"Alex","phone":"446-221-8893","email":"apoyntonj@rediff.com","gender":"Male"},
{"customer_no":21,"name":"Dayna","phone":"478-662-1787","email":"dpidwellk@pen.io","gender":"Female"},
{"customer_no":22,"name":"Mollee","phone":"517-597-0752","email":"mdarcol@mail.ru","gender":"Female"},
{"customer_no":23,"name":"Roderich","phone":"423-590-6358","email":"rallansm@ucoz.com","gender":"Male"},
{"customer_no":24,"name":"Cilka","phone":"752-579-7391","email":"comearan@unesco.org","gender":"Female"},
{"customer_no":25,"name":"Gorden","phone":"239-447-9863","email":"gpostano@uol.com.br","gender":"Male"},
{"customer_no":26,"name":"Elliott","phone":"493-825-4727","email":"ezolinip@newsvine.com","gender":"Male"},
{"customer_no":27,"name":"Godiva","phone":"337-492-3088","email":"ggommeyq@miitbeian.gov.cn","gender":"Female"},
{"customer_no":28,"name":"Conan","phone":"741-153-9690","email":"cbladonr@stumbleupon.com","gender":"Male"},
{"customer_no":29,"name":"Auria","phone":"939-141-8559","email":"alindhes@php.net","gender":"Female"},
{"customer_no":30,"name":"Ray","phone":"193-441-4674","email":"rroizint@canalblog.com","gender":"Male"}];

var titles = ['customer_no', 'name', 'phone', 'email', 'gender'];

$(document).ready(function () {
    var $table = $('<table />').attr('border', '1');
    var $tr = $('<tr />');
    titles.forEach(function (o) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);

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
    $(this).css('background', 'red');
}

function mouseoutFunc() {
    $(this).css('background', '');
}