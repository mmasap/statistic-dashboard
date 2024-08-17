import type { Data } from '@/types/response'

const MAX_DATA_LENGTH = 20
const BASE_URL = 'https://dashboard.e-stat.go.jp/api/1.0/Json'

type GetDataParams = {
  lang?: 'JP' | 'EN'
  indicatorCode: string
  regionCode: string
}

export async function getData(params: GetDataParams) {
  const searchParams = createChartDataSearchParams(params)
  const url = `${BASE_URL}/getData?${searchParams}`

  try {
    const response = await fetch(url)
    const json = (await response.json()) as Data
    const dataObj = json.GET_STATS.STATISTICAL_DATA.DATA_INF.DATA_OBJ
    const slicedDataObj = dataObj.slice(-MAX_DATA_LENGTH, dataObj.length)
    return {
      datasets: [
        {
          data: slicedDataObj.map((obj) => +obj.VALUE.$),
        },
      ],
      labels: slicedDataObj.map((obj) =>
        obj.VALUE['@time'].replace('CY00', ''),
      ),
    }
  } catch (e) {
    console.log(e)
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
