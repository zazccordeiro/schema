cube(`TipoAjuste`, {
  sql: `SELECT * FROM dimensao.tipo_ajuste`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dateTo, dateFrom]
    }
  },
  
  dimensions: {
    skTipoAjuste: {
      sql: `sk_tipo_ajuste`,
      type: `number`,
      primaryKey: true
    },
    nomeFaixaAjuste: {
      sql: `descricao`,
      type: `string`
    },
    
    codigoTipoAjuste: {
      sql: `codigo`,
      type: `string`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
