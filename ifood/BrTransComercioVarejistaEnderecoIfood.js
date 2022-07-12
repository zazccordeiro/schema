cube(`BrTransComercioVarejistaEnderecoIfood`, {
  sql: `SELECT * FROM receita_federal_atual.br_trans_comercio_varejista_endereco_ifood`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [cidade_ifood, cnpj]
    }
  },
  
  dimensions: {
    cep_ifood: {
      sql: `cep`,
      type: `string`
    },
    cnpj: {
      sql: `cnpj`,
      type: `string`,
      primaryKey: true
    },
    numero_ifood: {
      sql: `numero`,
      type: `string`
    },
    
    cidade_ifood: {
      sql: `cidade`,
      type: `string`
    },     
    longitude_ifood: {
      sql: `longitude`,
      type: `string`
    },
    
    logradouro_ifood: {
      sql: `logradouro`,
      type: `string`
    },
    
    idIfood: {
      sql: `id_ifood`,
      type: `string`
    },
    
    uf_ifood: {
      sql: `uf`,
      type: `string`
    },
    
    latitude_ifood: {
      sql: `latitude`,
      type: `string`
    },
    
    nome_cliente: {
      sql: `nome_cliente`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
