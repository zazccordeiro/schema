![ZAZ Conecta](img/conecta.jpg)


## Adquirentes Arquivo Processado

Abaixo seguem os atributos e suas respectivas descrições para melhor leitura do arquivo processado.


Campo     |    Descrição
--------- | ---------------------------------------------
nomeArquivoEdi | Nome identificador do arquivo.
estabelecimentoMatriz |  Número do estabelecimento matriz de extrato eletrônico.
dataProcessamento | AAAAMMDD – data em que o arquivo foi gerado.
periodoInicial | AAAAMMDD – período inicial.
periodoFinal | AAAAMMDD – período final.
sequencia | Número sequencial do arquivo. Nos casos de reprocessamento,este dado será enviado como 9999999.
opcaoExtrato | Categoria do tipo de extrato.
transmissao | Tipo de transmissão do arquivo (se refere a adquirente)
caixaPostal | Caixa postal.
versaoLayout | Constante “014”.
totalRegistro | Total registro.
numeroTransacoesCanceladas | Número de transações canceladas.
numeroTransacoesPagas | Número de transações pagas.
numeroCancelamentosDescontados | Número de cancelamentos descontados.
numeroChargebacks | Número de contestações.
numeroEstornosChargeback | Número de estornos de contestações.


_Ir para a [documentação de introdução](index.md)._
 
 <!-- END graphql-markdown -->