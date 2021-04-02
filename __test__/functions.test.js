import {
  getDurationString,
  getFlightTimes,
  getStopsQuantityString,
} from '../src/functions'

test('Function getStopsQuantityString must return correct strings', () => {
  expect(getStopsQuantityString(0)).toBe('')
  expect(getStopsQuantityString(1)).toBe('1 пересадка')
  expect(getStopsQuantityString(2)).toBe('2 пересадки')
  expect(getStopsQuantityString(4)).toBe('4 пересадки')
  expect(getStopsQuantityString(5)).toBe('5 пересадок')
  expect(getStopsQuantityString(9)).toBe('9 пересадок')
})

test('Function getDurationString must return correct strings', () => {
  const timeA = 59,
    timeB = 61

  expect(getDurationString(timeA)).toBe('0ч 59м')
  expect(getDurationString(timeB)).toBe('1ч 01м')
})

test('Function getFlightTimes must return correct strings', () => {
  const depDate = new Date(2020, 0, 1, 4, 0)
  const durA = 615,
    durB = 1350

  expect(getFlightTimes(depDate, durA)).toBe('04:00 - 14:15')
  expect(getFlightTimes(depDate, durB)).toBe('04:00 - 02:30')
})
