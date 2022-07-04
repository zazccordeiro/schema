# Guia de dimensões de fatos das adquirentes
Esta documentação tem como objetivo ser um facilitador e propor autonomia para o melhor aproveitamento do cubo de dados.

<details>
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
</details>


# Atributo


## Adquirente

Neste atributo deverá ser informado a informação de adquirente do usuário.
  Campo     | Descrição
----------- | ------------------
codigoAdquirente | 
nomeAdquirente | 

_Para facilitar em sua consulta utilize o guia de [atributos](#adquirente-1) possíveis._

## Ajuste

Nesta dimensão é possível identificar o tipo de ajuste realizado (caso não tenha ocorrido algum ajuste, o mesmo virá como nulo).

  Campo     | Descrição
----------- | ------------------
 [Código](#código)  | Código do ajuste realizado.
  Ajuste    | Neste atributo é possível identificar o tipo de ajuste realizado . 

## Arranjo


  Campo     | Descrição
----------- | ------------------
## Faixa parcelamento


  Campo     | Descrição
----------- | ------------------
## Meio captura


  Campo     | Descrição
----------- | ------------------
## Tempo


  Campo     | Descrição
----------- | ------------------
## Tipo de ajuste


  Campo     | Descrição
----------- | ------------------
## Tipo de pagamento


  Campo     | Descrição
----------- | ------------------
# Métrica

  Campo     | Descrição
----------- | ------------------
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

## Adquirente

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

<!-- END graphql-markdown -->
