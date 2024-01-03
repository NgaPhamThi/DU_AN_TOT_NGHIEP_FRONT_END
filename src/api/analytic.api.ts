import { IAnalyticStatusYear, IAnalyticYear, IData, IFilter, IFilterOrder } from '../interfaces'

import instance from './instance'

export const analyticApi = {
  /* filter order */
  filterOrder: async (body: IFilter) => {
    return instance.post<IFilterOrder>('/filter-order', body)
  },
  /* analytic year */
  analyticYear: async () => {
    return instance.get<IAnalyticYear[]>(`/analytic-year`)
  },
  /* analytic year */
  analyticStatusYear: async () => {
    return instance.get<IAnalyticStatusYear[]>(`/analytic-status-year`)
  },

  /* analytic pending */
  analyticPending: async () => {
    return instance.get<IData>(`/analytic-order-peding`)
  },

  /* analytic proccessing */
  analyticProccessing: async () => {
    return instance.get<IData>(`/analytic-order-processing`)
  },

  /* analytic delivery */
  analyticDelivery: async () => {
    return instance.get<IData>(`/analytic-order-delivery`)
  },

  /* analytic complete */
  analyticComplete: async () => {
    return instance.get<IData>(`/analytic-order-complete`)
  },

  /* analytic cancel */
  analyticCancel: async () => {
    return instance.get<IData>(`/analytic-order-cancelled`)
  }
}
