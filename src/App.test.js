import {add,isString} from './add'


test('add', ()=>{
    const value = add(1,2)
    expect(value).toBe(3)
})

test('isStr',()=>{
    const isStr= isString('3')
    const notStr = isString(3) 
    expect(notStr).toBe(false)
    expect(isStr).toBe(true)
})

