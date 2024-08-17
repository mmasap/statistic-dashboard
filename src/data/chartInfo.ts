export type ChartInfo = {
  label: string
  unit: string
  chartType: 'bar' | 'line'
  indicatorCode: string
}

export const chartInfoList: ChartInfo[] = [
  {
    label: '総人口',
    chartType: 'bar',
    unit: '人',
    indicatorCode: '0201010000000010000',
  },
  {
    label: '出生数',
    chartType: 'bar',
    unit: '人',
    indicatorCode: '0203010000000010000',
  },
  {
    label: '死亡数',
    chartType: 'bar',
    unit: '人',
    indicatorCode: '0203020000000010000',
  },
  {
    label: '婚姻件数',
    chartType: 'bar',
    unit: '件',
    indicatorCode: '0203070000000010010',
  },
  {
    label: '離婚件数',
    chartType: 'bar',
    unit: '件',
    indicatorCode: '0203080100000010010',
  },
] as const
