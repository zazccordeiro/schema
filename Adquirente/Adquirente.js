cube(`Adquirente`, {
  sql: `SELECT * FROM dimensao.adquirente`,
  
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
    skAdquirente: {
      sql: `sk_adquirente`,
      type: `number`,
      primaryKey: true
    },

    nome: {
      sql: `nome`,
      type: `string`
    },

    codigoAdquirente: {
      sql: `adquirente_id`,
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
