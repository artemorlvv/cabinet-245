import scheduleMock from '../utils/scheduleMock.json'

export const getSchedule = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(scheduleMock.data) }, 1000)
  })
}