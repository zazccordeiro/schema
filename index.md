![ZAZ Conecta](https://www.acate.com.br/wp-content/uploads/2021/12/zaz-conecta-anuncio-1200x600px-2.png)

# Guia de atributos e métricas

Esta documentação tem como objetivo ser um facilitador e propor autonomia para o melhor aproveitamento do cubo de dados.

**Métricas** e **atributos** são a base do Explore. Eles são categorias de informações usadas para medir e organizar seus dados.

  <summary><strong>Sumário</strong></summary>

  * [Atributo](#atributo)
    * [Adquirente](#adquirente)
    * [Ajuste](#ajuste)
    * [Arranjo](#arranjo)
    * [Faixa parcelamento](#faixa-parcelamento)
    * [Meio captura](#meio-captura)
    * [Tempo](#tempo)
    * [Tipo de ajuste](#tipo-de-ajuste)
    * [Tipo de pagamento](#tipo-de-pagamento)
    * [Adquirente arquivo processado](#adquirentes-arquivo-processado)
    * [Adquirente Fluxo](#fluxo)
  * [Métrica](#métrica)
    * [Adquirente arquivo processado](#adquirente-arquivo-processado)
    * [Adquirente fluxo](#adquirente-fluxo)
  * [Tabela auxiliar](#tabela-auxiliar)
    * [Tabela de adquirentes](#tabela-de-adquirentes)
    * [Tabela de faixa de parcelamento](#tabela-de-faixa-de-parcelamento)
    * [Tabela de meios de captura](#tabela-de-meios-de-captura)
    * [Tabela tipo de pagamento](#tabela-tipo-de-pagamento)
    * [Tabela de arranjos](#tabela-de-arranjos)
    * [Tabela de tipo de ajuste](#tabela-de-tipo-de-ajuste)
    * [Tabela de ajustes](#tabela-de-ajustes)
    


# Atributo

O documento abaixo tem como propósito familiarizar o usuário com cada atributo com os termos, para isso cada atributo é disponíbilizado com sua descrição.

Os atributos nos dizem "como" organizar os resultados. Adicione atributos para informar ao Explore como você deseja organizar e segmentar essas informações por qualidades específicas.

## Adquirente

Neste atributo deverá ser descrito a informação de **adquirente** do usuário.

  Campo     | Descrição
----------- | ------------------
codigoAdquirente | Codígo identificador da adquirente.
nomeAdquirente | Nome da adquirente.


_Para facilitar em sua consulta utilize o guia de [adquirentes](#tabela-de-adquirentes)._

## Ajuste

Neste atributo é possível identificar o tipo de ajuste realizado de uma forma mais especifica do que o atributo _["Tipo de ajuste"](#tipo-de-ajuste)_, no qual ao decorrer desta documentação você poderá ver o mesmo de uma forma agrupada.

  Campo     | Descrição
----------- | ------------------
 codigoAjuste | Código do ajuste realizado.
  nomeAjuste    | Neste atributo é possível identificar o tipo de ajuste realizado . 

_Para facilitar em sua consulta utilize o guia de [ajustes](#tabela-de-ajustes)._

## Arranjo

Neste atributo é possível identificar o tipo de ajuste realizado.

  Campo     | Descrição
----------- | ------------------
 codigoAranjo | Código do arranjo realizado.
  nomeArranjo   | Neste atributo é possível identificar o nome da bandeira.
  tipoPagamento | Informação do tipo de pagamento (Débito ou Crédito)

_Para facilitar em sua consulta utilize o guia de [arranjo](#tabela-de-arranjos)._

## Faixa parcelamento

Neste atributo é possível identificar a faixa de parcelamento realizada (quando realizado operações de crédito à vista ou parcelado).

  Campo     | Descrição
----------- | ------------------
codigoParcelamento | Código referente a faixa de parcelamento feito para os pagamentos com cartão de crédito.
faixaParcelamento | Informação da faixa de parcelamento.

_Para facilitar em sua consulta utilize o guia de [faixa de parcelamento](#tabela-de-faixa-de-parcelamento)._

## Meio captura

Neste atributo é possível identificar por qual método foi realizado o recebimento do pagamento.

  Campo     | Descrição
----------- | ------------------
codigoCaptura | Código que se refere ao método de captura.
nomeCaptura | Nome do método de captura.

_Para facilitar em sua consulta utilize o guia de [meios de captura](#tabela-de-meios-de-captura)._

<!-- ## Tempo

_**PEGAR DO CUBEJS DEPOIS DE FINALIZADO**_ -->

## Tipo de ajuste

Neste atributo, é possível ver os ajustes apresentados de uma maneira agrupada, diferente do que foi visto no atributo _[ajuste](#ajuste)_ que nos mostra uma visão mais individual.

  Campo     | Descrição
----------- | ------------------
codigoTipoAjuste | Código identificador do tipo de ajuste.
nomeFaixaAjuste | Nome do tipo de ajuste realizado.

_Para facilitar em sua consulta utilize o guia de [tipo de ajuste](#tabela-de-tipo-de-ajuste)._

## Tipo de pagamento

Neste atributo é possível definir a forma em que o pagamento foi realizado.

  Campo     | Descrição
----------- | ------------------
codigoPagamento | Código referente ao tipo de pagamento realizado
nomePagamento | Nome do tipo de pagamento realizado.

_Para facilitar em sua consulta utilize o guia de [tipo de pagamento](#tabela-tipo-de-pagamento)._

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

# Métrica

Você pode pensar nas métricas como o "quê" que compõe o relatório. Adicione uma métrica para escolher quais informações quantificáveis você deseja medir.

## Adquirente arquivo processado

Abaixo seguem os descritivos das métricas da tabela de arquivos processados.

Campo     |    Descrição
--------- | --------------------------------
totalRegistro | Valor total de registros.
valorLiquidoSomaTotalRos | Valor total liquido dos resumos de operação.
quantidadeTotalCvs | Quantidade total de comprovantes de venda.
valorBrutoSomaTotalRos | Valor bruto total dos resumos de operação.
valorBrutoAntecipadoSomaTotalRos | Valor bruto total antescipados dos resumos de operação.
somaValoresNegociados | Soma dos valores negociados.

## Adquirente fluxo

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

<!-- ## Código -->

# Tabela auxiliar 

## Tabela de adquirentes

codigoAdquirente   | nomeAdquirente
----------- | ------------------
  1 | Cielo
  2 | Rede
  3 | Getnet
  4 | Stone
  5 | Amex
  6 | Adiq
  7 | Safra Pay
  8 | PagSeguro
  9 | MercadoPago
  10 | Sumup
  11 | iFood
  12 | C6 Bank
  13 | BIN
  14 | Sicred

## Tabela de faixa de parcelamento

codigoParcelamento   | faixaParcelamento
----------- | ------------------
1 | À vista
2 | 2 a 6
3 | 7 a 12
4 | 13 a 18

## Tabela de meios de captura

codigoCaptura   | nomeCaptura
----------- | ------------------ 
1	 | 	LIO
2	 | 	POS (Point of Sale)
3	 | 	PDV (Ponto de Venda) ou TEF (Transferência Eletrônica de Fundos)
4	 | 	e-Commerce (Comércio Eletrônico)
5	 | 	EDI (Troca Eletrônica de Dados)
6	 | 	ADP/BSP (Empresa Capturadora) ou Reprocessamento
7	 | 	Manual
8	 | 	URA/CVA
9	 | 	Mobile
10	 | 	Moedeiro Eletrônico em Rede
11	 | 	Não identificado


## Tabela tipo de pagamento

codigoPagamento | nomePagamento
----------------| ------------------
1 | CRÉDITO
2 | PARCELADO
3 | DEBITO

## Tabela de arranjos

codigoAranjo	 | 	nomeArranjo	 | 	tipoPagamento
-------------- | ------------- | --------------------- 	
1	 | 	Agiplan	 | 	CREDITO
2	 | 	Banescard Cartão de Crédito	 | 	CREDITO
3	 | 	Esplanada crédito à vista	 | 	CREDITO
4	 | 	CREDZ Crédito	 | 	CREDITO
5	 | 	Esplanada parcelado loja	 | 	CREDITO
6	 | 	Elo Crediário	 | 	CREDITO
7	 | 	Mastercard Cartão de Crédito	 | 	CREDITO
8	 | 	Mastercard Cartão de Débito	 | 	DEBITO
9	 | 	Elo Construcard	 | 	DEBITO
10	 | 	Elo Agro Débito	 | 	DEBITO
11	 | 	Elo Agro Custeio	 | 	DEBITO
12	 | 	Elo Agro Investimento	 | 	DEBITO
13	 | 	Elo Agro Custeio + Débito	 | 	DEBITO
14	 | 	Elo Agro Investimento + Débito	 | 	DEBITO
15	 | 	Discover	 | 	CREDITO
16	 | 	Diners crédito à vista	 | 	CREDITO
17	 | 	Diners parcelado loja	 | 	CREDITO
18	 | 	Visa Agro Custeio + Débito	 | 	DEBITO
19	 | 	Visa Agro Investimento + Débito	 | 	DEBITO
20	 | 	FCO Investimento	 | 	DEBITO
21	 | 	Agro Electron	 | 	DEBITO
22	 | 	Agro Investimento	 | 	DEBITO
23	 | 	Visa FCO Giro	 | 	CREDITO
24	 | 	Visa crediário no crédito	 | 	CREDITO
25	 | 	Visa Cartão de Crédito	 | 	CREDITO
26	 | 	JCB Cartão de Crédito	 | 	CREDITO
27	 | 	Visa Saque com cartão de Débito	 | 	DEBITO
28	 | 	Flex Car Visa Vale	 | 	DEBITO
29	 | 	Credsystem crédito à vista	 | 	CREDITO
30	 | 	Credsystem parcelado loja	 | 	CREDITO
31	 | 	Visa Electron Débito à vista	 | 	DEBITO
32	 | 	Visa Pedágio	 | 	DEBITO
33	 | 	Visa Electron Pré-Datado	 | 	DEBITO
34	 | 	Alelo Refeição	 | 	DEBITO
35	 | 	Alelo Alimentação	 | 	DEBITO
36	 | 	Alelo Multibenefícios	 | 	DEBITO
37	 | 	Alelo Auto	 | 	DEBITO
38	 | 	Sorocred Cartão de Débito	 | 	DEBITO
39	 | 	Sorocred Cartão de Crédito	 | 	CREDITO
40	 | 	Visa Crediário	 | 	CREDITO
41	 | 	Visa Capital de Giro	 | 	DEBITO
42	 | 	Visa Crédito Imobiliário	 | 	DEBITO
43	 | 	Alelo Cultura	 | 	DEBITO
44	 | 	Elo Cartão de Crédito	 | 	CREDITO
45	 | 	Elo débito à vista	 | 	DEBITO
46	 | 	Pagamento Carnê Visa Electron	 | 	CREDITO
47	 | 	Visa Crédito Conversor de Moeda	 | 	CREDITO
48	 | 	Mastercard Crédito Especializado (*)	 | 	CREDITO
49	 | 	Amex Cartão de Crédito	 | 	CREDITO
50	 | 	Elo Crédito Imobiliário	 | 	CREDITO
51	 | 	Elo Crédito Especializado (*)	 | 	CREDITO
52	 | 	Banescard Cartão de Débito	 | 	DEBITO
53	 | 	Cabal Crédito	 | 	CREDITO
54	 | 	Cabal Débito	 | 	DEBITO
55	 | 	Hipercard Cartão de Crédito	 | 	CREDITO
56	 | 	Hiper Débito	 | 	DEBITO
57	 | 	Verdecard Cartão de Crédito	 | 	CREDITO
58	 | 	Nutricash Alimentação	 | 	DEBITO
59	 | 	Nutricash Refeição	 | 	DEBITO
60	 | 	Nutricash Multibenefícios	 | 	DEBITO
61	 | 	Nutricash Combustível	 | 	DEBITO
62	 | 	Ben Alimentação	 | 	DEBITO
63	 | 	Ben Refeição	 | 	DEBITO
64	 | 	Ourocard Cartão de Débito	 | 	DEBITO
65	 | 	Ourocard Agro custeio	 | 	DEBITO
66	 | 	Ourocard Agro investimento	 | 	DEBITO
67	 | 	Ourocard Agro custeio + débito	 | 	DEBITO
68	 | 	Ourocard Agro investimento + débito	 | 	DEBITO
69	 | 	Elo crediário no crédito	 | 	CREDITO
70	 | 	Mastercard Pedágio	 | 	DEBITO
71	 | 	Elo Carnê	 | 	CREDITO
72	 | 	Mastercard Carnê	 | 	CREDITO
73	 | 	Mastercard Crédito Conversor de Moeda	 | 	CREDITO
74	 | 	Título	 | 	DEBITO
75	 | 	Convênio	 | 	DEBITO
76	 | 	Crédito Digital	 | 	DEBITO
78	 | 	Crediário AMEX	 | 	CREDITO
79	 | 	Crediário HIPER/ HIPERCARD	 | 	CREDITO
80	 | 	Crediário Mastercard	 | 	CREDITO
81	 | 	Cupom Papel	 | 	DEBITO
77	 | 	Crediário Visa	 | 	CREDITO
82	 | 	Elo Cartão de Débito	 | 	DEBITO
83	 | 	Pagamento Carnê – Débito ELO	 | 	DEBITO
84	 | 	Pagamento Carnê – Débito Maestro	 | 	DEBITO
85	 | 	Pagamento Recorrente	 | 	DEBITO
86	 | 	Pagamento Carnê – Débito Visa Electron	 | 	DEBITO
87	 | 	Visa Cartão de Débito	 | 	DEBITO
88	 | 	Movimentos Não Transacionais	 | 	DEBITO
89	 | 	Visa Antecipação	 | 	DEBITO
90	 | 	Mastercard Antecipação	 | 	DEBITO
91	 | 	Hiper Antecipação	 | 	DEBITO
92	 | 	American Express Antecipação	 | 	DEBITO
93	 | 	Boleto	 | 	DEBITO
94	 | 	Cabal Antecipação	 | 	DEBITO
95	 | 	UnionPay Débito	 | 	DEBITO
96	 | 	UnionPay Crédito	 | 	CREDITO
97	 | 	UnionPay Antecipação	 | 	DEBITO
98	 | 	Dinners credito	 | 	CREDITO
99	 | 	Dinners debito	 | 	DEBITO
100	 | 	Sicredi	 | 	CREDITO
101	 | 	Sicred debito	 | 	DEBITO
102	 | 	Cup Crédito	 | 	CREDITO
103	 | 	Calcard	 | 	CREDITO
104	 | 	Calcard debito	 | 	DEBITO
105	 | 	Construcard credito	 | 	CREDITO
106	 | 	Construcard debito	 | 	DEBITO
107	 | 	Avista	 | 	CREDITO
108	 | 	Avista debito	 | 	DEBITO
109	 | 	Credsystem credito	 | 	CREDITO
110	 | 	Credsystem debito	 | 	DEBITO
111	 | 	Amex Cartão de Crédito	 | 	CREDITO
112	 | 	Amex debito	 | 	DEBITO
113	 | 	Alelo credito	 | 	CREDITO
114	 | 	Alelo debito	 | 	DEBITO
115	 | 	Jcb debito	 | 	DEBITO
116	 | 	Credz debito	 | 	DEBITO
117	 | 	Outros	 | 	DEBITO
118	 | 	Amex debito	 | 	DEBITO
119	 | 	Safrapay Digital credito	 | 	CREDITO
120	 | 	Safrapay Digital debito	 | 	DEBITO
121	 | 	Sist.Pag.Instant.	 | 	DEBITO
122	 | 	Diners	 | 	CREDITO
123	 | 	Aura	 | 	CREDITO
124	 | 	Cartão de crédito PLENOCard.	 | 	CREDITO
125	 | 	Cartão de crédito PersonalCard.	 | 	CREDITO
126	 | 	Brasil Card	 | 	CREDITO
127	 | 	Fortbrasil	 | 	CREDITO
128	 | 	Cartão de crédito CARDBAN.	 | 	CREDITO
129	 | 	Cartão de crédito VALECARD.	 | 	CREDITO
130	 | 	Mais!	 | 	CREDITO
131	 | 	Cartão de crédito GRANDCARD.	 | 	CREDITO
132	 | 	Cartão de crédito Up Policard.	 | 	CREDITO
133	 | 	Banese Card	 | 	CREDITO
134	 | 	Boleto	 | 	DEBITO
135	 | 	Boleto	 | 	DEBITO
136	 | 	Débito online Bradesco.	 | 	DEBITO
137	 | 	Débito online Itaú.	 | 	DEBITO
138	 | 	Débito online Unibanco.	 | 	DEBITO
139	 | 	Débito online Banco do Brasil.	 | 	DEBITO
140	 | 	Débito online Banco Real.	 | 	DEBITO
141	 | 	Débito online Banrisul.	 | 	DEBITO
142	 | 	Débito online HSBC.	 | 	DEBITO
143	 | 	Saldo PagSeguro.	 | 	DEBITO
144	 | 	PIX.	 | 	DEBITO
145	 | 	Oi Paggo.	 | 	DEBITO
146	 | 	Depósito em conta - Banco do Brasil	 | 	DEBITO

## Tabela de tipo de ajuste

A tabela abaixo é um agrupamento das categorias de ajustes que serão apresentadas de forma individual na [tabela auxiliar de ajustes](#tipo-de-ajuste.)

codigoTipoAjuste | nomeFaixaAjuste
----------- | ------------------ 
1 | Acerto
2 | Acerto/Chargeback
3 | Cancelamento
4 | Bloqueio
5 | Cobrança
6 | Acerto/Cobrança
7 | Acerto/Cancelamento

## Tabela de ajustes

A tabela abaixo é uma visão individual dos tipos de ajustes.

codigoAjuste | 	nomeAjuste
------------ | ----------------------
45	 | 	Incentivo comercial
46	 | 	Incentivo por venda de Recarga
47	 | 	Regularização de rejeição ARV
48	 | 	Reversão de duplicidade do pagamento - ARV
49	 | 	Tarifa de cadastro
1	 | 	Serviços não prestados ou mercadoria não recebida
50	 | 	Tarifa de extrato no papel
51	 | 	Aceleração de débito de antecipação
52	 | 	Descumprimento de contrato
53	 | 	Venda recorrente cancelada pelo consumido
54	 | 	Consumidor não reconhece a compra
2	 | 	Transação recorrente cancelada
55	 | 	Cartão com validade vencida
56	 | 	Mercadoria com defeito ou diferente da descrição
57	 | 	Transação irregular
58	 | 	Mercadoria não foi entregue
59	 | 	Serviços não prestados
3	 | 	Mercadoria/Serviços defeituosos ou não coincidem com a descrição
60	 | 	Venda sem código de autorização
61	 | 	Número de cartão inválido
62	 | 	Cópia do comprovante / documento inválido
63	 | 	Comprovante / documento ilegível
4	 | 	Mercadoria falsificada
64	 | 	Venda sem leitura de chip
65	 | 	Venda em outra moeda
66	 | 	Venda processada incorretamente
67	 | 	Venda cancelada
5	 | 	Declaração enganosa
68	 | 	Crédito em duplicidade
69	 | 	Documentos não recebidos
70	 | 	Pagamento realizado por outros meios
6	 | 	Crédito não processado
71	 | 	Equipamento perdido / roubado
72	 | 	Multa por excesso de chargeback
73	 | 	Serviços Score
7	 | 	Mercadorias/Serviços cancelados
74	 | 	Reagendamento do débito de antecipação
75	 | 	Ajuste do débito de cessão
8	 | 	Transação de crédito original não aceita
76	 | 	Cielo e-Commerce
77	 | 	Cielo Controle (Excedente)
9	 | 	Não recebimento de dinheiro ou de valor de transação de carga
78	 | 	Cielo Controle (Franquia)
10	 | 	Encerramento  Disputa
11	 | 	Abertura Pré-Chargeback
79	 | 	Débito/crédito compensação de valores
12	 | 	Encerramento  Pré- Chargeback
13	 | 	Recarga com cartão
80	 | 	Estorno debito/crédito de cessão
14	 | 	Agendamento Saque CIP
81	 | 	Estorno débito/crédito de gravame
15	 | 	Saque Aprovado CIP
82	 | 	Meliuz
16	 | 	Remuneração de Conta
17	 | 	Transferência  Conta Digital PagBank
18	 | 	Saque Cancelado
19	 | 	Débito divisão de pagamento
20	 | 	Crédito divisão de pagamento
21	 | 	Aquisição do Envio fácil
22	 | 	Aporte para aquisição do envio Fácil
23	 | 	Crédito EC – referente contestação portador
24	 | 	Crédito por cancelamento rejeitado – Cielo
83	 | 	Débito/crédito compensação cancelamento de transação em operação
84	 | 	Débito/crédito de penhora
85	 | 	Estorno de crédito/débito de penhora
86	 | 	Débito/crédito compensação cancelamento em operação
87	 | 	Tarifa por retentativa de transações (bandeiras)
88	 | 	AMEX/CRD/COMPRA
89	 | 	AMEX/CRD/REVERSAL
90	 | 	AMEX/CRD/CANCELAMENTO
91	 | 	AMEX/PARCELADO/COMPRA
92	 | 	AMEX/PARCELADO/REVERSAL
93	 | 	AMEX/PARCELADO/CANCELAMENTO
94	 | 	ESTORNO TAXA ADMINISTRATIVA
95	 | 	ESTORNO TARIFA ADMINISTRATIVA
96	 | 	REVERSAO DE CANCELAMENTO ELO
97	 | 	ESTORNO TARIFA SERVICO DE CONECTIVIDADE
98	 | 	ESTORNO TARIFA DE INSTALACAO
99	 | 	ESTORNO TARIFA DE SERVICOS DE INFORMACOES
100	 | 	ESTORNO TARIFA DE SERVICOS DE ATENDIMENTO
101	 | 	VISA: ESTORNO TAXA DE ANTECIPACAO
25	 | 	Processamento do débito duplicado – Visa Pedágio
26	 | 	Débito por venda realizada sem a leitura do chip
27	 | 	Débito por venda rejeitada no sistema – Cielo
28	 | 	Consumidor não reconhece a compra
29	 | 	Estorno de acordo jurídico
30	 | 	Estorno de contrato de caução
31	 | 	Estorno de acordo de cobrança
32	 | 	Estorno de bloqueio de valor por ordem judicial
33	 | 	Estorno de cancelamento de venda
34	 | 	Estorno de cobrança de tarifa operacional
35	 | 	Estorno de cobrança mensal Lynx Comércio
36	 | 	Estorno de cobrança Plano Cielo
37	 | 	Estorno de débito venda sem a leitura do Chip
38	 | 	Estorno de incentivo comercial
39	 | 	Estorno de Multa Programa Monitoria Chargeback
40	 | 	Estorno de rejeição ARV
41	 | 	Estorno de reversão de duplicidade do pagamento - ARV
42	 | 	Estorno de tarifa de cadastro
43	 | 	Estorno de extrato papel
44	 | 	Estorno de processamento duplicado de débito - Visa Pedágio
102	 | 	ESTORNO TARIFA DE ANTECIPACAO DE RECEBIMENTO DE VENDAS
103	 | 	MASTERCARD: ESTORNO TAXA DE ANTECIPACAO
104	 | 	ESTORNO COMPENSACAO DE DEBITOS PENDENTES
105	 | 	DEBITO PENDENTE
106	 | 	REVERSAO DE CANCELAMENTO VISA
107	 | 	ESTORNO ALUGUEL POS FIXO
108	 | 	ESTORNO ALUGUEL POS MOVEL
109	 | 	ESTORNO ALUGUEL PINPAD
110	 | 	ESTORNO ALUGUEL MPOS MOBILE
111	 | 	ESTORNO ALUGUEL CHECKOUT MOVEL
112	 | 	DESCONTO INCONDICIONAL: TARIFA ALUGUEL POS
113	 | 	DESCONTO INCONDICIONAL: TARIFA ALUGUEL TEF
114	 | 	DESCONTO INCONDICIONAL: TARIFA ALUGUEL PIN PAD
115	 | 	DESCONTO INCONDICIONAL: TARIFA SERVICO INSTALACAO
116	 | 	DESCONTO INCONDICIONAL: TARIFA ADESAO
117	 | 	DESCONTO INCONDICIONAL: TARIFA POR INATIVIDADE
118	 | 	DESCONTO INCONDICIONAL: TARIFA POR MANUTENCAO
119	 | 	DESCONTO INCONDICIONAL: TARIFA SERVICO CONECTIVIDADE
120	 | 	DESCONTO  CONDICIONAL: TARIFA ALUGUEL POS
121	 | 	DESCONTO  CONDICIONAL: TARIFA ALUGUEL TEF
122	 | 	DESCONTO  CONDICIONAL: TARIFA ALUGUEL PIN PAD
123	 | 	DESCONTO  CONDICIONAL: TARIFA SERVICO INSTALACAO
124	 | 	DESCONTO  CONDICIONAL: TARIFA POR INATIVIDADE
125	 | 	DESCONTO  CONDICIONAL: TARIFA POR MANUTENCAO
126	 | 	DESCONTO  CONDICIONAL: TARIFA SERVICO CONECTIVIDADE
127	 | 	ELO ESTORNO TAXA DE ANTECIPACAO
128	 | 	ESTORNO SEGURO EQUIPAMENTO
129	 | 	HIPERCARD: REVERSAO DE CANCELAMENTO
130	 | 	AMEX: ESTORNO TAXA DE ANTECIPACAO
131	 | 	HIPERCARD: ESTORNO TAXA DE ANTECIPACAO
132	 | 	ESTORNO ALUGUEL MOBILE TEF
133	 | 	ESTORNO ALUGUEL POS-TEF
134	 | 	ESTORNO COBRANCA TERMINAL DANIFICADO
135	 | 	CREDITO DEBITO PENDENTE
136	 | 	ESTORNO MULTA DE VOP MAESTRO
137	 | 	ESTORNO MULTA DE VOP VISA ELECT
138	 | 	ESTORNO MULTA DE VOP ELO DEB
139	 | 	ESTORNO MULTA DE VOP MASTERCARD
140	 | 	ESTORNO MULTA DE VOP VISA
141	 | 	ESTORNO MULTA DE VOP ELO CRED
142	 | 	ESTORNO MULTA DE VOP AMEX CRED
143	 | 	ESTORNO MULTA DE VOP HIPERCARD CRED
144	 | 	REVERSAO DE CANCELAMENTO MASTERCARD
145	 | 	PAGTO DE COMISSAO REC DE CELULAR
146	 | 	SAFRAPAY DIGITAL - PAGAMENTO REJEITADO
147	 | 	ALUGUEL - ESTORNO PGTO VIA BOLETO
148	 | 	DEV 100.00 TAXA PAGA DIGITAL
149	 | 	EQUIPAMENTO - ESTORNO PGTO VIA BOLETO
150	 | 	DEBITO PENDENTE
151	 | 	CREDITO DEBITO PENDENTE
152	 | 	CREDITO BLACK FRIDAY SAFRAPAY
153	 | 	CREDITO ENTREGA MAQUINA SAFRAPAY
154	 | 	COMPENSACAO CHARGEBACK
155	 | 	CANCELAMENTO VENDA POR DEP BANCARIO
156	 | 	CREDITO DEBITO PENDENTE
157	 | 	LIQUIDACAO DE DEBITO - COBRANCA EXTRA JUDICIAL
158	 | 	AJUSTE INTERNO COBRANÇA ALUGUEL
159	 | 	AJUSTE INTERNO COBRANCA TAXA
160	 | 	AJUSTE INTERNO COBRANCA TAXA ANTECIPACAO
161	 | 	AJUSTE INTERNO ESTORNO MDR ANTECIPACAO
162	 | 	AJUSTE INTERNO ESTORNO TAXA
163	 | 	AJUSTE INTERNO MULTA VOP
164	 | 	SALDO RETIDO CONTA CORRENTE FRAUDE
165	 | 	SALDO RETIDO CARD SCHEME NULO FRAUDE
166	 | 	ESTORNO CBK FRAUDE
167	 | 	ESTORNO CBK DISPUTA CONSUMIDOR
168	 | 	OUTROS AJUSTES A CREDITO
169	 | 	SALDO RETIDO CANCELAMENTO
170	 | 	AMEX - PAGAMENTO NAO PROCESSADO
171	 | 	AMEX  PAGAMENTO NAO PROCESSADO
172	 | 	SALDO RETIDO ALUGUEL
173	 | 	CREDITO TRANSACAO PIX
174	 | 	AMEX REVERSAO DE CHARGEBACK
175	 | 	ELO CREDITO PAGAMENTO NAO PROCESSADO
176	 | 	ELO DEBITO PAGAMENTO NAO PROCESSADO
177	 | 	ELO CREDITO PAGAMENTO NAO PROCESSADO
178	 | 	REVERSAO CHARGEBACK ELO CREDITO
179	 | 	REVERSAO CHARGEBACK ELO DEBITO
180	 | 	HIPERCARD: PAGAMENTO NAO PROCESSADO
181	 | 	HIPERCARD PAGAMENTO NAO PROCESSADO
182	 | 	HIPERCARD: REVERSAO DE CHARGEBACK
183	 | 	MASTERCARD PAGAMENTO NAO PROCESSADO
184	 | 	MAESTRO PAGAMENTO NAO PROCESSADO
185	 | 	MASTERCARD PAGAMENTO NAO PROCESSADO
186	 | 	REVERSAO DE CHARGEBACK MASTERCARD
187	 | 	REVERSAO DE CHARGEBACK MAESTRO
188	 | 	VISA PAGAMENTO NAO PROCESSADO
189	 | 	VISA ELECTRON PGTO NAO PROCESSADO
190	 | 	VISA PAGAMENTO NAO PROCESSADO
191	 | 	REVERSAO DE CHARGEBACK VISA
192	 | 	WALLET CREDITO PAGAMENTO REJEITADO - TRADICIONAL
193	 | 	WALLET DEBITO PAGAMENTO REJEITADO - TRADICIONAL
194	 | 	WALLET CREDITO PAGAMENTO REJEITADO
195	 | 	REVERSAO DE CHARGEBACK WALLET CREDITO
196	 | 	REVERSAO DE CHARGEBACK WALLET DEBITO
197	 | 	REVERSAO DE CHARGEBACK DIGITAL CREDITO
198	 | 	REVERSAO DE CHARGEBACK DIGITAL DEBITO
199	 | 	TAXA ADMINISTRATIVA
200	 | 	TARIFA ADMINISTRATIVA
201	 | 	TARIFA DE CONECTIVIDADE
202	 | 	TARIFA DE INSTALACAO
203	 | 	TARIFA DE SERVICOS DE INFORMACOES
204	 | 	TARIFA DE SERVICOS DE ATENDIMENTO
205	 | 	TAXA DE ANTECIPACAO DE RECEBIMENTO DE VENDAS
206	 | 	TARIFA DE ANTECIPACAO DE RECEBIMENTO DE VENDAS
207	 | 	COBRANCA TERMINAL DANIFICADO
208	 | 	AJUSTE CANCELAMENTO DE VENDA
209	 | 	DEBITO COMPENSACAO VALORES PENDENTES
210	 | 	TARIFA POR MANUTENCAO
211	 | 	TARIFA ADESAO
212	 | 	TARIFA POR INATIVIDADE
213	 | 	MULTA DE VOP MAESTRO
214	 | 	MULTA DE VOP VISA ELECT
215	 | 	MULTA DE VOP ELO DEB
216	 | 	MULTA DE VOP MASTERCARD
217	 | 	MULTA DE VOP VISA
218	 | 	MULTA DE VOP ELO CRED
219	 | 	MULTA DE VOP AMEX CRED
220	 | 	MULTA DE VOP HIPERCARD CRED
221	 | 	EST DE COMISSAO REC DE CELULAR
222	 | 	DEBITO ENTREGA MAQUINA SAFRAPAY
223	 | 	OUTROS AJUSTES A DEBITO
224	 | 	AMEX - REGULARIZACAO DE CREDITO INDEVIDO
225	 | 	DEBITO TRANSACAO PIX
226	 | 	ELO CREDITO REGULARIZACAO DE CREDITO INDEVIDO
227	 | 	ELO DEBITO REGULARIZACAO DE CREDITO INDEVIDO
228	 | 	HIPERCARD: REGULARIZACAO DE CREDITO INDEVIDO
229	 | 	MASTERCARD REGULARIZACAO DE CREDITO INDEVIDO
230	 | 	MAESTRO REGULARIZACAO DE CREDITO INDEVIDO
231	 | 	VISA  REGULARIZACAO DE CREDITO INDEVIDO
232	 | 	VISA ELETRON REGULARIZACAO DE CREDITO INDEVIDO
233	 | 	SERVICO DE ALUGUEL
234	 | 	ALUGUEL POS FIXO
235	 | 	ALUGUEL POS MOVEL
236	 | 	ALUGUEL PINPAD
237	 | 	ALUGUEL MPOS MOBILE
238	 | 	ALUGUEL CHECK OUT MOVEL
239	 | 	ALUGUEL SMARTPOS
240	 | 	ALUGUEL MOBILE TEF
241	 | 	ALUGUEL POS-TEF
242	 | 	LIQUIDACAO DE AJUSTES
243	 | 	DEBITO CHARGEBACK HIPERCARD: MERCADORIA SERVICO NAO CONFERE OU DEFEITO
244	 | 	DEBITO CHARGEBACK HIPERCARD: SERVICO NAO PRESTADO PRODUTO NAO RECEBIDO
245	 | 	DEBITO CHARGEBACK HIPERCARD: COBRANCA TAXA HOTEL NAO COMPARECIMENTO
246	 | 	DEBITO CHARGEBACK HIPERCARD: CREDITO NAO PROCESSADO
247	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
248	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
249	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
250	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
251	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
252	 | 	DEBITO CHARGEBACK MASTERCARD: VALOR DIVERGENTE OU PAGTO POR OUTROS MEIOS
253	 | 	DEBITO CHARGEBACK MASTERCARD: VENDA DUPLICADA
254	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
255	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
256	 | 	DEBITO CHARGEBACK MASTERCARD: PAGAMENTO PERIODICO CANCELADO
257	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
258	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
259	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
260	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
261	 | 	DEBITO CHARGEBACK MASTERCARD: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
262	 | 	DEBITO CHARGEBACK MASTERCARD: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
263	 | 	DEBITO CHARGEBACK MASTERCARD: COBRANCA TAXA HOTEL NAO COMPARECIMENTO
264	 | 	DEBITO CHARGEBACK MASTERCARD: CREDITO NAO PROCESSADO
265	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
266	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
267	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
268	 | 	DEBITO CHARGEBACK MAESTRO: CORRECAO DE UM CHARGEBACK
269	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
270	 | 	DEBITO CHARGEBACK MAESTRO: VALOR DA TRANSACAO DIVERGENTE
271	 | 	DEBITO CHARGEBACK MAESTRO: VENDA DUPLICADA
272	 | 	DEBITO CHARGEBACK MAESTRO: TRANSAÇAO SEM AUTORIZACAO DO PORTADOR
273	 | 	DEBITO CHARGEBACK MAESTRO: CREDITO NAO PROCESSADO
274	 | 	DEBITO CHARGEBACK MAESTRO: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
275	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
276	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
277	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
278	 | 	DEBITO CHARGEBACK VISA: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
279	 | 	DEBITO CHARGEBACK VISA: PAGAMENTO PERIODICO CANCELADO
280	 | 	DEBITO CHARGEBACK VISA: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
281	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
282	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
283	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
284	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
285	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
286	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
287	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
288	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
289	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
290	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
291	 | 	DEBITO CHARGEBACK VISA: VALOR DA TRANSAÇAO DIVERGENTE
292	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
293	 | 	DEBITO CHARGEBACK VISA: VENDA DUPLICADA
294	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
295	 | 	DEBITO CHARGEBACK VISA: CREDITO NAO PROCESSADO
296	 | 	DEBITO CHARGEBACK VISA: PAGAMENTO POR OUTROS MEIOS
297	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
298	 | 	DEBITO CHARGEBACK VISA: TRANSAÇAO EXCEDE O LIMITE DO TERMINAL
299	 | 	DEBITO CHARGEBACK ELO: MERCADORIA NAO RECEBIDA E OU SERVICO NAO PRESTADO
300	 | 	DEBITO CHARGEBACK ELO: PAGAMENTO PERIODICO CANCELADO
301	 | 	DEBITO CHARGEBACK ELO: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
302	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
303	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
304	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
305	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
306	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
307	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
308	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
309	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
310	 | 	DEBITO CHARGEBACK ELO: VALOR DA TRANSAÇAO DIVERGENTE
311	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
312	 | 	DEBITO CHARGEBACK ELO: VENDA DUPLICADA
313	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
314	 | 	DEBITO CHARGEBACK ELO: CREDITO NAO PROCESSADO
315	 | 	DEBITO CHARGEBACK ELO: PAGAMENTO POR OUTROS MEIOS
316	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
317	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
318	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
319	 | 	DEBITO CHARGEBACK AMEX: VALOR DIVERGENTE
320	 | 	DEBITO CHARGEBACK AMEX: VENDA DUPLICADA
321	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
322	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
323	 | 	DEBITO CHARGEBACK AMEX: PAGAMENTO PERIODICO CANCELADO
324	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
325	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
326	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
327	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
328	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
329	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
330	 | 	DEBITO CHARGEBACK AMEX: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
331	 | 	DEBITO CHARGEBACK AMEX: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
332	 | 	DEBITO CHARGEBACK AMEX: CREDITO NAO PROCESSADO
333	 | 	DEBITO CHARGEBACK AMEX: PAGAMENTO POR OUTROS MEIOS
334	 | 	DEBITO CHARGEBACK AMEX: TAXA DE ALUGUEL DE AUTOMOVEIS IMPROCEDENTE
335	 | 	DEBITO CHARGEBACK AMEX: DISPUTA LEGAL
336	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
337	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
338	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
339	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
340	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
341	 | 	DEBITO CHARGEBACK HIPERCARD: VALOR DIVERGENTE OU PAGTO POR OUTROS MEIOS
342	 | 	DEBITO CHARGEBACK HIPERCARD: VENDA DUPLICADA
343	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
344	 | 	DEBITO CHARGEBACK HIPERCARD: PAGAMENTO PERIODICO CANCELADO
345	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
346	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
347	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
348	 | 	AJUSTE CBK FRAUDE
349	 | 	AJUSTE CBK DISPUTA CONSUMIDOR
350	 | 	CHARGEBACK WALLET CREDITO
351	 | 	CHARGEBACK WALLET DEBITO
352	 | 	CHARGEBACK SAFRAPAY DIGITAL CREDITO
353	 | 	CHARGEBACK SAFRAPAY DIGITAL DEBITO
354	 | 	DESCONTO  CONDICIONAL: TARIFA ADESAO
355	 | 	ELO/CRD/COMPRA
356	 | 	ELO/CRD/REVERSAL
357	 | 	ELO/CRD/CANCELAMENTO
358	 | 	ELO/DEB/COMPRA
359	 | 	ELO/DEB/REVERSAL
360	 | 	ELO/DEB/CANCELAMENTO
361	 | 	ELO/PARCELADO/COMPRA
362	 | 	ELO/PARCELADO/REVERSAL
363	 | 	ELO/PARCELADO/CANCELAMENTO
364	 | 	FEE AMEX/CRD/COMPRA
365	 | 	FEE AMEX/CRD/REVERSAL
366	 | 	FEE AMEX/CRD/CANCELAMENTO
367	 | 	FEE AMEX/PARCELADO/COMPRA
368	 | 	FEE AMEX/PARCELADO/REVERSAL
369	 | 	FEE AMEX/PARCELADO/CANCELAMENTO
370	 | 	FEE ELO/CRD/COMPRA
371	 | 	FEE ELO/CRD/REVERSAL
372	 | 	FEE ELO/CRD/CANCELAMENTO
373	 | 	FEE ELO/DEB/COMPRA
374	 | 	FEE ELO/DEB/REVERSAL
375	 | 	FEE ELO/DEB/CANCELAMENTO
376	 | 	FEE ELO/PARCELADO/COMPRA
377	 | 	FEE ELO/PARCELADO/REVERSAL
378	 | 	FEE ELO/PARCELADO/CANCELAMENTO
379	 | 	FEE HIPERCARD/CRD/COMPRA
380	 | 	FEE HIPERCARD/CRD/REVERSAL
381	 | 	FEE HIPERCARD/CRD/CANCELAMENTO
382	 | 	FEE HIPERCARD/PARCELADO/COMPRA
383	 | 	FEE HIPERCARD/PARCELADO/REVERSAL
384	 | 	FEE HIPERCARD/PARCELADO/CANCELAMENTO
385	 | 	FEE MASTERCARD/CRD/COMPRA
386	 | 	FEE MASTERCARD/CRD/REVERSAL
387	 | 	FEE MASTERCARD/CRD/CANCELAMENTO
388	 | 	FEE MASTERCARD/DEB/COMPRA
389	 | 	FEE MASTERCARD/DEB/REVERSAL
390	 | 	FEE MASTERCARD/DEB/CANCELAMENTO
391	 | 	FEE MASTERCARD/PARCELADO/COMPRA
392	 | 	FEE MASTERCARD/PARCELADO/REVERSAL
393	 | 	FEE MASTERCARD/PARCELADO/CANCELAMENTO
394	 | 	FEE VISA/CRD/COMPRA
395	 | 	FEE VISA/CRD/REVERSAL
396	 | 	FEE VISA/CRD/CANCELAMENTO
397	 | 	FEE VISA/DEB/COMPRA
398	 | 	FEE VISA/DEB/REVERSAL
399	 | 	FEE VISA/DEB/CANCELAMENTO
400	 | 	FEE VISA/PARCELADO/COMPRA
401	 | 	FEE VISA/PARCELADO/REVERSAL
402	 | 	FEE VISA/PARCELADO/CANCELAMENTO
403	 | 	FEE SAFRAPAY DIGITAL/CRD/COMPRA
404	 | 	FEE SAFRAPAY DIGITAL/CRD/REVERSAL
405	 | 	FEE SAFRAPAY DIGITAL/CRD/CANCELAMENTO
406	 | 	FEE SAFRAPAY DIGITAL/DEB/COMPRA
407	 | 	FEE SAFRAPAY DIGITAL/DEB/REVERSAL
408	 | 	FEE SAFRAPAY DIGITAL/DEB/CANCELAMENTO
409	 | 	HIPERCARD/CRD/COMPRA
410	 | 	HIPERCARD/CRD/REVERSAL
411	 | 	HIPERCARD/CRD/CANCELAMENTO
412	 | 	HIPERCARD/PARCELADO/COMPRA
413	 | 	HIPERCARD/PARCELADO/REVERSAL
414	 | 	HIPERCARD/PARCELADO/CANCELAMENTO
415	 | 	MASTERCARD CRD COMPRA
416	 | 	MASTERCARD CRD REVERSAL
417	 | 	MASTERCARD CRD CANCELAMENTO
418	 | 	MASTERCARD DEB COMPRA
419	 | 	MASTERCARD DEB REVERSAL
420	 | 	MASTERCARD DEB CANCELAMENTO
421	 | 	MASTERCARD PARCELADO COMPRA
422	 | 	MASTERCARD PARCELADO REVERSAL
423	 | 	MASTERCARD PARCELADO CANCELAMENTO
424	 | 	AJUSTE CANC AMEX/CRD/COMPRA
425	 | 	AJUSTE CANC AMEX/PARCELADO/COMPRA
426	 | 	AJUSTE CANC ELO/CRD/COMPRA
427	 | 	AJUSTE CANC ELO/PARCELADO/COMPRA
428	 | 	AJUSTE CANC HIPERCARD/CRD/COMPRA
429	 | 	AJUSTE CANC HIPERCARD/PARCELADO/COMPRA
430	 | 	AJUSTE CANC MASTERCARD CRD COMPRA
431	 | 	AJUSTE CANC MASTERCARD PARCELADO COMPRA
432	 | 	AJUSTE CANC VISA/CRD/COMPRA
433	 | 	AJUSTE CANC VISA/PARCELADO/COMPRA
434	 | 	AJUSTE CANC SAFRAPAY DIGITAL/CRD/COMPRA
435	 | 	SERVICE FEE DEFAULT
436	 | 	SERVICO SEGURO EQUIPAMENTO
437	 | 	SEGURO EQUIPAMENTO
438	 | 	SALDO EM ABERTO - AJUSTES
439	 | 	VISA/CRD/COMPRA
440	 | 	VISA/CRD/REVERSAL
441	 | 	VISA/CRD/CANCELAMENTO
442	 | 	VISA/DEB/COMPRA
443	 | 	VISA/DEB/REVERSAL
444	 | 	VISA/DEB/CANCELAMENTO
445	 | 	VISA/PARCELADO/COMPRA
446	 | 	VISA/PARCELADO/REVERSAL
447	 | 	VISA/PARCELADO/CANCELAMENTO
448	 | 	SAFRAPAY DIGITAL/CRD/COMPRA
449	 | 	SAFRAPAY DIGITAL/CRD/REVERSAL
450	 | 	SAFRAPAY DIGITAL/CRD/CANCELAMENTO
451	 | 	SAFRAPAY DIGITAL/DEB/COMPRA
452	 | 	SAFRAPAY DIGITAL/DEB/REVERSAL
453	 | 	SAFRAPAY DIGITAL/DEB/CANCELAMENTO

<!-- END graphql-markdown -->
