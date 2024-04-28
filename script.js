const YOUR_PUBLIC_KEY = 'APP_USR-6059815098663225-042817-2309f9177f9f05c01611a933d3c62c45-282933972'; // Substitua pelo seu Public Key do Mercado Pago

// Configuração do formulário de cartão de crédito
const cardForm = document.querySelector('#card-form');

// Inicializa o Mercado Pago SDK com sua Public Key
const mp = new MercadoPago(YOUR_PUBLIC_KEY, {
    locale: 'pt-BR'
});

// Cria um elemento de formulário de cartão de crédito
const card = mp.cardForm({
    amount: 50.00, // Substitua pelo preço do seu produto
    autoMount: true,
    form: {
        id: 'card-form',
        cardholderName: {
            id: 'cardholderName',
            placeholder: 'Nome do Titular'
        },
        cardholderEmail: {
            id: 'cardholderEmail',
            placeholder: 'E-mail'
        },
        cardNumber: {
            id: 'cardNumber',
            placeholder: 'Número do Cartão'
        },
        cardExpirationMonth: {
            id: 'cardExpirationMonth',
            placeholder: 'MM'
        },
        cardExpirationYear: {
            id: 'cardExpirationYear',
            placeholder: 'AA'
        },
        securityCode: {
            id: 'securityCode',
            placeholder: 'CVV'
        },
        installments: {
            id: 'installments',
            placeholder: 'Parcelas'
        },
        identificationType: {
            id: 'identificationType',
            placeholder: 'Tipo de Documento'
        },
        identificationNumber: {
            id: 'identificationNumber',
            placeholder: 'Número do Documento'
        },
        issuer: {
            id: 'issuer',
            placeholder: 'Banco Emissor'
        },
        submit: {
            id: 'pay-button',
            label: 'Seguir com o pagamento' // Adiciona o rótulo ao botão
        }
    }
});

// Evento de clique para processar o pagamento quando o botão é clicado
document.querySelector('#pay-button').addEventListener('click', function() {
    mp.createToken(card).then(function(result) {
        if (result.error) {
            // Tratar erro de validação do cartão
            console.error(result.error);
        } else {
            // Token criado com sucesso, envie-o para o seu servidor para processar o pagamento
            console.log(result);
            // Aqui você deve enviar o token para o seu servidor para completar a transação
        }
    });
});
