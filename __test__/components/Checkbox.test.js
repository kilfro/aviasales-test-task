import Checkbox from '../../src/components/Checkbox'
import React from 'react'

const getTickDisplayStyle = (component) =>
  component.find('div').get(1).props.style.display

describe(Checkbox, () => {
  test('must call onChange function', () => {
    const changeHandler = jest.fn()
    const component = shallow(
      <Checkbox onChange={changeHandler} checked={true} />
    )
    component.find('input').at(0).simulate('change')

    expect(changeHandler).toHaveBeenCalledTimes(1)
  })

  test('must change tick`s style', () => {
    const component = shallow(<Checkbox checked={true} onChange={() => {}} />)

    expect(getTickDisplayStyle(component)).toBe('block')

    component.setProps({ checked: false })
    expect(getTickDisplayStyle(component)).toBe('none')
  })
})
