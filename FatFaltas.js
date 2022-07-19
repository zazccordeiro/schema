cube(`FatFaltas`, {
    sql: `SELECT * FROM public.fat_visita`,
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    joins: {
      Promotor: {
        relationship: `belongsTo`,
        sql: `${FatFaltas}.sk_dim_promotor = ${Promotor.skPromotor}`
      },
      DimEndereco: {
        relationship: `belongsTo`,
        sql: `${FatFaltas}.sk_dim_endereco = ${DimEndereco.skDimEndereco}`
      },
      Data: {
        relationship: `hasMany`,
        sql: `${FatFaltas}.sk_dim_data_id = ${Data.skDimDataId}`
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
          sql: `${DimDataPedido.diaData}`,
          type: `time`
      },
      skPromotor: {
        sql: `sk_dim_promotor`,
        type: `number`,
      },
      skDimEndereco: {
        sql: `sk_dim_endereco`,
        type: `number`,
      }

    },

    dataSource: `default`
  });