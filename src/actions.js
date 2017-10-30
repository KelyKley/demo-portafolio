import store from './store';

export function selectSectionAction(label) {
   console.log('label', label);
   store.setState({
      selectedSection: label
   });
}
