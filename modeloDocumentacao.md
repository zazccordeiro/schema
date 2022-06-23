# Guia de schemas 

Esta documentação tem como objetivo ser um facilitador e propor autonomia para o melhor aproveitamento do cubo de dados.

<!-- START graphql-markdown -->

<details>
  <summary><strong>Campos e Requisições</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [Alias](#alias)
  * [Scalars](#scalars)
    * [ASIN](#asin)
  * [Interfaces](#interfaces)
    * [Entity](#entity)
    * [Node](#node)

</details>

## Informações de medidas

As informações abaixo estão catalogadas e descritas de acordo com cada grupo de dados.

## Medidadas de valores

### Cobrança

Detalhes de valores de cobrança do cliente.

<table>
<tbody>
<tr>
<th valign="center">Campo</th>
<th valign="center">Tipo</th>
<th valign="center">Descrição</th>
</tr>
<tr>
<td valign="center"><strong>quantidadeTotalPedido</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td valign= "center"> Essa informação é referente a quantidade total de pedidos, no caso uma contagem que não se refere à valores monetários.

<tr>
<td valign="center"><strong>valorTotalPedido.gmv</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td valign= "center">

Esse dado se refere ao valor total dos itens pedidos + valor da taxa de entrega.

</td>
</tr>
<tr>
<td valign="center"><strong>valorTotalItens</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Essa informação é referente ao valor total dos itens solicitados.

</td>
</tr>
<tr>
<td valign="center"><strong>valorTaxaEntrega</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Esse dado se refere a taxa de entrega.

</td>
</tr>
<tr>
<td valign="center"><strong>valorBeneficioIfood</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor do subsídio financeiro do iFood no pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>valorBeneficioMerchant</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor do subsídio financeiro do parceiro no pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>valorComissao</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor total da comissão.

</td>
</tr>
<tr>
<td valign="center"><strong>valorTaxaAdquirente</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor da taxa cobrada pelo adquirente referente ao pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>valorComissaoCobrada</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor da comissão cobrada quando o modelo de negócio é ON_DEMAND, HYBRID ou HYBRID_REGION.

</td>
</tr>
<tr>
<td valign="center"><strong>valorComissaoPedido</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Percentual de comissão cobrado para o pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>taxaPercentualAdquirente</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Percentual de taxa cobrada pelo adquirente referente ao pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>valorPagoIfood</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor pago para o ifood referente às taxas.

</td>
</tr>
<tr>
<td valign="center"><strong>valorPagoMerchant</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor pago ao merchant (subtraído o valor total pago ao Ifood).

</td>
</tr>
<tr>
<td valign="center"><strong>valorTaxaAntecipacao</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor da taxa de antecipação cobrado referente ao pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>valorTaxaAntecipacaoPercentual</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Percentual da taxa de antecipação cobrado referente a ao pedido.

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td  valign="center"><strong>dataOcorrencia</strong></td>
<td valign="center"><a href="#String">String</a></td>
<td>

Data e hora em que foi realizada a transação, ou seja, que houve a ocorrência.

</td>
</tr>
<tr>
<td  valign="center"><strong>dataUltimaDataProcessamento</strong></td>
<td valign="center"><a href="Datetime">Datetime</a></td>
<td>

Referente a data/hora do último processamento do pedido.

## Dimensões

### Dimensão cliente 

<table>
<tbody>
<tr>
<th valign="center">Campo</th>
<th valign="center">Tipo</th>
<th valign="center">Descrição</th>
</tr>
<tr>
<td valign="center"><strong>clienteId</strong></td>
<td valign="center"><a href="#uuid">uuid</a></td>
<td>

Código de identificação único do cliente.

</td>
</tr>
<tr>
<td valign="center"><strong>numeroDocumentoCliente</strong></td>
<td valign="center"><a href="#String">String</a></td>
<td>

Número do documento do cliente (cpf) que deve ser utilizado somente para emissão de documento fiscal quando o cliente solicitar,
pois o campo é opcional.

</td>
</tr>
<tr>
<td valign="center"><strong>nomeCliente</strong></td>
<td valign="center"><a href="#String">String</a></td>
<td>

Nome cliente.

</td>
</tr>
<tr>
<td valign="center"><strong>numeroTelefoneCliente</strong></td>
<td valign="center"><a href="#String">String</a></td>
<td>

Número de telefone do cliente ou do 0800 fornecido pelo iFood.

</td>
</tr>
<tr>
<td valign="center"><strong>dateFrom</strong></td>
<td valign="center"><a href="#String">String</a></td>
<td>

Número de telefone do cliente ou do 0800 fornecido pelo iFood.



<!-- END graphql-markdown -->
