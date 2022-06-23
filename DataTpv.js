cube(`DataTpv`, {
  sql: `SELECT * FROM public.dim_data`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    skDimDataId: {
      sql: `sk_dim_data_id`,
      type: `number`,
      primaryKey: true
    },
    
    ano: {
      sql: `numero_ano`,
      type: `number`
    },

    nomeMes: {
      sql: `nomes_mes`,
      type: `string`
    },
    
    nomeDia: {
      sql: `nome_dia`,
      type: `string`
    },
    
    diaData: {
      sql: `dia_data`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
