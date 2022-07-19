cube(`Regiao`, {
    sql: `SELECT * FROM public.dim_regional`,
    
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
        skRegional: {
            sql: `sk_dim_regional`,
            type: `number`,
            primaryKey: true
      },
  
        nomeRegional: {
            sql: `nome`,
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
  