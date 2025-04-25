$(document).ready(function(){
    $('#images-carousel').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, preencha seu nome.',
            email: 'Por favor, preencha seu email.',
            telefone: 'Por favor, preencha seu telefone.',
            veiculoInteresse: 'Por favor, preencha seu veículo de interesse.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposInvalidos = validador.numberOfInvalids();
            if(camposInvalidos){
                alert(`Existem ${camposInvalidos} campos incorretos.`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const veiculo = $(this).parent().find('h3').text();

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

        $('#veiculo-interesse').val(veiculo);
    })
})