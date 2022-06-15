cube(`DimCliente`, {
  sql: `SELECT * FROM delivery.dim_cliente`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [clienteId, dateFrom, dateTo]
    }
  },
  
  dimensions: {
    clienteId: {
      sql: `cliente_id`,
      type: `string`
    },
    
    numeroDocumentoCliente: {
      sql: `numero_documento_cliente`,
      type: `string`
    },
    
    nomeCliente: {
      sql: `nome_cliente`,
      type: `string`
    },
    
    numeroTelefoneCliente: {
      sql: `numero_telefone_cliente`,
      type: `string`
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`
    },
    skDimCliente: {
      sql: `sk_dim_cliente`,
      type: `number`,
      primaryKey: true
    }
  },
 
  
  dataSource: `default`
});
