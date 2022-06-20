cube(`BaseProspeccao`, {
  sql: `SELECT * FROM delivery.base_prospeccao`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [cidadeid, subdistritoid, cidade]
    }
  },
  
  dimensions: {
    crawler: {
      sql: `crawler`,
      type: `string`
    },
    
    cnpjCompleto: {
      sql: `cnpj_completo`,
      type: `string`
    },
    
    cidadeid: {
      sql: `cidadeid`,
      type: `string`
    },
    
    nome: {
      sql: `nome`,
      type: `string`
    },
    
    subdistritoid: {
      sql: `subdistritoid`,
      type: `string`
    },
    
    logradouro: {
      sql: `logradouro`,
      type: `string`
    },
    
    razaoSocial: {
      sql: `razao_social`,
      type: `string`
    },
    
    bairroEstabelecimentos: {
      sql: `bairro_estabelecimentos`,
      type: `string`
    },
    
    perfilIfood: {
      sql: `perfil_ifood`,
      type: `string`
    },
    
    tipoLogradouro: {
      sql: `tipo_logradouro`,
      type: `string`
    },
    
    temIfood: {
      sql: `tem_ifood`,
      type: `string`
    },
    
    cidade: {
      sql: `cidade`,
      type: `string`
    },
    
    nomeFantasiaEstabelecimentos: {
      sql: `nome_fantasia_estabelecimentos`,
      type: `string`
    },
    
    numero: {
      sql: `numero`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
