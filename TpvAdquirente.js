cube(`TpvAdquirente`, {
  sql: `SELECT * FROM public.fat_adquirente`,
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    main: {
      measures: [
        TpvAdquirente.valorTpv
      ],
      dimensions: [
        Adquirente.nomeAdquirente,
        ClienteCnpjCpf.cnpjcpf,
        DataTpv.ano,
        DataTpv.nomeMes
      ]
    }
  },
  joins: {
    Adquirente: {
      relationship: `belongsTo`,
      sql: `${Adquirente}.sk_administradora_id = ${TpvAdquirente.skAdministradoraId}`
    },
    ClienteCnpjCpf: {
      relationship: `belongsTo`,
      sql: `${ClienteCnpjCpf}.sk_dim_cliente_cnpjcpf = ${TpvAdquirente.skDimClienteCnpjCpf}`
    },
    DataTpv: {
      relationship: `belongsTo`,
      sql: `${DataTpv}.sk_dim_data_id = ${TpvAdquirente.skDimDataTransacao}`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    valorTpv: {
      sql: `valorbruto`,
      type: `sum`,
      drillMembers: []
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
    }
  },
  dataSource: `default`
});