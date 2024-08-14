export default [
  {
    label: '林野面積',
    chartType: 'line',
    indicatorCode: '0101010200000010020',
  },
  {
    label: '総人口',
    chartType: 'bar',
    indicatorCode: '0201010000000010000',
  },
  {
    label: '食料自給率',
    chartType: 'line',
    indicatorCode: '0401090000000020010',
  },
] as const satisfies {
  label: string
  chartType: 'bar' | 'line'
  indicatorCode: string
}[]
