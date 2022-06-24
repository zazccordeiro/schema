cube(`ClienteCnpjCpf`, {
  sql: `SELECT * FROM public.dim_cliente_cnpjcpf`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
  },
  
  measures: {
    quantidadeRegistros: {
      type: `count`,
      drillMembers: [cnpjCpf],
      shown: true,
    }
  },
  
  dimensions: {
    skDimClienteCnpjCpf: {
      sql: `sk_dim_cliente_cnpjcpf`,
      type: `number`,
      primaryKey: true,
    },

    cnpjCpf: {
      sql: `cnpjcpf`,
      type: `string`,
      shown: true,
    },
    
    dateFrom: {
      sql: `date_from`,
      type: `time`,
      shown: false,
    },
    
    dateTo: {
      sql: `date_to`,
      type: `time`,
      shown: false,
    }
  },
  
  dataSource: `default`
});
