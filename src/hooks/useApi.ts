import type { Data } from '@/types/response'
import type { ChartData } from 'chart.js'
import { ref } from 'vue'

const BASE_URL = 'https://dashboard.e-stat.go.jp/api/1.0/Json'

type GetDataParams = {
  lang?: 'JP' | 'EN'
  indicatorCode: string
  regionCode: string
}

export default function useApi() {
  const loading = ref(false)

  async function getChartData({
    maxDataCount,
    ...getDataParams
  }: GetDataParams & { maxDataCount?: number }): Promise<
    ChartData<'bar'> | ChartData<'line'> | undefined
  > {
    loading.value = true
    const response = await getData(getDataParams)
    if (!response) return

    let dataObj = response.GET_STATS.STATISTICAL_DATA.DATA_INF.DATA_OBJ
    if (maxDataCount) {
      dataObj = dataObj.slice(-maxDataCount, dataObj.length)
    }
    return {
      datasets: [
        {
          data: dataObj.map((obj) => +obj.VALUE.$),
        },
      ],
      labels: dataObj.map((obj) => obj.VALUE['@time'].replace('CY00', '')),
    }
  }

  async function getData(params: GetDataParams) {
    try {
      loading.value = true
      const searchParams = createChartDataSearchParams(params)
      const url = `${BASE_URL}/getData?${searchParams}`
      const response = await fetch(url)
      return (await response.json()) as Data
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return {
    getData,
    getChartData,
    loading,
  }
}

function createChartDataSearchParams(params: GetDataParams) {
  const searchParams = new URLSearchParams({
    Lang: params.lang ?? 'JP',
    IndicatorCode: params.indicatorCode,
    RegionCode: params.regionCode,
    Cycle: '3', // 暦年
  })
  return searchParams
}
