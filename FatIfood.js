cube(`FatIfood`, {
  sql: `SELECT * FROM delivery.fat_ifood`,
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    main: {
      measures: [FatIfood.skDimStatus, FatIfood.skFatIfood],
      dimensions: [DimCliente.nomeCliente],
      timeDimension: DimDataPedido.diaData,
      granularity: `day`
    }
  },
  joins: {
    DimCliente: {
      relationship: `belongsTo`,
      sql: `${FatIfood}.sk_dim_cliente = ${DimCliente.skDimCliente}`
    },
    DimStatus: {
      relationship: `belongsTo`,
      sql: `${FatIfood}.sk_dim_status = ${DimStatus.skDimStatus}`
    },
    // DimTipoOcorrencia: {
    //   relationship: `hasMany`,
    //   sql: `${FatIfood}.sk_dim_tipo_ocorrencia = ${DimTipoOcorrencia.skDimTipoOcorrencia}`
    // },
    DimPlataforma: {
      relationship: `belongsTo`,
      sql: `${FatIfood}.sk_dim_plataforma = ${DimPlataforma.skDimPlataforma}`
    },
    DimEstabelecimento: {
      relationship: `belongsTo`,
      sql: `${FatIfood}.sk_dim_estabelecimento = ${DimEstabelecimento.skDimEstabelecimento}`
    },
    DimDataPedido: {
      relationship: `belongsTo`,
      sql: `${FatIfood}.sk_dim_data_pedido = ${DimDataPedido.skDimDataPedido}`
    }
    
  },
  measures: {
    totalPedido: {
      type: `count`,
      drillMembers: [skFatIfood]
    },
    valorTotalPedido: {
      sql: `billing_gmv`,
      type: `sum`
    },
    valorTotalItens: {
      sql: `billing_total_bag`,
      type: `sum`
    },
    valorTaxaEntrega: {
      sql: `billing_delivery_fee`,
      type: `sum`
    },
    valorBeneficioIfood: {
      sql: `billing_benefit_ifood`,
      type: `sum`
    },
    valorBeneficioMerchant: {
      sql: `billing_benefit_merchant`,
      type: `sum`
    },
    valorComissao: {
      sql: `billing_commission`,
      type: `sum`
    },
    valorTaxaAdquirente: {
      sql: `billing_acquirer_fee`,
      type: `sum`
    },
    valorComissaoCobrada: {
      sql: `billing_delivery_commission`,
      type: `sum`
    },
    valorComissaoPedido: {
      sql: `billing_commission_rate`,
      type: `sum`
    },
    taxaPercentualAdquirente: {
      sql: `billing_acquirer_fee_rate`,
      type: `sum`
    },
    valorPagoIfood: {
      sql: `billing_total_debit`,
      type: `sum`
    },
    valorPagoMerchant: {
      sql: `billing_total_credit`,
      type: `sum`
    },
    valorTaxaAntecipacao: {
      sql: `billing_anticipation_fee`,
      type: `sum`
    },
    valorTaxaAntecipacaoPercentual: {
      sql: `billing_anticipation_fee_rate`,
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
    ultimaDataProcessamento: {
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
    skDimStatus: {
      sql: `sk_dim_status`,
      type: `number`
    },
    skDimDataPedido: {
      sql: `sk_dim_data_pedido`,
      type: `number`
    },
    skFatIfood: {
      sql: `sk_fat_ifood`,
      type: `number`,
      primaryKey: true
    }
  },
  segments: {
    sfUsers: {
      sql: `${FatIfood}.sk_dim_status = 1`
    }
  },
  dataSource: `default`
});