cube(`TpvAdquirente`, {
  sql: `SELECT * FROM public.fat_adquirente`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    main: {
      measures: [TpvAdquirente.valorBruto],
      dimensions: [Adquirente.nome, ClienteCnpjCpf.cnpjCpf, Data.numeroAno, Data.numeroMes]
    }
  },
  joins: {
    Adquirentes: {
      sql: `${Adquirentes}.sk_administradora_id = ${TpvAdquirente}.sk_administradora_id`,
      relationship: `hasMany`
    },
    ClienteCnpjCpf: {
      sql: `${ClienteCnpjCpf}.sk_dim_cliente_cnpjcpf = ${TpvAdquirente}.sk_dim_cliente_cnpjcpf`,
      relationship: `hasMany`
    },
    Data: {
      sql: `${Data}.sk_dim_data_id = ${TpvAdquirente}.sk_dim_data_transacao`,
      relationship: `hasMany`
    }
  },
  measures: {
    quantidadeRegistros: {
      type: `count`,
      drillMembers: [skAdministradoraId, skDimDataTransacao, skDimClienteCnpjCpf]
    },
    valorLiquido: {
      sql: `valorliquido`,
      type: `sum`,
      drillMembers: [skAdministradoraId, skDimDataTransacao, skDimClienteCnpjCpf]
    },
    valorBruto: {
      sql: `valorbruto`,
      type: `sum`,
      drillMembers: [skAdministradoraId, skDimDataTransacao, skDimClienteCnpjCpf]
    }
  },
  dimensions: {
    skFatAdquirenteId: {
      sql: `sk_fat_adquirente_id`,
      type: `number`,
      primaryKey: true
    },
    skAdministradoraId: {
      sql: `sk_administradora_id`,
      type: `number`,
      shown: false
    },
    skDimDataTransacao: {
      sql: `sk_dim_data_transacao`,
      type: `number`,
      shown: false
    },
    skDimClienteCnpjCpf: {
      sql: `sk_dim_cliente_cnpjcpf`,
      type: `number`,
      shown: false
    }
  },
  dataSource: `default`
});
