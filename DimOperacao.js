cube(`DimOperacao`, {
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
    skDimOperacao: {
      sql: `sk_dim_operacao`,
      type: `number`,
      primaryKey: true
    },
    operacao: {
      sql: `descricao`,
      type: `string`
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
