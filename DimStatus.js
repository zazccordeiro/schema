cube(`DimStatus`, {
  sql: `SELECT * FROM delivery.dim_status`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dateFrom, dateTo,status_ifood]
    }
  },
  
  dimensions: {
    status_ifood: {
      sql: `status`,
      type: 'string'
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    },
    skDimStatus: {
      sql: `sk_dim_status`,
      type: `number`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
