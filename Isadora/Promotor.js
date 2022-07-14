cube(`Promotor`, {
    sql: `SELECT * FROM public.dim_promotor`,
    
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
        skPromotor: {
            sql: `sk_dim_promotor`,
            type: `number`,
            primaryKey: true
        },
  
        login: {
            sql: `descricao`,
            type: `string`
        },

        nomePromotor: {
            sql: `nomepromotor`,
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