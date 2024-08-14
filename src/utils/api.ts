import type { Data } from '@/types/response'

const BASE_URL = 'https://dashboard.e-stat.go.jp/api/1.0/Json'

type GetDataParams = {
  Lang?: 'JP' | 'EN'
  IndicatorCode: string
  RegionCode: string
  Cycle?: '3'
}

export async function getChartData(params: GetDataParams) {
  const searchParams = new URLSearchParams(params)
  const url = `${BASE_URL}/getData?${searchParams.toString()}`

  try {
    const response = await fetch(url)
    const json = (await response.json()) as Data
    console.log(json)
    return {
      datasets: [
        {
          data: json.GET_STATS.STATISTICAL_DATA.DATA_INF.DATA_OBJ.map(
            (obj) => +obj.VALUE.$,
          ),
        },
      ],
      labels: json.GET_STATS.STATISTICAL_DATA.DATA_INF.DATA_OBJ.map(
        (obj) => obj.VALUE['@time'],
      ),
    }
  } catch (e) {
    console.log(e)
  }
}
