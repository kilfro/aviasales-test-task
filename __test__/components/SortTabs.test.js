import React from 'react'
import { SortTabs } from '../../src/components/SortTabs.jsx'

const getTabs = (component) => {
  const tabs = component.find('.tabs-container div')
  return [tabs.get(0), tabs.get(1)]
}
describe(SortTabs, () => {
  test('must call setOrderBy function', () => {
    const mockSetOrderBy = jest.fn()
    const component = shallow(
      <SortTabs orderBy='duration' setOrderBy={mockSetOrderBy} />
    )
    component.find('.tabs-container div').at(0).simulate('click')

    expect(mockSetOrderBy).toHaveBeenCalledTimes(1)
    expect(mockSetOrderBy).toHaveBeenCalledWith('price')
  })

  test('must change style', () => {
    const component = shallow(<SortTabs orderBy='price' />)
    let [priceTab, durationTab] = getTabs(component)

    expect(priceTab.props.style.background).toBe('#2196F3')
    expect(durationTab.props.style).toMatchObject({})

    component.setProps({ orderBy: 'duration' });
    [priceTab, durationTab] = getTabs(component)

    expect(priceTab.props.style).toMatchObject({})
    expect(durationTab.props.style.background).toBe('#2196F3')
  })
})
