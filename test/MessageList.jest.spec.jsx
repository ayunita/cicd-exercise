import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'
import MessageList from '../client/components/MessageView/MessageList'

Enzyme.configure({adapter: new Adapter()});

const messages = ["hello", "world", "everything is awesome"]
describe('<MessageList />', () => {
    it('should render 3 bullet points', async () => {    
      const component = shallow(<MessageList messages={messages} />)
      expect(component.find('ul').children().length).toEqual(3);
    })
})