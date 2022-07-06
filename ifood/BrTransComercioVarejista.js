cube(`BrTransComercioVarejista`, {
  sql: `SELECT * FROM receita_federal_atual.br_trans_comercio_varejista`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    ComercioVarejista: {
      measures: [BrTransComercioVarejista.count],
      dimensions: [BrTransComercioVarejista.cnpjCompleto],
      refreshKey: {
        every: `1 minute`
      }
    }
  },
  joins: {
    BrTransComercioVarejistaEnderecoIfood: {
      relationship: `belongsTo`,
      sql: `${BrTransComercioVarejista.cnpjCompleto} = ${BrTransComercioVarejistaEnderecoIfood.cnpj}`
    },
    BrTransComercioVarejistaSubdistritoIfood: {
      relationship: `belongsTo`,
      sql: `${BrTransComercioVarejista.cnpjCompleto} = ${BrTransComercioVarejistaSubdistritoIfood.cnpj}`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [cnpjCompleto]
    }
  },
  dimensions: {
    cnpjCompleto: {
      sql: `cnpj_completo`,
      type: `string`,
      primaryKey: true,
      shown: true
    },
    nomeFantasia: {
      sql: `nome_fantasia_estabelecimentos`,
      type: `string`
    },
    telefone2Estabelecimentos: {
      sql: `telefone_2_estabelecimentos`,
      type: `string`,
      title: `Telefone 2 Estabelecimentos`
    },
    municipios: {
      sql: `descricao_municipios`,
      type: `string`
    },
    telefone1Estabelecimentos: {
      sql: `telefone_1_estabelecimentos`,
      type: `string`,
      title: `Telefone 1 Estabelecimentos`
    },
    ddd1Estabelecimentos: {
      sql: `ddd_1_estabelecimentos`,
      type: `string`,
      title: `Ddd 1 Estabelecimentos`
    },
    cepEstabelecimentos: {
      sql: `cep_estabelecimentos`,
      type: `string`
    },
    complementoEstabelecimentos: {
      sql: `complemento_estabelecimentos`,
      type: `string`
    },
    bairroEstabelecimentos: {
      sql: `bairro_estabelecimentos`,
      type: `string`
    },
    ddd2Estabelecimentos: {
      sql: `ddd_2_estabelecimentos`,
      type: `string`,
      title: `Ddd 2 Estabelecimentos`
    },
    tipoLogradouroEstabelecimentos: {
      sql: `tipo_logradouro_estabelecimentos`,
      type: `string`
    },
    numeroEstabelecimentos: {
      sql: `numero_estabelecimentos`,
      type: `string`
    },
    logradouroEstabelecimentos: {
      sql: `logradouro_estabelecimentos`,
      type: `string`
    },
    ufEstabelecimentos: {
      sql: `uf_estabelecimentos`,
      type: `string`
    }
  },
  dataSource: `default`
});