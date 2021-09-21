import {createSelectorCreator, defaultMemoize} from 'reselect';
import { isEqual } from 'lodash';

const useCreateSelector = () => {
    return createSelectorCreator(defaultMemoize, isEqual);
}

export default useCreateSelector;