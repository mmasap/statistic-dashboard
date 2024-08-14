export interface Data {
  GET_STATS: GetStats
}

export interface GetStats {
  RESULT: Result
  PARAMETER: Parameter
  STATISTICAL_DATA: StatisticalData
}

export interface Parameter {
  lang: string
  indicatorCode: string[]
  regionCode: string[]
}

export interface Result {
  status: string
  errorMsg: string
  date: string
}

export interface StatisticalData {
  RESULT_INF: ResultInf
  TABLE_INF: TableInf
  DATA_INF: DataInf
}

export interface DataInf {
  DATA_OBJ: DataObj[]
}

export interface DataObj {
  VALUE: Value
}

export interface Value {
  '@indicator': string
  '@unit': string
  '@stat': string
  '@regionCode': string
  '@time': string
  '@cycle': string
  '@regionRank': string
  '@isSeasonal': string
  '@isProvisional': string
  $: string
}

export interface ResultInf {
  TOTAL_NUMBER: string
}

export interface TableInf {
  STAT_NAME: StatName[]
}

export interface StatName {
  '@code': string
  $: string
}
