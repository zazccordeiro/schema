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
      type: `count`,
      drillMembers: [dayName, dayOfWeekSortName, monthName, weekOfMonthName, yearQuarterName, weekName, quarterName, dayDate]
    },
    
    dayOfWeekNumber: {
      sql: `day_of_week_number`,
      type: `sum`
    },
    
    weekOfYearNumber: {
      sql: `week_of_year_number`,
      type: `sum`
    },
    
    quarterNumber: {
      sql: `quarter_number`,
      type: `sum`
    },
    
    dayOfYearNumber: {
      sql: `day_of_year_number`,
      type: `sum`
    },
    
    monthNumber: {
      sql: `month_number`,
      type: `sum`
    },
    
    daysInMonthQty: {
      sql: `days_in_month_qty`,
      type: `sum`
    },
    
    yearNumber: {
      sql: `year_number`,
      type: `sum`
    },
    
    dayOfMonthNumber: {
      sql: `day_of_month_number`,
      type: `sum`
    },
    
    weekOfMonthNumber: {
      sql: `week_of_month_number`,
      type: `sum`
    }
  },
  
  dimensions: {
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
    
    monthName: {
      sql: `month_name`,
      type: `string`
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
    },
    
    dayDate: {
      sql: `day_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
