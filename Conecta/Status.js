cube(`Status`, {
  sql: `SELECT * FROM public.fat_status`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Operacao: {
      sql: `${Operacao}.sk_dim_operacao = ${Status}.sk_dim_operacao`,
      relationship: `belongsTo`
    },
      Promotor: {
        sql: `${Promotor}.sk_dim_promotor = ${Status}.sk_dim_promotor`,
        relationship: `belongsTo`
    },
      Data: {
        sql: `${Data}.sk_dim_data_id = ${Status}.sk_dim_data_id`,
        relationship: `hasMany`        
    },
      DimStatusCamunda: {
        sql: `${DimStatusCamunda}.sk_dim_status_camunda = ${Status}.sk_dim_status_camunda`,
        relationship: `hasMany`,
      }    
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
