cube(`FatIfoodOcurrences`, {
    sql: `SELECT * FROM delivery.fat_ifood`,
    preAggregations: {// Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    joins: {
      DimCliente: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_cliente = ${DimCliente.skDimCliente}`,
      },
      DimStatus: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_status = ${DimStatus.skDimStatus}`,
      },
      DimTipoOcorrencia: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_tipo_ocorrencia = ${DimTipoOcorrencia.skDimTipoOcorrencia}`,
      },    
      DimPlataforma: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_plataforma = ${DimPlataforma.skDimPlataforma}`,
      },
      DimEstabelecimento: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_estabelecimento = ${DimEstabelecimento.skDimEstabelecimento}`,
      },
      DimDataPedido: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_data_pedido = ${DimDataPedido.skDimDataPedido}`,
      },
      DimDataOcorrencia: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_data_ocorrencia = ${DimDataOcorrencia.skDimDataOcorrencia}`,
      },
      DimDataPrevistaPagamento: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_data_prevista_pagamento = ${DimDataPrevistaPagamento.skDimDataPrevistaPagamento}`,
      },
      DimTipoPagamento: {
        relationship: `hasMany`,
        sql: `${FatIfoodOcurrences}.sk_dim_tipo_pagamento = ${DimTipoPagamento.skDimTipoPagamento}`
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    },
    measures: {
      totalOcorrencia: {
        type: `count`,
        drillMembers: [skFatIfoodOcurrences]
      },
      ocurrencesAmount: {
        sql: `ocurrences_amount`,
        type: `sum`
      }
  
    },
    dimensions: {
      dataPrevistaPagamento: {
        sql: `data_prevista_pagamento`,
        type: `time`
      },
      dataCancelamento: {
        sql: `data_cancelamento`,
        type: `time`
      },
      dataPedido: {
        sql: `data_pedido`,
        type: `time`
      },
      dataOcorrencia: {
        sql: `data_ocorrencia`,
        type: `time`
      },
      dataUltimaDataProcessamento: {
        sql: `data_ultima_data_processamento`,
        type: `time`
      },
      skDimTipoPagamento: {
        sql: `sk_dim_tipo_pagamento`,
        type: `number`
      },
      skDimCliente: {
        sql: `sk_dim_cliente`,
        type: `number`
      },
      skDimEstabelecimento: {
        sql: `sk_dim_estabelecimento`,
        type: `number`
      },
      skDimTipoOcorrencia: {
        sql: `sk_dim_tipo_ocorrencia`,
        type: `number`
      },
      skDimPlataforma: {
        sql: `sk_dim_plataforma`,
        type: `number`
      },
      skDimStatus: {
        sql: `sk_dim_status`,
        type: `number`
      },
      skDimDataPedido: {
        sql: `sk_dim_data_pedido`,
        type: `number`
      },
      skDimDataOcorrencia: {
        sql: `sk_dim_data_ocorrencia`,
        type: `number`
      },
      skDimDataPrevistaPagamento: {
        sql: `sk_dim_data_prevista_pagamento`,
        type: `number`
      },
      skFatIfoodOcurrences: {
        sql: `sk_fat_ifood`,
        type: `number`,
        primaryKey: true
      }
    },
    
    dataSource: `default`
  });