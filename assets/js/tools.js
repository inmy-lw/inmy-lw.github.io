function boostCalc(origine, boost, secretariat) {
    if (!origine || !boost) {
        return '';
    }

    const originParts = origine.split(':').map(i => +i).reverse();
    const dureeOrigine = luxon.Duration.fromObject({
        seconds: originParts[0],
        minutes: originParts[1],
        hours: originParts[2],
        days: originParts[3]
    });
    const bonus = +(boost.replace(',', '.')) + +secretariat + 100;
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
        const origine = $('#origine').val();
        const boost = $('#boost').val();
        const secretariat = $('#secretariat').val();

        $('#result').text(boostCalc(origine, boost, secretariat));
    });

    $('#result').text(boostCalc($('#origine').val(), $('#boost').val(), $('#secretariat').val()));
});
