import React from 'react'
import { RouterApp } from './router/RouterApp'
import {Provider} from 'react-redux'
import { store } from './store/store'

export const ScheduleApp = () => {
  return (
    <Provider store={store}>
    <RouterApp/>
    </Provider>
  )
}
