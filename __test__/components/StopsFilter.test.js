import FilterOption from '../../src/components/FilterOption'
import React from 'react'
import { StopsFilter } from '../../src/components/StopsFilter'

describe(StopsFilter, () => {
  test('must be rendered correctly', () => {
    const component = shallow(
      <StopsFilter filterBy={[]} setFilterBy={() => {}} />
    )

    expect(component).toMatchSnapshot()
  })

  test('must select all options and can el selection', () => {
    const setFilterHandler = jest.fn()
    const component = shallow(
      <StopsFilter filterBy={[]} setFilterBy={setFilterHandler} />
    )

    component.find(FilterOption).at(0).simulate('change')
    expect(setFilterHandler).toHaveBeenCalledWith([0, 1, 2, 3])

    component.find(FilterOption).at(0).simulate('change')
    expect(setFilterHandler).toHaveBeenCalledWith([])
  })

  test('must select one option', () => {
    const setFilterHandler = jest.fn()
    const component = shallow(
      <StopsFilter filterBy={[1]} setFilterBy={setFilterHandler} />
    )
    component.find(FilterOption).at(3).simulate('change')
    expect(setFilterHandler).toHaveBeenCalledWith([1, 2])
  })

  test('must set chooseAll state to "true"', () => {
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState])
    const component = shallow(
      <StopsFilter filterBy={[0, 1, 2]} setFilterBy={() => {}} />
    )

    component.find(FilterOption).last().simulate('change')
    expect(setState).toHaveBeenCalledWith(true)
  })

  test('must set chooseAll state to "false"', () => {
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(() => [true, setState])
    const component = shallow(
      <StopsFilter filterBy={[0, 1, 2, 3]} setFilterBy={() => {}} />
    )

    component.find(FilterOption).last().simulate('change')
    expect(setState).toHaveBeenCalledWith(false)
  })
})
