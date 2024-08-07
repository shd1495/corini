$("#team").click(function () {
    document.location.href = 'index.html';
});

$("#members").click(function () {
    document.location.href = 'members.html';
});

$("#join").click(function () {
    document.location.href = 'register.html';
});

$("#news").click(function () {
    document.location.href = 'news_list.html';
});

$("#add").click(function () {
    document.location.href = 'news_view.html';
});

$("#back").click(function () {
    document.location.href = 'members.html';
});

$("#back2").click(function () {
    document.location.href = 'news_list.html';
});

$("#update").click(function () {
    document.location.href = '#';
});

$("#delete").click(function () {
    document.location.href = '#';
});

function mbtiCheck(e) {
    e.value = e.value.replace(/[^A-Za-z]/ig, '');
}

function passwordCheck(object){
    if(object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
    }
}