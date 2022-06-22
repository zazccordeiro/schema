cube(`tpvAdquirente`, {
  sql: `SELECT * FROM public.fat_adquirente`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    main: {
      timeDimension: mesTpv.data,
      granularity: 'day',
    },
  },
  
  joins: {
    adquirente: {
      relationship: `belongsTo`,
      sql: `${tpvAdquirente}.sk_administradora_id = ${adquirente.skAdministradoraId}`,
    },
    mesTpv: {
      relationship: `belongsTo`,
      sql: `${tpvAdquirente}.sk_dim_data_transacao = ${mesTpv.skDimDataId}`,
    },
  },
  
  measures: {
    contador: {
      type: `count`,
    },
    valorTpv: {
      sql: `valorbruto`,
      type: `sum`,
    }
  },
  
  dimensions: {
    sk_fat_adquirente_id: {
      sql: `sk_fat_adquirente_id`,
      type: `number`,
      primaryKey: true
    },
    skAdministradoraId: {
      sql: `sk_administradora_id`,
      type: `number`
    },
    skDimClienteCnpjCpf: {
      sql: `sk_dim_cliente_cnpjcpf`,
      type: `number`
    },
    skDimDataTransacao: {
      sql: `sk_dim_data_transacao`,
      type: `number`
    },
  },
  // segments: {
  //   segentoAdquirente: {
  //     sql: `${tpvAdquirente}.sk_administradora_id in (1, 2, 3, 4)`,
  //   },
  //},
  
  dataSource: `default`
});
