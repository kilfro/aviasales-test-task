import Checkbox from '../../src/components/Checkbox'
import FilterOption from '../../src/components/FilterOption'
import React from 'react'

describe(FilterOption, () => {
  test('must pass some props to Checkbox component', () => {
    const props = {
      id: 'id',
      checked: true,
      onChange: jest.fn(),
      value: 'value',
    }
    const component = shallow(<FilterOption {...props} />)
    const checkbox = component.find(Checkbox).get(0)

    expect(checkbox.props.id).toBe(props.id)
    expect(checkbox.props.checked).toBe(props.checked)
    expect(checkbox.props.onChange).toBe(props.onChange)
  })
})
