# Schema Types

You may also be interested in reading the [schema in GraphQL syntax](schema.md)
or the schemas provided by the [built-in extensions](extensions).

<!-- START graphql-markdown -->

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [Alias](#alias)
    * [Area](#area)
    * [AreaConnection](#areaconnection)
    * [AreaEdge](#areaedge)
    * [Artist](#artist)
    * [ArtistConnection](#artistconnection)
    * [ArtistCredit](#artistcredit)
    * [ArtistEdge](#artistedge)
    * [BrowseQuery](#browsequery)
    * [Collection](#collection)
    * [CollectionConnection](#collectionconnection)
    * [CollectionEdge](#collectionedge)
    * [Coordinates](#coordinates)
    * [Disc](#disc)
    * [Event](#event)
    * [EventConnection](#eventconnection)
    * [EventEdge](#eventedge)
    * [Instrument](#instrument)
    * [InstrumentConnection](#instrumentconnection)
    * [InstrumentEdge](#instrumentedge)
    * [Label](#label)
    * [LabelConnection](#labelconnection)
    * [LabelEdge](#labeledge)
    * [LifeSpan](#lifespan)
    * [LookupQuery](#lookupquery)
    * [Medium](#medium)
    * [PageInfo](#pageinfo)
    * [Place](#place)
    * [PlaceConnection](#placeconnection)
    * [PlaceEdge](#placeedge)
    * [Rating](#rating)
    * [Recording](#recording)
    * [RecordingConnection](#recordingconnection)
    * [RecordingEdge](#recordingedge)
    * [Relationship](#relationship)
    * [RelationshipConnection](#relationshipconnection)
    * [RelationshipEdge](#relationshipedge)
    * [Relationships](#relationships)
    * [Release](#release)
    * [ReleaseConnection](#releaseconnection)
    * [ReleaseEdge](#releaseedge)
    * [ReleaseEvent](#releaseevent)
    * [ReleaseGroup](#releasegroup)
    * [ReleaseGroupConnection](#releasegroupconnection)
    * [ReleaseGroupEdge](#releasegroupedge)
    * [SearchQuery](#searchquery)
    * [Series](#series)
    * [SeriesConnection](#seriesconnection)
    * [SeriesEdge](#seriesedge)
    * [Tag](#tag)
    * [TagConnection](#tagconnection)
    * [TagEdge](#tagedge)
    * [Track](#track)
    * [URL](#url)
    * [Work](#work)
    * [WorkConnection](#workconnection)
    * [WorkEdge](#workedge)
  * [Enums](#enums)
    * [ReleaseGroupType](#releasegrouptype)
    * [ReleaseStatus](#releasestatus)
  * [Scalars](#scalars)
    * [ASIN](#asin)
    * [Boolean](#boolean)
    * [Date](#date)
    * [Degrees](#degrees)
    * [DiscID](#discid)
    * [Duration](#duration)
    * [Float](#float)
    * [ID](#id)
    * [IPI](#ipi)
    * [ISNI](#isni)
    * [ISRC](#isrc)
    * [ISWC](#iswc)
    * [Int](#int)
    * [Locale](#locale)
    * [MBID](#mbid)
    * [String](#string)
    * [Time](#time)
    * [URLString](#urlstring)
  * [Interfaces](#interfaces)
    * [Entity](#entity)
    * [Node](#node)

</details>

## Query
The query root, from which multiple types of MusicBrainz
requests can be made.

<table>
<thead>
<tr>
<th valign="center">Field</th>
<th valign="center">Argument</th>
<th valign="center">Type</th>
<th valign="center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td  valign="center"><strong>lookup</strong></td>
<td valign="center"><a href="#lookupquery">LookupQuery</a></td>
<td>

Perform a lookup of a MusicBrainz entity by its MBID.

</td>
</tr>
<tr>
<td  valign="center"><strong>browse</strong></td>
<td valign="center"><a href="#browsequery">BrowseQuery</a></td>
<td>

Browse all MusicBrainz entities directly linked to another entity.

</td>
</tr>
<tr>
<td  valign="center"><strong>search</strong></td>
<td valign="center"><a href="#searchquery">SearchQuery</a></td>
<td>

Search for MusicBrainz entities using Lucene query syntax.

</td>
</tr>
<tr>
<td  valign="center"><strong>node</strong></td>
<td valign="center"><a href="#node">Node</a></td>
<td>

Fetches an object given its ID

</td>
</tr>
<tr>
<td  valign="center" valign="center">id</td>
<td valign="center"><a href="#id">ID</a>!</td>
<td>

The ID of an object

</td>
</tr>
</tbody>
</table>

## Measures

### Detalhes de valores de cobrança

<table>
<tbody>
<tr>
<th valign="center">Campo</th>
<th valign="center">Tipo</th>
<th valign="center">Descrição</th>
</tr>
<tr>
<td valign="center"><strong>billing.gmv</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Este campo se refere à total_bag + delivery_fee

</td>
</tr>
<tr>
<td valign="center"><strong>billing.totalBag</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Soma dos itens contidos no pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.deliveryFee</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor da taxa de entrega

</td>
</tr>
<tr>
<td valign="center"><strong>billing.benefitIfood</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor do subsídio financeiro do iFood no pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.benefitMerchant</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor do subsídio financeiro do parceiro no pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.commission</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Total do valor da comissão.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.acquirerFee</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor da taxa cobrada pelo adquirente referente ao pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>vbilling.deliveryCommission</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Comissão cobrada quando o modelo de negócio é ON_DEMAND, HYBRID ou HYBRID_REGION

</td>
</tr>
<tr>
<td valign="center"><strong>billing.commissionRate</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Percentual de comissão cobrado para o pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.commissionRate</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Percentual de comissão cobrado para o pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.acquirerFeeRate</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Percentual de taxa cobrada pelo adquirente referente ao pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.totalDebit</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor pago para o ifood referente às taxas.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.totalCredit</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor pago ao merchant (subtraído o total debit).

</td>
</tr>
<tr>
<td valign="center"><strong>billing.anticipationFee</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Valor da taxa de antecipação cobrado referente a ao pedido.

</td>
</tr>
<tr>
<td valign="center"><strong>billing.anticipationFeeRate</strong></td>
<td valign="center"><a href="#Double">Double</a></td>
<td>

Percentual da taxa de antecipação cobrado referente a ao pedido.

</td>
</tr>
</tbody>
</table>

### Informações gerais

Abaixo seguem descrições gerais.


<table>
<thead>
<tr>
<th valign="center">Campo</th>
<th valign="center">Tipo</th>
<th valign="rigth">Descrição</th>
</tr>
</thead>
<tbody>
</tr>
</thead>
<tbody>
<tr>
<td  valign="center"><strong>dataCancelamento</strong></td>
<td valign="center"><a href="#string">string</a></td>
<td>

Data do cancelamento no formato YYYY-MM-DD.

</td>
</tr>
<tr>
<td  valign="center"><strong>dataPedido</strong></td>
<td valign="center"><a href="#string">string</a></td>
<td>

Data de criação do pedido no formato YYYY-MM-DD.

</td>
</tr>
<tr>
<td  valign="center"><strong>dataOcorrencia</strong></td>
<td valign="center"><a href="#string">String</a></td>
<td>

Data e hora em que foi realizada a transação, ou seja, que houve a ocorrência.

</td>
</tr>
<tr>
<td  valign="center"><strong>dataUltimaDataProcessamento</strong></td>
<td valign="center"><a href="Datetime">Datetime</a></td>
<td>

Referente a data/hora do último processamento do pedido.


<!-- END graphql-markdown -->
