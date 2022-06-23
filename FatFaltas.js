cube(`FatFaltas`, {
    sql: `SELECT * FROM ${FatVisita}`,
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    joins: {
      DimPromotor: {
        relationship: `belongsTo`,
        sql: `${FatFaltas}.sk_dim_promotor = ${DimPromotor.skDimPromotor}`
      },
      DimEndereco: {
        relationship: `belongsTo`,
        sql: `${FatFaltas}.sk_dim_endereco = ${DimEndereco.skDimEndereco}`
      },
      DimDataPedido: {
        relationship: `hasMany`,
        sql: `${CUBE}.sk_dim_data_id = ${DimDataPedido.skDimDataPedido}`
      }
    },
    measures: {
      count: {
        type: `count`,
        drillMembers: [skIdVisita]
      },
    },
    dimensions: {
      skIdVisita: {
        sql: `idvisita`,
        type: `number`,
        primaryKey: true
      },
      dataVisita: {
          sql: `${DimDataPedido.diaDataTeste}`,
          type: `time`
      }
    },

    dataSource: `default`
  });