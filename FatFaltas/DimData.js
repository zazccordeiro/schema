cube(`DimDataPedido`, {
  sql: `SELECT * FROM public.dim_data`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {

  },
  
  dimensions: {       
    diaDataTeste: {
      sql: `dia_data`,
      type: `time`
    },
    skDimDataPedido: {
      sql: `sk_dim_data_id`,
      type: `number`,
      primaryKey: true
    }
  },
  
  
  dataSource: `default`
});
