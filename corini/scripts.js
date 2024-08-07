$("#team").click(function () {
    const indexURL = "/";
    window.history.pushState(null, "", indexURL);
    window.location.href = 'corini/index.html';
});

$("#members").click(function () {
    const membersURL = "/member";
    window.history.pushState(null, "", membersURL);
    window.location.href = 'corini/members.html';
});

$("#join").click(function () {
    const registerURL = "/join";
    window.history.pushState(null, "", registerURL);
    window.location.href = 'corini/register.html';
});

$("#news").click(function () {
    const news_listURL = "/news";
    window.history.pushState(null, "", news_listURL);
    window.location.href = 'corini/news_list.html';
});

$("#add").click(function () {
    const news_viewURL = "/news";
    window.history.pushState(null, "", news_viewURL);
    window.location.href = 'corini/news_view.html';
});

$("#back").click(function () {
    window.history.back();
});

$("#back_2").click(function () {
    window.history.back();
});

function mbtiCheck(e) {
    e.value = e.value.replace(/[^A-Za-z]/ig, '');
}

function passwordCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}