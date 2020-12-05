$(document).ready(function() {
    let tir;
    let paperPrice = 0;
    let formaPrice = 0;
    let printPrice = 0;
    let sum = 0;
    let colorFormat = "";
    let papers = {
        "Выберите бумагу": 0,
        "Мелованная бумага": 6.8,
        "Бумага повышенной белизны": 40.5,
        "Prestige Лён": 45
    };
    let colors = {
        "Выберите цветность": { file: 0, print: 0},
        "Односторонняя черно-белая": { file: 110, print: 14},
        "Двусторонняя черно-белая": { file: 220, print: 28},
        "Односторонняя цветная": {file: 110, print: 37},
        "Цветная с лицевой, чб с обратной": {file: 220, print: 51},
        "Двусторонняя цветная": { file: 220, print: 74}
    };

    insertData(papers, $('#card-papers'));
    insertData(colors, $('#card-color'));


    function insertData(dataFields,el) {
        let data = '';
        for (let key in dataFields) {
            data += `<option value="${key}">${key}</option>`;
        }
        el.append(data);
    }

    $('.calc_wrapper').change(function() {
        tir = $('#cart-count').val() / 30;
        paperPrice = papers[$('#card-papers').val()] * tir;
        colorFormat = $('#card-color').val();
        formaPrice = colors[colorFormat].file;
        printPrice = colors[colorFormat].print * tir;
        sum = paperPrice  + formaPrice + printPrice;
        $('#total-price').text(sum);

        $("img").hide();
        displayImage();
    });

    function displayImage() {
        switch (colorFormat) {
            case 'Односторонняя черно-белая':
                $('#type-1').show('slow');
                break;
            case 'Двусторонняя черно-белая':
                $('#type-2').show('slow');
                break;
            case 'Односторонняя цветная':
                $('#type-3').show('slow');
                break;
            case 'Цветная с лицевой, чб с обратной':
                $('#type-4').show('slow');
                break;
            case 'Двусторонняя цветная':
                $('#type-5').show('slow');
                break;
            default:
                break;
        }
    }
});