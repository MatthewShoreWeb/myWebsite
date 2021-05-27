function changeDisplay(type) {
    document.querySelectorAll('nav p').forEach(function (element) {
        element.style.color = 'white';
    });

    // We hide everything except the id specified in the function parameter.
    let elements = ['#welcome', '#cvArticle', '#projectsArticle', '#accountsArticle', '#ibmProject']
    for (let i = 0; i < elements.length; i++) {
        elements[i] === type ? document.querySelector(elements[i]).style.display = 'block' : document.querySelector(elements[i]).style.display = 'none';
    } 
 
};

document.querySelector('#cvNav').addEventListener('click', function () {
    changeDisplay('#cvArticle');
    document.querySelector('#cvNav').style.color = 'gold';
});

document.querySelector('#projectsNav').addEventListener('click', function () {
    changeDisplay('#projectsArticle');
    document.querySelector('#projectsNav').style.color = 'gold';
});



// PROJECTS
document.querySelector('#ibm').addEventListener('click', function () {
    document.querySelector('#ibmProject').style.display = 'block';
    document.querySelector('#projectsArticle').style.display = 'none';
})

// ARTICLES

document.querySelector('#accountsNav').addEventListener('click', function () {
    changeDisplay('#accountsArticle');
    document.querySelector('#accountsNav').style.color = 'gold';
    document.querySelectorAll('.articleSelect')[0].addEventListener('click', function () {
        document.querySelector('#litReviewOne').style.display = 'block';
        document.querySelector('#accountsArticle').style.display = 'none';
    });
    document.querySelectorAll('.articleSelect')[1].addEventListener('click', function () {
        document.querySelector('#litReviewTwo').style.display = 'block';
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

