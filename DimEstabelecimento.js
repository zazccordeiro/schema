cube(`DimEstabelecimento`, {
  sql: `SELECT * FROM delivery.dim_estabelecimento`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [merchantId, calStaSolicitacaoTokenAcessoId, calCadastroLojaId, calCorporateName, calName, dateFrom, dateTo]
    }
  },
  
  dimensions: {
    merchantId: {
      sql: `merchant_id`,
      type: `string`
    },
    
    calStaSolicitacaoTokenAcessoId: {
      sql: `cal_sta_solicitacao_token_acesso_id`,
      type: `string`
    },
    
    calCadastroLojaId: {
      sql: `cal_cadastro_loja_id`,
      type: `string`
    },
    
    calStatus: {
      sql: `cal_status`,
      type: `string`
    },
    
    calCorporateName: {
      sql: `cal_corporate_name`,
      type: `string`
    },
    
    calName: {
      sql: `cal_name`,
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
    
    calDataHoraInsercao: {
      sql: `cal_data_hora_insercao`,
      type: `time`
    },
    skDimEstabelecimento: {
      sql: `sk_dim_estabelecimento`,
      type: `number`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
