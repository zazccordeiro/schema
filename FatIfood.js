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
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_cliente = ${DimCliente.skDimCliente}`
    },
    DimStatus: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_status = ${DimStatus.skDimStatus}`
    },
    // DimTipoOcorrencia: {
    //   relationship: `hasMany`,
    //   sql: `${FatIfood}.sk_dim_tipo_ocorrencia = ${DimTipoOcorrencia.skDimTipoOcorrencia}`
    // },
    DimPlataforma: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_plataforma = ${DimPlataforma.skDimPlataforma}`
    },
    DimEstabelecimento: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_estabelecimento = ${DimEstabelecimento.skDimEstabelecimento}`
    },
    DimDataPedido: {
      relationship: `hasMany`,
      sql: `${FatIfood}.sk_dim_data_pedido = ${DimDataPedido.skDimDataPedido}`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [skFatIfood]
    },
    billingGmv: {
      sql: `billing_gmv`,
      type: `sum`
    },
    billingTotalBag: {
      sql: `billing_total_bag`,
      type: `sum`
    },
    billingDeliveryFee: {
      sql: `billing_delivery_fee`,
      type: `sum`
    },
    billingBenefitIfood: {
      sql: `billing_benefit_ifood`,
      type: `sum`
    },
    billingBenefitMerchant: {
      sql: `billing_benefit_merchant`,
      type: `sum`
    },
    billingCommission: {
      sql: `billing_commission`,
      type: `sum`
    },
    billingAcquirerFee: {
      sql: `billing_acquirer_fee`,
      type: `sum`
    },
    billingDeliveryCommission: {
      sql: `billing_delivery_commission`,
      type: `sum`
    },
    billingCommissionRate: {
      sql: `billing_commission_rate`,
      type: `sum`
    },
    billingAcquirerFeeRate: {
      sql: `billing_acquirer_fee_rate`,
      type: `sum`
    },
    billingTotalDebit: {
      sql: `billing_total_debit`,
      type: `sum`
    },
    billingTotalCredit: {
      sql: `billing_total_credit`,
      type: `sum`
    },
    billingAnticipationFee: {
      sql: `billing_anticipation_fee`,
      type: `sum`
    },
    billingAnticipationFeeRate: {
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