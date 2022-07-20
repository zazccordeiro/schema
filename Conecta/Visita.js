cube(`Visita`, {
  sql: `SELECT * FROM public.fat_visita`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Operacao: {
      sql: `${Operacao}.sk_dim_operacao = ${Visita}.sk_dim_operacao`,
      relationship: `belongsTo`
    },
      Promotor: {
        sql: `${Promotor}.sk_dim_promotor = ${Visita}.sk_dim_promotor`,
        relationship: `belongsTo`
    },
      Data: {
        sql: `${Data}.sk_dim_data_id = ${Visita}.sk_dim_data_id`,
        relationship: `hasMany`        
    },
      DimStatusCamunda: {
        sql: `${DimStatusCamunda}.sk_dim_status_camunda = ${Visita}.sk_dim_status_camunda`,
        relationship: `hasMany`
    },
      Regiao: {
      sql: `${Regiao}.sk_dim_regional = ${Visita}.sk_dim_regional`,
      relationship: `belongsTo`
    },  
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [procInstId]
    }
  },
  
  dimensions: {
    procInstId: {
      sql: `proc_inst_id_`,
      type: `string`,
      title: `Proc Inst Id `,
      primaryKey: true
    },

    skOperacao: {
      sql: `sk_dim_operacao`,
      type: `number`,
      shown: false
    },

    skPromotor: {
      sql: `sk_dim_promotor`,
      type: `number`,
      shown: false 
    },

    skRegiao: {
      sql: `sk_dim_regional`,
      type: `number`,
      shown: false
    },

    skData: {
      sql: `sk_dim_data_id`,
      type: `number`,
      shown: false
    },

    skDimStatusCamunda: {
      sql: `sk_dim_status_camunda`,
      type: `number`,
      shown: false
    }
  },
  
  dataSource: `default`
});
