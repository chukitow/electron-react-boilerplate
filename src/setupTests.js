import { configure } from 'enzyme';
import 'config/icons';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
