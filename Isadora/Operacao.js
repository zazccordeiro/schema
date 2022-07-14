cube(`Operacao`, {
  sql: `SELECT * FROM public.dim_operacao`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dateFrom, dateTo]
    }
  },
  
  dimensions: {
      skOperacao: {
          sql: `sk_dim_operacao`,
          type: `number`,
          primaryKey: true
    },

      nomeOperacao: {
          sql: `descricao`,
          type: `string`
    },
    
      dateFrom: {
          sql: `date_from`,
          type: `time`,
          shown: false
    },
    
      dateTo: {
          sql: `date_to`,
          type: `time`,
          shown: false
    }
  },
  
  dataSource: `default`
});
