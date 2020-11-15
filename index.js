function changeDisplay(type1, type2, type3, type4) {
    document.querySelectorAll('nav p').forEach(function (element) {
        element.style.color = 'white';
    });
    document.querySelector('#welcome').style.display = 'none';
    document.querySelector('#' + type1).style.display = 'block';
    document.querySelector('#' + type2).style.display = 'none';
    document.querySelector('#' + type3).style.display = 'none';
    try {
        document.querySelector('#' + type4).style.display = 'none';
    } catch (e) { }
};

document.querySelector('#cvNav').addEventListener('click', function () {
    changeDisplay('cvArticle', 'projectsArticle', 'accountsArticle');
    document.querySelector('#cvNav').style.color = 'gold';
});

document.querySelector('#projectsNav').addEventListener('click', function () {
    changeDisplay('projectsArticle', 'cvArticle', 'accountsArticle');
    document.querySelector('#projectsNav').style.color = 'gold';
});

document.querySelector('#accountsNav').addEventListener('click', function () {
    changeDisplay('accountsArticle', 'cvArticle', 'projectsArticle');
    document.querySelector('#accountsNav').style.color = 'gold';
    document.querySelectorAll('.articleSelect')[0].addEventListener('click', function () {
        document.querySelector('#litReviewOne').style.display = 'block';
        document.querySelector('#accountsArticle').style.display = 'none';
    });
    document.querySelectorAll('nav p').forEach(function (item) {
        item.addEventListener('click', function () {
            if (document.querySelector('#litReviewOne').style.display === 'block') {
                document.querySelector('#litReviewOne').style.display = 'none';
            }
        })
    });
});

document.querySelector('#email').addEventListener('click', function () {
    changeDisplay('emailForm', 'cvArticle', 'projectsArticle', 'accountsArticle');
});

