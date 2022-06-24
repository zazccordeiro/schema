cube(`FatFaltas`, {
    sql: `SELECT * FROM public.fat_visita`,
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
        relationship: `belongsTo`,
        sql: `${FatFaltas}.sk_dim_data_id = ${DimDataPedido.skDimDataPedido}`
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