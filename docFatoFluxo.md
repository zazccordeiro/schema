![ZAZ Conecta](img/conecta.jpg)

# Adquirente Fluxo

  <summary><strong>Sumário</strong></summary>

  * [Adquirente](#adquirente)
  * [Ajuste](#ajuste)
  * [Arranjo](#arranjo)
  * [Faixa parcelamento](#faixa-parcelamento)
  * [Meio captura](#meio-captura)
  * [Tempo](#tempo)
  * [Tipo de ajuste](#tipo-de-ajuste)
  * [Tipo de pagamento](#tipo-de-pagamento)
  * [Adquirente Fluxo](#fluxo)
  * [Métricas](#métricas)
    * [Adquirente fluxo](#adquirente-fluxo)


## Adquirente

Neste atributo deverá ser descrito a informação de **adquirente** do usuário.

  Campo     | Descrição
----------- | ------------------
codigoAdquirente | Codígo identificador da adquirente.
nomeAdquirente | Nome da adquirente.


_Para facilitar em sua consulta utilize o guia de [adquirentes](docTabelaAuxiliar.md#tabela-de-adquirentes)._

## Ajuste

Neste atributo é possível identificar o tipo de ajuste realizado de uma forma mais especifica do que o atributo _["Tipo de ajuste"](#tipo-de-ajuste)_, no qual ao decorrer desta documentação você poderá ver o mesmo de uma forma agrupada.

  Campo     | Descrição
----------- | ------------------
 codigoAjuste | Código do ajuste realizado.
  nomeAjuste    | Neste atributo é possível identificar o tipo de ajuste realizado . 

_Para facilitar em sua consulta utilize o guia de [ajustes](docTabelaAuxiliar.md#tabela-de-ajustes)._

## Arranjo

Neste atributo é possível identificar o tipo de ajuste realizado.

  Campo     | Descrição
----------- | ------------------
 codigoArranjo | Código do arranjo realizado.
  nomeArranjo   | Neste atributo é possível identificar o nome da bandeira.
  tipoPagamento | Informação do tipo de pagamento (Débito ou Crédito)

_Para facilitar em sua consulta utilize o guia de [arranjo](docTabelaAuxiliar.md#tabela-de-arranjos)._

## Faixa parcelamento

Neste atributo é possível identificar a faixa de parcelamento realizada (quando realizado operações de crédito à vista ou parcelado).

  Campo     | Descrição
----------- | ------------------
codigoParcelamento | Código referente a faixa de parcelamento feito para os pagamentos com cartão de crédito.
faixaParcelamento | Informação da faixa de parcelamento.

_Para facilitar em sua consulta utilize o guia de [faixa de parcelamento](docTabelaAuxiliar.md#tabela-de-faixa-de-parcelamento)._

## Meio captura

Neste atributo é possível identificar por qual método foi realizado o recebimento do pagamento.

  Campo     | Descrição
----------- | ------------------
codigoCaptura | Código que se refere ao método de captura.
nomeCaptura | Nome do método de captura.

_Para facilitar em sua consulta utilize o guia de [meios de captura](docTabelaAuxiliar.md#tabela-de-meios-de-captura)._

## Tempo

Neste atributo é possível enxergar as diversas informações de tempo do cubo.

A dimensão tempo pode ser dividida em duas categorias:

  Dimensão  | Descrição
  --------- | ----------------------------------------------------
  TempoVenda | Dimensão voltada para uma análise temporal da venda em si.
  TempoPagamento | Dimensão voltada para uma análise temporal do pagamento.

Os atirbutos abaixos são utilizados para compor a analise estabelecida anteriormente (Venda ou pagamento).

  Campo     | Descrição
----------- | ------------------
diaData | Data informada no formato AAAA/MM/DD  
nomeDia | Nome do dia da semana.
numeroDoAno | Número do ano.
dataCompleta | Data completa no formato DD/MM/AAAA
numeroDiaDaSemana | Número do dia da semana. (Exemplo: Segunda-feira = Day 1 e Sexta-feira = Day 5)
nomeMes | Nome do mês.
numeroMes | Número do mês.
nomeDaSemanaDoMes | Nome da semana do mês.
nomeTrimestreDoAno | Nome do trimestre do ano.
nomeSemana | Nome da semana.
nomeTrimestre | Nome do trimestre.
codigoSemana | Código da semana.

## Tipo de ajuste

Neste atributo, é possível ver os ajustes apresentados de uma maneira agrupada, diferente do que foi visto no atributo _[ajuste](#ajuste)_ que nos mostra uma visão mais individual.

  Campo     | Descrição
----------- | ------------------
codigoTipoAjuste | Código identificador do tipo de ajuste.
nomeFaixaAjuste | Nome do tipo de ajuste realizado.

_Para facilitar em sua consulta utilize o guia de [tipo de ajuste](docTabelaAuxiliar.md#tabela-de-tipo-de-ajuste)._

## Tipo de pagamento

Neste atributo é possível definir a forma em que o pagamento foi realizado.

  Campo     | Descrição
----------- | ------------------
codigoPagamento | Código referente ao tipo de pagamento realizado
nomePagamento | Nome do tipo de pagamento realizado.

_Para facilitar em sua consulta utilize o guia de [tipo de pagamento](docTabelaAuxiliar.md#tabela-tipo-de-pagamento)._

## Fluxo

Abaixo seguem os atributos e suas respectivas descrições para melhor leitura do fluxo adquirentes.

Campo     |    Descrição
--------- | ---------------------------------------------
estabelecimentoMatriz | Número do estabelecimento matriz de extrato eletrônico.
estabelecimento | Número do estabelecimento.
statusPagamento | Identifica a situação em que se encontram os créditos enviados ao banco. No reprocessamento, o status é atualizado de acordo com o envio e retorno de confirmação de pagamento por parte do banco.
numeroResumoOperacao | Número do resumo de operação. Contêm informações referentes a um grupo de vendas realizadas em uma determinada data.
numeroOperacaoAntecipacao | Identifica o número da operação de Antecipação apresentada no registro tipo 5 – campo 12 ao 20. Conterá zeros, caso o RO não tenha sido antecipado.
identificadorAntecipacao | “ “ – Não antecipado; “A” – Antecipado; “C” – Antecipado no banco – Cessão de Recebíveis.
plano | No caso de venda parcelada, será formatado com o maior número de parcelas encontradas naquele grupo de vendas. Se o RO tiver vendas em 03, 04 ou 06 parcelas, será preenchido com 06.Se for uma aceleração de parcelas, será formatado com a maior parcela acelerada. Exemplo: (posições 019 a 023) 02A02 – indica a aceleração da parcela 02 até a 02, ou seja, somente uma parcela. 03A08 – indica a aceleração da parcela 03 até a parcela 08 do plano da venda, ou seja, foram aceleradas 06 parcelas. No caso de venda à vista, será formatado com brancos.
parcela | No caso de venda parcelada, será formatado com o número da parcela que está sendo liberada. No caso de venda à vista, será formatado com zeros.
banco | Código do banco no qual os valores foram depositados.
agencia | Código da agência na qual os valores foram depositados.
conta | Conta na qual os valores foram depositados.
indicadorRecebaRapido | “S” – Sim, possui Receba Rápido “N” – Não possui Receba Rápido.
indicadorTaxaMinima | “S” – Sim, possui CVs com Taxa Mínima aplicada “N” – Não possui CVs com Taxa Mínima aplicada.
dataApresentacao | AAMMDD – Data em que o RO foi transmitido para a adquirente.
dataVencimentoOriginal | AAMMDD – Data de vencimento original.
dataCapturaTransacao | AAMMDD - Data em que a transação foi capturada pela adquirente. Na recuperação, pode ser atualizada após o processamento da transação ou ajuste.
numeroCartaoTruncado | Número do cartão truncado: número do cartão que efetuou a compra com número truncado. Conterá zeros para compras via mobile payment ou comércio eletrônico, sendo para o  último opcional.
numeroDigitosCartao | Número de dígitos do cartão.
codigoAutorizacao | Código de autorização da transação. Este número não é único e pode se repetir. Para efeito de conciliação deverá ser combinado com outras chaves.
nsuDoc | Número sequencial, também conhecido como DOC (número do documento), que identifica a transação no dia em que ela foi realizada. Este número não é único e pode se repetir. Caso a venda tenha sido reprocessada, o NSU pode ser alterado.
tid | Identificação da transação realizada no comércio eletrônico.
numeroNotaFiscal | Número da nota fiscal para estabelecimentos que capturam esta informação na máquina. Quando não disponível, será formatado com zeros.
numeroLogicoTerminal | Número lógico do terminal onde foi efetuada a venda.
horaTransacao | Hora da transação apresentada no formato HHMMSS. Essa informação será gerada somente nos registros de venda do arquivo de venda com CV original. Nos demais casos, o campo será formatado com zeros.
modoEntradaCartao | Identifica o modo de entrada do cartão.
fluxo | -

# Métricas

Abaixo seguem os descritivos das métricas da tabela de adquirente fluxo.

Campo     |    Descrição
--------- | --------------------------------
valorBruto | Somatória dos valores de venda.
taxaAdministrativa | Percentual de taxa administrativa aplicado no valor da transação.
tarifaAdministrativa | Tarifa cobrada por transação.
taxaRecebaRapido | Percentual de taxa receba rápido aplicado no valor da transação.
valoTaxaAdministrativa | Valor da taxa administrativa descontada sobre as vendas.
valorLiquido | Valor das vendas descontado o valor da taxa administrativa.
valorBrutoAntecipado | Valor bruto antecipado, fornecido quando o RO for antecipado. Será preenchido com zeros quando não houver antecipação.

_Ir para o [topo](#introdução)._

<!-- END graphql-markdown -->
