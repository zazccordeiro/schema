cube(`DimStatus`, {
  sql: `SELECT * FROM delivery.dim_status`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
 
  },
  
  dimensions: {
    statusIfood: {
      sql: `status`,
      type: 'string'
    },
   
    skDimStatus: {
      sql: `sk_dim_status`,
      type: `number`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
