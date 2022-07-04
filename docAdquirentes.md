# Guia de atributos e métricas

Esta documentação tem como objetivo ser um facilitador e propor autonomia para o melhor aproveitamento do cubo de dados.


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
  * [Métrica](#métrica)
    * [Adquirente arquivo processado](#adquirente-arquivo-processado)
    * [Adquirente fluxo](#adquirente-fluxo)
  * [Tabela auxiliar](#tabela-auxiliar)
    * [Tabela de adquirentes](#tabela-de-adquirentes)
    * [Tabela de ajustes](#tabela-de-ajustes)
    * [Tabela de arranjos](#tabela-de-arranjos)
    * [Tabela de faixa de parcelamento](#tabela-de-faixa-de-parcelamento)
    * [Tabela de meios de captura](#tabela-de-meios-de-captura)


# Atributo

O documento abaixo tem como propósito familiarizar o usuário com cada atributo com os termos, para isso cada atributo é disponíbilizado com sua descrição.

## Adquirente

Neste atributo deverá ser informado a informação de **adquirente** do usuário.

  Campo     | Descrição
----------- | ------------------
codigoAdquirente | Codígo identificador da adquirente.
nomeAdquirente | Nome da adquirente.


_Para facilitar em sua consulta utilize o guia de [adquirentes](#tabela-de-adquirentes)._

## Ajuste

Neste atributo é possível identificar o tipo de ajuste realizado de uma forma mais especifica do que o atributo ["Tipo de ajuste"](#tipo-de-ajuste), no qual ao decorrer desta documentação você poderá ver o mesmo de uma forma agrupada.

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

## Tempo

**PEGAR DO CUBEJS DEPOIS DE FINALIZADO**

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

# Métrica

## Adquirente arquivo processado

  Campo     | Descrição
----------- | ------------------
## Adquirente fluxo

  Campo     | Descrição
----------- | ------------------
## Código

  Campo     | Descrição
----------- | ------------------

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

## Tabela de ajustes

codigoAjuste   | nomeAjuste
----------- | ------------------
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
57	 | 	Mercadoria com defeito ou diferente da descrição
58	 | 	Transação irregular
59	 | 	Mercadoria não foi entregue
60	 | 	Serviços não prestados
3	 | 	Mercadoria/Serviços defeituosos ou não coincidem com a descrição
61	 | 	Venda sem código de autorização
62	 | 	Número de cartão inválido
63	 | 	Cópia do comprovante / documento inválido
65	 | 	Comprovante / documento ilegível
4	 | 	Mercadoria falsificada
66	 | 	Venda sem leitura de chip
67	 | 	Venda em outra moeda
68	 | 	Venda processada incorretamente
69	 | 	Venda cancelada
5	 | 	Declaração enganosa
70	 | 	Crédito em duplicidade
71	 | 	Documentos não recebidos
72	 | 	Pagamento realizado por outros meios
6	 | 	Crédito não processado
73	 | 	Equipamento perdido / roubado
77	 | 	Multa por excesso de chargeback
78	 | 	Serviços Score
7	 | 	Mercadorias/Serviços cancelados
79	 | 	Reagendamento do débito de antecipação
80	 | 	Ajuste do débito de cessão
8	 | 	Transação de crédito original não aceita
81	 | 	Cielo e-Commerce
85	 | 	Cielo Controle (Excedente)
9	 | 	Não recebimento de dinheiro ou de valor de transação de carga
86	 | 	Cielo Controle (Franquia)
10	 | 	Encerramento  Disputa
11	 | 	Abertura Pré-Chargeback
90	 | 	Débito/crédito compensação de valores
12	 | 	Encerramento  Pré- Chargeback
13	 | 	Recarga com cartão
91	 | 	Estorno debito/crédito de cessão
14	 | 	Agendamento Saque CIP
92	 | 	Estorno débito/crédito de gravame
15	 | 	Saque Aprovado CIP
93	 | 	Meliuz
16	 | 	Remuneração de Conta
17	 | 	Transferência  Conta Digital PagBank
18	 | 	Saque Cancelado
19	 | 	Débito divisão de pagamento
20	 | 	Crédito divisão de pagamento
21	 | 	Aquisição do Envio fácil
22	 | 	Aporte para aquisição do envio Fácil
23	 | 	Crédito EC – referente contestação portador
24	 | 	Crédito por cancelamento rejeitado – Cielo
94	 | 	Débito/crédito compensação cancelamento de transação em operação
95	 | 	Débito/crédito de penhora
96	 | 	Estorno de crédito/débito de penhora
97	 | 	Débito/crédito compensação cancelamento em operação
99	 | 	Tarifa por retentativa de transações (bandeiras)
A11	 | 	AMEX/CRD/COMPRA
A12	 | 	AMEX/CRD/REVERSAL
A13	 | 	AMEX/CRD/CANCELAMENTO
A31	 | 	AMEX/PARCELADO/COMPRA
A32	 | 	AMEX/PARCELADO/REVERSAL
A33	 | 	AMEX/PARCELADO/CANCELAMENTO
AC01	 | 	ESTORNO TAXA ADMINISTRATIVA
AC02	 | 	ESTORNO TARIFA ADMINISTRATIVA
AC03	 | 	REVERSAO DE CANCELAMENTO ELO
AC04	 | 	ESTORNO TARIFA SERVICO DE CONECTIVIDADE
AC05	 | 	ESTORNO TARIFA DE INSTALACAO
AC06	 | 	ESTORNO TARIFA DE SERVICOS DE INFORMACOES
AC07	 | 	ESTORNO TARIFA DE SERVICOS DE ATENDIMENTO
AC08	 | 	VISA: ESTORNO TAXA DE ANTECIPACAO
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
AC09	 | 	ESTORNO TARIFA DE ANTECIPACAO DE RECEBIMENTO DE VENDAS
AC10	 | 	MASTERCARD: ESTORNO TAXA DE ANTECIPACAO
AC11	 | 	ESTORNO COMPENSACAO DE DEBITOS PENDENTES
AC12	 | 	DEBITO PENDENTE
AC13	 | 	REVERSAO DE CANCELAMENTO VISA
AC14	 | 	ESTORNO ALUGUEL POS FIXO
AC15	 | 	ESTORNO ALUGUEL POS MOVEL
AC16	 | 	ESTORNO ALUGUEL PINPAD
AC17	 | 	ESTORNO ALUGUEL MPOS MOBILE
AC18	 | 	ESTORNO ALUGUEL CHECKOUT MOVEL
AC19	 | 	DESCONTO INCONDICIONAL: TARIFA ALUGUEL POS
AC20	 | 	DESCONTO INCONDICIONAL: TARIFA ALUGUEL TEF
AC21	 | 	DESCONTO INCONDICIONAL: TARIFA ALUGUEL PIN PAD
AC22	 | 	DESCONTO INCONDICIONAL: TARIFA SERVICO INSTALACAO
AC23	 | 	DESCONTO INCONDICIONAL: TARIFA ADESAO
AC24	 | 	DESCONTO INCONDICIONAL: TARIFA POR INATIVIDADE
AC25	 | 	DESCONTO INCONDICIONAL: TARIFA POR MANUTENCAO
AC26	 | 	DESCONTO INCONDICIONAL: TARIFA SERVICO CONECTIVIDADE
AC27	 | 	DESCONTO  CONDICIONAL: TARIFA ALUGUEL POS
AC28	 | 	DESCONTO  CONDICIONAL: TARIFA ALUGUEL TEF
AC29	 | 	DESCONTO  CONDICIONAL: TARIFA ALUGUEL PIN PAD
AC30	 | 	DESCONTO  CONDICIONAL: TARIFA SERVICO INSTALACAO
AC32	 | 	DESCONTO  CONDICIONAL: TARIFA POR INATIVIDADE
AC33	 | 	DESCONTO  CONDICIONAL: TARIFA POR MANUTENCAO
AC34	 | 	DESCONTO  CONDICIONAL: TARIFA SERVICO CONECTIVIDADE
AC35	 | 	ELO ESTORNO TAXA DE ANTECIPACAO
AC36	 | 	ESTORNO SEGURO EQUIPAMENTO
AC37	 | 	HIPERCARD: REVERSAO DE CANCELAMENTO
AC38	 | 	AMEX: ESTORNO TAXA DE ANTECIPACAO
AC39	 | 	HIPERCARD: ESTORNO TAXA DE ANTECIPACAO
AC40	 | 	ESTORNO ALUGUEL MOBILE TEF
AC41	 | 	ESTORNO ALUGUEL POS-TEF
AC42	 | 	ESTORNO COBRANCA TERMINAL DANIFICADO
AC43	 | 	CREDITO DEBITO PENDENTE
AC51	 | 	ESTORNO MULTA DE VOP MAESTRO
AC52	 | 	ESTORNO MULTA DE VOP VISA ELECT
AC53	 | 	ESTORNO MULTA DE VOP ELO DEB
AC54	 | 	ESTORNO MULTA DE VOP MASTERCARD
AC55	 | 	ESTORNO MULTA DE VOP VISA
AC56	 | 	ESTORNO MULTA DE VOP ELO CRED
AC57	 | 	ESTORNO MULTA DE VOP AMEX CRED
AC58	 | 	ESTORNO MULTA DE VOP HIPERCARD CRED
AC59	 | 	REVERSAO DE CANCELAMENTO MASTERCARD
AC60	 | 	PAGTO DE COMISSAO REC DE CELULAR
AC61	 | 	SAFRAPAY DIGITAL - PAGAMENTO REJEITADO
AC62	 | 	ALUGUEL - ESTORNO PGTO VIA BOLETO
AC63	 | 	DEV 100.00 TAXA PAGA DIGITAL
AC64	 | 	EQUIPAMENTO - ESTORNO PGTO VIA BOLETO
AC65	 | 	DEBITO PENDENTE
AC66	 | 	CREDITO DEBITO PENDENTE
AC67	 | 	CREDITO BLACK FRIDAY SAFRAPAY
AC68	 | 	CREDITO ENTREGA MAQUINA SAFRAPAY
AC69	 | 	COMPENSACAO CHARGEBACK
AC70	 | 	CANCELAMENTO VENDA POR DEP BANCARIO
AC71	 | 	CREDITO DEBITO PENDENTE
AC72	 | 	LIQUIDACAO DE DEBITO - COBRANCA EXTRA JUDICIAL
AC73	 | 	AJUSTE INTERNO COBRANÇA ALUGUEL
AC74	 | 	AJUSTE INTERNO COBRANCA TAXA
AC75	 | 	AJUSTE INTERNO COBRANCA TAXA ANTECIPACAO
AC76	 | 	AJUSTE INTERNO ESTORNO MDR ANTECIPACAO
AC77	 | 	AJUSTE INTERNO ESTORNO TAXA
AC78	 | 	AJUSTE INTERNO MULTA VOP
AC79	 | 	SALDO RETIDO CONTA CORRENTE FRAUDE
AC80	 | 	SALDO RETIDO CARD SCHEME NULO FRAUDE
AC81	 | 	ESTORNO CBK FRAUDE
AC82	 | 	ESTORNO CBK DISPUTA CONSUMIDOR
AC99	 | 	OUTROS AJUSTES A CREDITO
ACA0	 | 	SALDO RETIDO CANCELAMENTO
ACA1	 | 	AMEX - PAGAMENTO NAO PROCESSADO
ACA2	 | 	AMEX  PAGAMENTO NAO PROCESSADO
ACA3	 | 	SALDO RETIDO ALUGUEL
ACA6	 | 	CREDITO TRANSACAO PIX
ACAX	 | 	AMEX REVERSAO DE CHARGEBACK
ACE1	 | 	ELO CREDITO PAGAMENTO NAO PROCESSADO
ACE2	 | 	ELO DEBITO PAGAMENTO NAO PROCESSADO
ACE3	 | 	ELO CREDITO PAGAMENTO NAO PROCESSADO
ACEC	 | 	REVERSAO CHARGEBACK ELO CREDITO
ACED	 | 	REVERSAO CHARGEBACK ELO DEBITO
ACH1	 | 	HIPERCARD: PAGAMENTO NAO PROCESSADO
ACH2	 | 	HIPERCARD PAGAMENTO NAO PROCESSADO
ACHP	 | 	HIPERCARD: REVERSAO DE CHARGEBACK
ACM1	 | 	MASTERCARD PAGAMENTO NAO PROCESSADO
ACM2	 | 	MAESTRO PAGAMENTO NAO PROCESSADO
ACM3	 | 	MASTERCARD PAGAMENTO NAO PROCESSADO
ACMC	 | 	REVERSAO DE CHARGEBACK MASTERCARD
ACMD	 | 	REVERSAO DE CHARGEBACK MAESTRO
ACV1	 | 	VISA PAGAMENTO NAO PROCESSADO
ACV2	 | 	VISA ELECTRON PGTO NAO PROCESSADO
ACV3	 | 	VISA PAGAMENTO NAO PROCESSADO
ACVI	 | 	REVERSAO DE CHARGEBACK VISA
ACW1	 | 	WALLET CREDITO PAGAMENTO REJEITADO - TRADICIONAL
ACW2	 | 	WALLET DEBITO PAGAMENTO REJEITADO - TRADICIONAL
ACW3	 | 	WALLET CREDITO PAGAMENTO REJEITADO
ACW4	 | 	REVERSAO DE CHARGEBACK WALLET CREDITO
ACW5	 | 	REVERSAO DE CHARGEBACK WALLET DEBITO
ACW6	 | 	REVERSAO DE CHARGEBACK DIGITAL CREDITO
ACW7	 | 	REVERSAO DE CHARGEBACK DIGITAL DEBITO
AD01	 | 	TAXA ADMINISTRATIVA
AD02	 | 	TARIFA ADMINISTRATIVA
AD04	 | 	TARIFA DE CONECTIVIDADE
AD05	 | 	TARIFA DE INSTALACAO
AD06	 | 	TARIFA DE SERVICOS DE INFORMACOES
AD07	 | 	TARIFA DE SERVICOS DE ATENDIMENTO
AD08	 | 	TAXA DE ANTECIPACAO DE RECEBIMENTO DE VENDAS
AD09	 | 	TARIFA DE ANTECIPACAO DE RECEBIMENTO DE VENDAS
AD10	 | 	COBRANCA TERMINAL DANIFICADO
AD14	 | 	AJUSTE CANCELAMENTO DE VENDA
AD15	 | 	DEBITO COMPENSACAO VALORES PENDENTES
AD17	 | 	TARIFA POR MANUTENCAO
AD18	 | 	TARIFA ADESAO
AD19	 | 	TARIFA POR INATIVIDADE
AD51	 | 	MULTA DE VOP MAESTRO
AD52	 | 	MULTA DE VOP VISA ELECT
AD53	 | 	MULTA DE VOP ELO DEB
AD54	 | 	MULTA DE VOP MASTERCARD
AD55	 | 	MULTA DE VOP VISA
AD56	 | 	MULTA DE VOP ELO CRED
AD57	 | 	MULTA DE VOP AMEX CRED
AD58	 | 	MULTA DE VOP HIPERCARD CRED
AD60	 | 	EST DE COMISSAO REC DE CELULAR
AD68	 | 	DEBITO ENTREGA MAQUINA SAFRAPAY
AD99	 | 	OUTROS AJUSTES A DEBITO
ADA1	 | 	AMEX - REGULARIZACAO DE CREDITO INDEVIDO
ADA7	 | 	DEBITO TRANSACAO PIX
ADE1	 | 	ELO CREDITO REGULARIZACAO DE CREDITO INDEVIDO
ADE2	 | 	ELO DEBITO REGULARIZACAO DE CREDITO INDEVIDO
ADH1	 | 	HIPERCARD: REGULARIZACAO DE CREDITO INDEVIDO
ADM1	 | 	MASTERCARD REGULARIZACAO DE CREDITO INDEVIDO
ADM2	 | 	MAESTRO REGULARIZACAO DE CREDITO INDEVIDO
ADV1	 | 	VISA  REGULARIZACAO DE CREDITO INDEVIDO
ADV2	 | 	VISA ELETRON REGULARIZACAO DE CREDITO INDEVIDO
AL	 | 	SERVICO DE ALUGUEL
AL01	 | 	ALUGUEL POS FIXO
AL02	 | 	ALUGUEL POS MOVEL
AL03	 | 	ALUGUEL PINPAD
AL04	 | 	ALUGUEL MPOS MOBILE
AL05	 | 	ALUGUEL CHECK OUT MOVEL
AL06	 | 	ALUGUEL SMARTPOS
AL07	 | 	ALUGUEL MOBILE TEF
AL08	 | 	ALUGUEL POS-TEF
ALAJ	 | 	LIQUIDACAO DE AJUSTES
C100	 | 	DEBITO CHARGEBACK HIPERCARD: MERCADORIA SERVICO NAO CONFERE OU DEFEITO
C101	 | 	DEBITO CHARGEBACK HIPERCARD: SERVICO NAO PRESTADO PRODUTO NAO RECEBIDO
C102	 | 	DEBITO CHARGEBACK HIPERCARD: COBRANCA TAXA HOTEL NAO COMPARECIMENTO
C103	 | 	DEBITO CHARGEBACK HIPERCARD: CREDITO NAO PROCESSADO
C104	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
C105	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
CB01	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB02	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB03	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB04	 | 	DEBITO CHARGEBACK MASTERCARD: VALOR DIVERGENTE OU PAGTO POR OUTROS MEIOS
CB05	 | 	DEBITO CHARGEBACK MASTERCARD: VENDA DUPLICADA
CB06	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB07	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB08	 | 	DEBITO CHARGEBACK MASTERCARD: PAGAMENTO PERIODICO CANCELADO
CB09	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB10	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB11	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB12	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB13	 | 	DEBITO CHARGEBACK MASTERCARD: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
CB14	 | 	DEBITO CHARGEBACK MASTERCARD: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
CB15	 | 	DEBITO CHARGEBACK MASTERCARD: COBRANCA TAXA HOTEL NAO COMPARECIMENTO
CB16	 | 	DEBITO CHARGEBACK MASTERCARD: CREDITO NAO PROCESSADO
CB17	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB18	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB19	 | 	DEBITO CHARGEBACK MASTERCARD: PORTADOR NAO RECONHECE A VENDA
CB20	 | 	DEBITO CHARGEBACK MAESTRO: CORRECAO DE UM CHARGEBACK
CB21	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
CB22	 | 	DEBITO CHARGEBACK MAESTRO: VALOR DA TRANSACAO DIVERGENTE
CB23	 | 	DEBITO CHARGEBACK MAESTRO: VENDA DUPLICADA
CB24	 | 	DEBITO CHARGEBACK MAESTRO: TRANSAÇAO SEM AUTORIZACAO DO PORTADOR
CB25	 | 	DEBITO CHARGEBACK MAESTRO: CREDITO NAO PROCESSADO
CB26	 | 	DEBITO CHARGEBACK MAESTRO: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
CB27	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
CB28	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
CB29	 | 	DEBITO CHARGEBACK MAESTRO: PORTADOR NAO RECONHECE A VENDA
CB30	 | 	DEBITO CHARGEBACK VISA: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
CB31	 | 	DEBITO CHARGEBACK VISA: PAGAMENTO PERIODICO CANCELADO
CB32	 | 	DEBITO CHARGEBACK VISA: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
CB33	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB34	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB35	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB36	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB37	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB38	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB39	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB40	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB41	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB42	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB43	 | 	DEBITO CHARGEBACK VISA: VALOR DA TRANSAÇAO DIVERGENTE
CB44	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB45	 | 	DEBITO CHARGEBACK VISA: VENDA DUPLICADA
CB46	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB47	 | 	DEBITO CHARGEBACK VISA: CREDITO NAO PROCESSADO
CB48	 | 	DEBITO CHARGEBACK VISA: PAGAMENTO POR OUTROS MEIOS
CB49	 | 	DEBITO CHARGEBACK VISA: PORTADOR NAO RECONHECE A VENDA
CB50	 | 	DEBITO CHARGEBACK VISA: TRANSAÇAO EXCEDE O LIMITE DO TERMINAL
CB51	 | 	DEBITO CHARGEBACK ELO: MERCADORIA NAO RECEBIDA E OU SERVICO NAO PRESTADO
CB52	 | 	DEBITO CHARGEBACK ELO: PAGAMENTO PERIODICO CANCELADO
CB53	 | 	DEBITO CHARGEBACK ELO: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
CB54	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB55	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB56	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB57	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB58	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB59	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB60	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB61	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB62	 | 	DEBITO CHARGEBACK ELO: VALOR DA TRANSAÇAO DIVERGENTE
CB63	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB64	 | 	DEBITO CHARGEBACK ELO: VENDA DUPLICADA
CB65	 | 	DEBITO CHARGEBACK ELO: PORTADOR NAO RECONHECE A VENDA
CB66	 | 	DEBITO CHARGEBACK ELO: CREDITO NAO PROCESSADO
CB67	 | 	DEBITO CHARGEBACK ELO: PAGAMENTO POR OUTROS MEIOS
CB68	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB69	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB70	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB71	 | 	DEBITO CHARGEBACK AMEX: VALOR DIVERGENTE
CB72	 | 	DEBITO CHARGEBACK AMEX: VENDA DUPLICADA
CB73	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB74	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB75	 | 	DEBITO CHARGEBACK AMEX: PAGAMENTO PERIODICO CANCELADO
CB76	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB77	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB78	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB79	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB80	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB81	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB82	 | 	DEBITO CHARGEBACK AMEX: MERCADORIA/SERVICO NAO CONFERE OU DEFEITO
CB83	 | 	DEBITO CHARGEBACK AMEX: SERVICO NAO PRESTADO/PRODUTO NAO RECEBIDO
CB84	 | 	DEBITO CHARGEBACK AMEX: CREDITO NAO PROCESSADO
CB85	 | 	DEBITO CHARGEBACK AMEX: PAGAMENTO POR OUTROS MEIOS
CB86	 | 	DEBITO CHARGEBACK AMEX: TAXA DE ALUGUEL DE AUTOMOVEIS IMPROCEDENTE
CB87	 | 	DEBITO CHARGEBACK AMEX: DISPUTA LEGAL
CB88	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB89	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB90	 | 	DEBITO CHARGEBACK AMEX: PORTADOR NAO RECONHECE A VENDA
CB91	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
CB92	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
CB93	 | 	DEBITO CHARGEBACK HIPERCARD: VALOR DIVERGENTE OU PAGTO POR OUTROS MEIOS
CB94	 | 	DEBITO CHARGEBACK HIPERCARD: VENDA DUPLICADA
CB95	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
CB96	 | 	DEBITO CHARGEBACK HIPERCARD: PAGAMENTO PERIODICO CANCELADO
CB97	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
CB98	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
CB99	 | 	DEBITO CHARGEBACK HIPERCARD: PORTADOR NAO RECONHECE A VENDA
CBAA	 | 	AJUSTE CBK FRAUDE
CBAB	 | 	AJUSTE CBK DISPUTA CONSUMIDOR
CBW1	 | 	CHARGEBACK WALLET CREDITO
CBW2	 | 	CHARGEBACK WALLET DEBITO
CBW3	 | 	CHARGEBACK SAFRAPAY DIGITAL CREDITO
CBW4	 | 	CHARGEBACK SAFRAPAY DIGITAL DEBITO
DESC	 | 	DESCONTO  CONDICIONAL: TARIFA ADESAO
E11	 | 	ELO/CRD/COMPRA
E12	 | 	ELO/CRD/REVERSAL
E13	 | 	ELO/CRD/CANCELAMENTO
E21	 | 	ELO/DEB/COMPRA
E22	 | 	ELO/DEB/REVERSAL
E23	 | 	ELO/DEB/CANCELAMENTO
E31	 | 	ELO/PARCELADO/COMPRA
E32	 | 	ELO/PARCELADO/REVERSAL
E33	 | 	ELO/PARCELADO/CANCELAMENTO
FA11	 | 	FEE AMEX/CRD/COMPRA
FA12	 | 	FEE AMEX/CRD/REVERSAL
FA13	 | 	FEE AMEX/CRD/CANCELAMENTO
FA31	 | 	FEE AMEX/PARCELADO/COMPRA
FA32	 | 	FEE AMEX/PARCELADO/REVERSAL
FA33	 | 	FEE AMEX/PARCELADO/CANCELAMENTO
FE11	 | 	FEE ELO/CRD/COMPRA
FE12	 | 	FEE ELO/CRD/REVERSAL
FE13	 | 	FEE ELO/CRD/CANCELAMENTO
FE21	 | 	FEE ELO/DEB/COMPRA
FE22	 | 	FEE ELO/DEB/REVERSAL
FE23	 | 	FEE ELO/DEB/CANCELAMENTO
FE31	 | 	FEE ELO/PARCELADO/COMPRA
FE32	 | 	FEE ELO/PARCELADO/REVERSAL
FE33	 | 	FEE ELO/PARCELADO/CANCELAMENTO
FH11	 | 	FEE HIPERCARD/CRD/COMPRA
FH12	 | 	FEE HIPERCARD/CRD/REVERSAL
FH13	 | 	FEE HIPERCARD/CRD/CANCELAMENTO
FH31	 | 	FEE HIPERCARD/PARCELADO/COMPRA
FH32	 | 	FEE HIPERCARD/PARCELADO/REVERSAL
FH33	 | 	FEE HIPERCARD/PARCELADO/CANCELAMENTO
FM11	 | 	FEE MASTERCARD/CRD/COMPRA
FM12	 | 	FEE MASTERCARD/CRD/REVERSAL
FM13	 | 	FEE MASTERCARD/CRD/CANCELAMENTO
FM21	 | 	FEE MASTERCARD/DEB/COMPRA
FM22	 | 	FEE MASTERCARD/DEB/REVERSAL
FM23	 | 	FEE MASTERCARD/DEB/CANCELAMENTO
FM31	 | 	FEE MASTERCARD/PARCELADO/COMPRA
FM32	 | 	FEE MASTERCARD/PARCELADO/REVERSAL
FM33	 | 	FEE MASTERCARD/PARCELADO/CANCELAMENTO
FV11	 | 	FEE VISA/CRD/COMPRA
FV12	 | 	FEE VISA/CRD/REVERSAL
FV13	 | 	FEE VISA/CRD/CANCELAMENTO
FV21	 | 	FEE VISA/DEB/COMPRA
FV22	 | 	FEE VISA/DEB/REVERSAL
FV23	 | 	FEE VISA/DEB/CANCELAMENTO
FV31	 | 	FEE VISA/PARCELADO/COMPRA
FV32	 | 	FEE VISA/PARCELADO/REVERSAL
FV33	 | 	FEE VISA/PARCELADO/CANCELAMENTO
FW11	 | 	FEE SAFRAPAY DIGITAL/CRD/COMPRA
FW12	 | 	FEE SAFRAPAY DIGITAL/CRD/REVERSAL
FW13	 | 	FEE SAFRAPAY DIGITAL/CRD/CANCELAMENTO
FW21	 | 	FEE SAFRAPAY DIGITAL/DEB/COMPRA
FW22	 | 	FEE SAFRAPAY DIGITAL/DEB/REVERSAL
FW23	 | 	FEE SAFRAPAY DIGITAL/DEB/CANCELAMENTO
H11	 | 	HIPERCARD/CRD/COMPRA
H12	 | 	HIPERCARD/CRD/REVERSAL
H13	 | 	HIPERCARD/CRD/CANCELAMENTO
H31	 | 	HIPERCARD/PARCELADO/COMPRA
H32	 | 	HIPERCARD/PARCELADO/REVERSAL
H33	 | 	HIPERCARD/PARCELADO/CANCELAMENTO
M11	 | 	MASTERCARD CRD COMPRA
M12	 | 	MASTERCARD CRD REVERSAL
M13	 | 	MASTERCARD CRD CANCELAMENTO
M21	 | 	MASTERCARD DEB COMPRA
M22	 | 	MASTERCARD DEB REVERSAL
M23	 | 	MASTERCARD DEB CANCELAMENTO
M31	 | 	MASTERCARD PARCELADO COMPRA
M32	 | 	MASTERCARD PARCELADO REVERSAL
M33	 | 	MASTERCARD PARCELADO CANCELAMENTO
RA11	 | 	AJUSTE CANC AMEX/CRD/COMPRA
RA31	 | 	AJUSTE CANC AMEX/PARCELADO/COMPRA
RE11	 | 	AJUSTE CANC ELO/CRD/COMPRA
RE31	 | 	AJUSTE CANC ELO/PARCELADO/COMPRA
RH11	 | 	AJUSTE CANC HIPERCARD/CRD/COMPRA
RH31	 | 	AJUSTE CANC HIPERCARD/PARCELADO/COMPRA
RM11	 | 	AJUSTE CANC MASTERCARD CRD COMPRA
RM31	 | 	AJUSTE CANC MASTERCARD PARCELADO COMPRA
RV11	 | 	AJUSTE CANC VISA/CRD/COMPRA
RV31	 | 	AJUSTE CANC VISA/PARCELADO/COMPRA
RW11	 | 	AJUSTE CANC SAFRAPAY DIGITAL/CRD/COMPRA
SDFT	 | 	SERVICE FEE DEFAULT
SE	 | 	SERVICO SEGURO EQUIPAMENTO
SE01	 | 	SEGURO EQUIPAMENTO
SLAJ	 | 	SALDO EM ABERTO - AJUSTES
V11	 | 	VISA/CRD/COMPRA
V12	 | 	VISA/CRD/REVERSAL
V13	 | 	VISA/CRD/CANCELAMENTO
V21	 | 	VISA/DEB/COMPRA
V22	 | 	VISA/DEB/REVERSAL
V23	 | 	VISA/DEB/CANCELAMENTO
V31	 | 	VISA/PARCELADO/COMPRA
V32	 | 	VISA/PARCELADO/REVERSAL
V33	 | 	VISA/PARCELADO/CANCELAMENTO
W11	 | 	SAFRAPAY DIGITAL/CRD/COMPRA
W12	 | 	SAFRAPAY DIGITAL/CRD/REVERSAL
W13	 | 	SAFRAPAY DIGITAL/CRD/CANCELAMENTO
W21	 | 	SAFRAPAY DIGITAL/DEB/COMPRA
W22	 | 	SAFRAPAY DIGITAL/DEB/REVERSAL
W23	 | 	SAFRAPAY DIGITAL/DEB/CANCELAMENTO

## Tabela de arranjos

codigoAranjo   | nomeArranjo |  tipoPagamento
----------- | ------------------ | -------------
AGC	 | 	Agiplan	 | 	CREDITO
BCC	 | 	Banescard Cartão de Crédito	 | 	CREDITO
ECV	 | 	Esplanada crédito à vista	 | 	CREDITO
CZC	 | 	CREDZ Crédito	 | 	CREDITO
EPL	 | 	Esplanada parcelado loja	 | 	CREDITO
CIC	 | 	Elo Crediário	 | 	CREDITO
MCC	 | 	Mastercard Cartão de Crédito	 | 	CREDITO
MCD	 | 	Mastercard Cartão de Débito	 | 	DEBITO
CICD	 | 	Elo Construcard	 | 	DEBITO
CIEA	 | 	Elo Agro Débito	 | 	DEBITO
CIEAC	 | 	Elo Agro Custeio	 | 	DEBITO
CIEAI	 | 	Elo Agro Investimento	 | 	DEBITO
CIEACD	 | 	Elo Agro Custeio + Débito	 | 	DEBITO
CIEAID	 | 	Elo Agro Investimento + Débito	 | 	DEBITO
DBC	 | 	Discover	 | 	CREDITO
DINCV	 | 	Diners crédito à vista	 | 	CREDITO
DINPL	 | 	Diners parcelado loja	 | 	CREDITO
VACD	 | 	Visa Agro Custeio + Débito	 | 	DEBITO
VAID	 | 	Visa Agro Investimento + Débito	 | 	DEBITO
FCI	 | 	FCO Investimento	 | 	DEBITO
AGE	 | 	Agro Electron	 | 	DEBITO
AGI	 | 	Agro Investimento	 | 	DEBITO
VCG	 | 	Visa FCO Giro	 | 	CREDITO
CIEVC	 | 	Visa crediário no crédito	 | 	CREDITO
VCC	 | 	Visa Cartão de Crédito	 | 	CREDITO
JCC	 | 	JCB Cartão de Crédito	 | 	CREDITO
CIVCD	 | 	Visa Saque com cartão de Débito	 | 	DEBITO
CIFCVV	 | 	Flex Car Visa Vale	 | 	DEBITO
CICCV	 | 	Credsystem crédito à vista	 | 	CREDITO
CICPL	 | 	Credsystem parcelado loja	 | 	CREDITO
CIVED	 | 	Visa Electron Débito à vista	 | 	DEBITO
CIVD	 | 	Visa Pedágio	 | 	DEBITO
CIVEPD	 | 	Visa Electron Pré-Datado	 | 	DEBITO
CIAR	 | 	Alelo Refeição	 | 	DEBITO
CIAA	 | 	Alelo Alimentação	 | 	DEBITO
CIEAM	 | 	Alelo Multibenefícios	 | 	DEBITO
CIEAA	 | 	Alelo Auto	 | 	DEBITO
SCD	 | 	Sorocred Cartão de Débito	 | 	DEBITO
SCC	 | 	Sorocred Cartão de Crédito	 | 	CREDITO
CIVC	 | 	Visa Crediário	 | 	CREDITO
CIVCG	 | 	Visa Capital de Giro	 | 	DEBITO
CIVCI	 | 	Visa Crédito Imobiliário	 | 	DEBITO
CIAC	 | 	Alelo Cultura	 | 	DEBITO
ECC	 | 	Elo Cartão de Crédito	 | 	CREDITO
CIEDV	 | 	Elo débito à vista	 | 	DEBITO
CIVCCE	 | 	Pagamento Carnê Visa Electron	 | 	CREDITO
CIVCCM	 | 	Visa Crédito Conversor de Moeda	 | 	CREDITO
CIMCE	 | 	Mastercard Crédito Especializado (*)	 | 	CREDITO
ACC	 | 	Amex Cartão de Crédito	 | 	CREDITO
CIECI	 | 	Elo Crédito Imobiliário	 | 	CREDITO
CIECE	 | 	Elo Crédito Especializado (*)	 | 	CREDITO
BCD	 | 	Banescard Cartão de Débito	 | 	DEBITO
CBC	 | 	Cabal Crédito	 | 	CREDITO
CBD	 | 	Cabal Débito	 | 	DEBITO
HCC	 | 	Hipercard Cartão de Crédito	 | 	CREDITO
HCD	 | 	Hiper Débito	 | 	DEBITO
VDC	 | 	Verdecard Cartão de Crédito	 | 	CREDITO
NUTA	 | 	Nutricash Alimentação	 | 	DEBITO
NUTR	 | 	Nutricash Refeição	 | 	DEBITO
NUTM	 | 	Nutricash Multibenefícios	 | 	DEBITO
NUTC	 | 	Nutricash Combustível	 | 	DEBITO
BENA	 | 	Ben Alimentação	 | 	DEBITO
BENR	 | 	Ben Refeição	 | 	DEBITO
OCD	 | 	Ourocard Cartão de Débito	 | 	DEBITO
OAC	 | 	Ourocard Agro custeio	 | 	DEBITO
OAI	 | 	Ourocard Agro investimento	 | 	DEBITO
OACD	 | 	Ourocard Agro custeio + débito	 | 	DEBITO
OAID	 | 	Ourocard Agro investimento + débito	 | 	DEBITO
CICC	 | 	Elo crediário no crédito	 | 	CREDITO
CIMP	 | 	Mastercard Pedágio	 | 	DEBITO
CIEC	 | 	Elo Carnê	 | 	CREDITO
CIMC	 | 	Mastercard Carnê	 | 	CREDITO
CIMCCM	 | 	Mastercard Crédito Conversor de Moeda	 | 	CREDITO
GETT	 | 	Título	 | 	DEBITO
GEC	 | 	Convênio	 | 	DEBITO
GECD	 | 	Crédito Digital	 | 	DEBITO
GECA	 | 	Crediário AMEX	 | 	CREDITO
GEH	 | 	Crediário HIPER/ HIPERCARD	 | 	CREDITO
GECM	 | 	Crediário Mastercard	 | 	CREDITO
GECP	 | 	Cupom Papel	 | 	DEBITO
GECE	 | 	Crediário Visa	 | 	CREDITO
ECD	 | 	Elo Cartão de Débito	 | 	DEBITO
GEPCDE	 | 	Pagamento Carnê – Débito ELO	 | 	DEBITO
GEPCDM	 | 	Pagamento Carnê – Débito Maestro	 | 	DEBITO
GEPR	 | 	Pagamento Recorrente	 | 	DEBITO
GEPCDV	 | 	Pagamento Carnê – Débito Visa Electron	 | 	DEBITO
VCD	 | 	Visa Cartão de Débito	 | 	DEBITO
STMNT	 | 	Movimentos Não Transacionais	 | 	DEBITO
STVA	 | 	Visa Antecipação	 | 	DEBITO
STMA	 | 	Mastercard Antecipação	 | 	DEBITO
STHA	 | 	Hiper Antecipação	 | 	DEBITO
STEA	 | 	American Express Antecipação	 | 	DEBITO
STBT	 | 	Boleto	 | 	DEBITO
STCA	 | 	Cabal Antecipação	 | 	DEBITO
STUD	 | 	UnionPay Débito	 | 	DEBITO
STUC	 | 	UnionPay Crédito	 | 	CREDITO
STUA	 | 	UnionPay Antecipação	 | 	DEBITO
DINC	 | 	Dinners credito	 | 	CREDITO
DIND	 | 	Dinners debito	 | 	DEBITO
SIC	 | 	Sicredi	 | 	CREDITO
SID	 | 	Sicred debito	 | 	DEBITO
CUPC	 | 	Cup Crédito	 | 	CREDITO
CCD	 | 	Calcard	 | 	CREDITO
CCC	 | 	Calcard debito	 | 	DEBITO
COC	 | 	Construcard credito	 | 	CREDITO
COD	 | 	Construcard debito	 | 	DEBITO
AVC	 | 	Avista	 | 	CREDITO
AVD	 | 	Avista debito	 | 	DEBITO
CREC	 | 	Credsystem credito	 | 	CREDITO
CRED	 | 	Credsystem debito	 | 	DEBITO
AMC	 | 	Amex Cartão de Crédito	 | 	CREDITO
AMD	 | 	Amex debito	 | 	DEBITO
ALC	 | 	Alelo credito	 | 	CREDITO
ALD	 | 	Alelo debito	 | 	DEBITO
JCD	 | 	Jcb debito	 | 	DEBITO
CZD	 | 	Credz debito	 | 	DEBITO
RDOT	 | 	Outros	 | 	DEBITO
ACD	 | 	Amex debito	 | 	DEBITO
SPDC	 | 	Safrapay Digital credito	 | 	CREDITO
SPCD	 | 	Safrapay Digital debito	 | 	DEBITO
SPPIX	 | 	Sist.Pag.Instant.	 | 	DEBITO
DCC	 | 	Diners	 | 	CREDITO
AUC	 | 	Aura	 | 	CREDITO
PSCP	 | 	Cartão de crédito PLENOCard.	 | 	CREDITO
PSCPC	 | 	Cartão de crédito PersonalCard.	 | 	CREDITO
BRC	 | 	Brasil Card	 | 	CREDITO
FRC	 | 	Fortbrasil	 | 	CREDITO
PSCB	 | 	Cartão de crédito CARDBAN.	 | 	CREDITO
PSCV	 | 	Cartão de crédito VALECARD.	 | 	CREDITO
MAC	 | 	Mais!	 | 	CREDITO
PSCG	 | 	Cartão de crédito GRANDCARD.	 | 	CREDITO
PSCU	 | 	Cartão de crédito Up Policard.	 | 	CREDITO
BNC	 | 	Banese Card	 | 	CREDITO
PSBBC	 | 	Boleto	 | 	DEBITO
PSST	 | 	Boleto	 | 	DEBITO
PSDBC	 | 	Débito online Bradesco.	 | 	DEBITO
PSDI	 | 	Débito online Itaú.	 | 	DEBITO
PSDU	 | 	Débito online Unibanco.	 | 	DEBITO
PSDBB	 | 	Débito online Banco do Brasil.	 | 	DEBITO
PSDBR	 | 	Débito online Banco Real.	 | 	DEBITO
PSDB	 | 	Débito online Banrisul.	 | 	DEBITO
PSDH	 | 	Débito online HSBC.	 | 	DEBITO
PSSP	 | 	Saldo PagSeguro.	 | 	DEBITO
PSPX	 | 	PIX.	 | 	DEBITO
PSOP	 | 	Oi Paggo.	 | 	DEBITO
PSDCB	 | 	Depósito em conta - Banco do Brasil	 | 	DEBITO

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
0 | LIO 
1 | POS (Point of Sale) | Máquina de recebível
2 | PDV (Ponto de Venda) ou TEF (Transferência Eletrônica de Fundos) 
3 | e-Commerce (Comércio Eletrônico) 
4 | EDI (Troca Eletrônica de Dados) 
5 | ADP/BSP (Empresa Capturadora) ou Reprocessamento
6 | Manual
7 | URA/CVA
8 | Mobile
9 | Moedeiro Eletrônico em Rede
99 | Não identificado

## Tabela de tipo de ajuste

codigoTipoAjuste | nomeFaixaAjuste
----------- | ------------------ 
1 | Acerto
2 | Acerto/Chargeback
3 | Cancelamento
4 | Bloqueio
5 | Cobrança
6 | Acerto/Cancelamento
7 | Acerto/Cobrança

## Tabela tipo de pagamento

codigoPagamento | nomePagamento
----------------| ------------------
0 | DEBITO
1 | CRÉDITO
2 | PARCELAMENTO


<!-- END graphql-markdown -->
