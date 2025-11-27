function changeLanguage(language) {
    const currentPath = window.location.pathname;

    const regExp = new RegExp(`/${language}/`);
    if (!regExp.test(currentPath)) {
        const newPath = currentPath.replace(/\/(en|fr|de|ìt)\//, `/${language}/`);
        window.location.assign(newPath);
    }
}

function computeBonus(type, secretariat) {
    if (!secretariat || !type) {
        return 0;
    }

    switch (type) {
        case 'bat':
            return secretariat === 'dev' ? 50 : 25;
        case 'tech':
            return secretariat === 'science' ? 50 : 25;
    }
}

function boostCalc(type, origine, boost, secretariat) {
    if (!origine || !boost || !type) {
        return '';
    }

    const originParts = origine.split(':').map(i => +i).reverse();
    const dureeOrigine = luxon.Duration.fromObject({
        seconds: originParts[0],
        minutes: originParts[1],
        hours: originParts[2],
        days: originParts[3]
    });

    const secretariatBonus = computeBonus(type, secretariat);

    const bonus = +(boost.replace(',', '.')) + secretariatBonus + 100;
    const result = dureeOrigine.shiftTo('seconds').seconds / (bonus / 100);
    debugger;
    console.log(result);

    return luxon.Duration
        .fromObject({seconds: Math.ceil(result)})
        .shiftTo('seconds', 'minutes', 'hours', 'days')
        .toFormat('dd:hh:mm:ss');
}

$(document).ready(function () {

    $('.button-submenu').on('click', function (event) {
        if (event.target === this) {
            $(event.target).parent().parent().toggleClass('open');
            $(event.target).toggleClass('open');
        }
    });

    $('#menuToggle').on('click', function (event) {
        $('.menu').toggleClass('open');
        $(event.target).toggleClass('open');
    });

    $('.calcFormInput').on('change', function (t) {
        const type = $('#type').val();
        const origine = $('#origine').val();
        const boost = $('#boost').val();
        const secretariat = $('#secretariat').val();

        $('#result').text(boostCalc(type, origine, boost, secretariat));
    });

    $('#result').text(boostCalc($('#type').val(), $('#origine').val(), $('#boost').val(), $('#secretariat').val()));

    $('header.header div.languages a').on('click', function (item) {
        changeLanguage(item.currentTarget.id);
    });
});
