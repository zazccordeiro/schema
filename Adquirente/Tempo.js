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
    dayDate: {
      sql: `day_date`,
      type: `time`
    },
    skData: {
      sql: `sk_date`,
      type: `number`,
      primaryKey: true
    },
    dayName: {
      sql: `day_name`,
      type: `string`
    },
    
    yearSortNumber: {
      sql: `year_sort_number`,
      type: `string`
    },
    
    dayDesc: {
      sql: `day_desc`,
      type: `string`
    },
    
    dayOfWeekSortName: {
      sql: `day_of_week_sort_name`,
      type: `string`
    },
    
    nomeMes: {
      sql: `month_name`,
      type: `string`,
      shown: true
    },
    
    weekOfMonthName: {
      sql: `week_of_month_name`,
      type: `string`
    },
    
    yearQuarterName: {
      sql: `year_quarter_name`,
      type: `string`
    },
    
    weekName: {
      sql: `week_name`,
      type: `string`
    },
    
    quarterName: {
      sql: `quarter_name`,
      type: `string`
    },
    
    weekendInd: {
      sql: `weekend_ind`,
      type: `string`
    }

  },
  
  dataSource: `default`
});
