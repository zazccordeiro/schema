cube(`DimPromotor`, {
  sql: `SELECT * FROM public.dim_promotor`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },

  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {    
    skDimPromotor: {
      sql: `sk_dim_promotor`,
      type: `number`,
      primaryKey: true
    },
    usuario: {
      sql: `descricao`,
      type: `string`
    },      
    nomePromotor: {
      sql: `nomepromotor`,
      type: `string`
    },  
  },
  
  dataSource: `default`
});
