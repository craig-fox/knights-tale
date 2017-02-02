import expect from 'expect'
import myApp from '../app/app'

describe('Reducers', function(){
    const initState = {
        appState: []
    }

    it('should handle initial state', function(){
        expect(myApp()).toEqual(initState)
    })

})