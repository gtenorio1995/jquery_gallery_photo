$('#btn-addImagem').click(function(){
    $('#formulario').slideDown();
})

$('#btn-cancelar').click(function(){
    $('#formulario').slideUp();
})

$('#formulario').on('submit', function(e){
    e.preventDefault();
    const enderecoImagem = $('#endereco-imagem').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoImagem}"/>`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
        <a href="${enderecoImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();

    $('#endereco-imagem').val('');
})