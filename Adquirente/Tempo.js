cube(`Tempo`, {
  sql: `SELECT * FROM dimensao.tempo`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    },
   
  },
  
  dimensions: {
    skData: {
      sql: `sk_date`,
      type: `number`,
      primaryKey: true
    },

    diaData: {
      sql: `day_date`,
      type: `time`
    },
    nomeDia: {
      sql: `day_name`,
      type: `string`
    },
    
    numeroDoAno: {
      sql: `year_sort_number`,
      type: `string`
    },
    
    dataCompleta: {
      sql: `day_desc`,
      type: `string`
    },
    
    numeroDiaDaSemana: {
      sql: `day_of_week_sort_name`,
      type: `string`
    },
    
    numeroMes: {
      sql: `month_number`,
      type: `number`
    },
    
    nomeMes: {
      sql: `month_name`,
      type: `string`,
      shown: true
    },
    
    nomeDaSemanaDoMes: {
      sql: `week_of_month_name`,
      type: `string`
    },
    
    nomeTrimestreDoAno: {
      sql: `year_quarter_name`,
      type: `string`
    },
    
    nomeSemana: {
      sql: `week_name`,
      type: `string`
    },
    
    nomeTrimestre: {
      sql: `quarter_name`,
      type: `string`
    },
    
    codigoSemana: {
      sql: `weekend_ind`,
      type: `string`
    }

  },
  
  dataSource: `default`
});
