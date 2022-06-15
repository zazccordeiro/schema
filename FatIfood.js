cube(`FatIfood`, {
  sql: `SELECT * FROM conecta.fat_ifood`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    main: {
      measures: [FatIfood.ocurrencesAmount],
      dimensions: [DimCliente.nomeCliente],
      timeDimension: FatIfood.dataPrevistaPagamento,
      granularity: `day`
    }
  },
  joins: {
    DimCliente: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_cliente = ${DimCliente.skDimCliente}`,
    },
    DimTipoOcorrencia: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_tipo_ocorrencia = ${DimTipoOcorrencia.skDimTipoOcorrencia}`,
    },    
    DimPlataforma: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_plataforma = ${DimPlataforma.skDimPlataforma}`,
    },
    DimEstabelecimento: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_estabelecimento = ${DimEstabelecimento.skDimEstabelecimento}`,
    },
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [dataPedido]
    },
    ocurrencesAmount: {
      sql: `ocurrences_amount`,
      type: `sum`
    },
    cancellationsAmount: {
      sql: `cancellations_amount`,
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
    skDimCliente: {
      sql: `sk_dim_cliente`,
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
    skFatIfood: {
      sql: `sk_fat_ifood`,
      type: `number`,
      primaryKey: true
    }
  },
  dataSource: `default`
});