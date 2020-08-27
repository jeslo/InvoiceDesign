import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8DCE5',
  },
  bluebox: {
    padding: 20,
    backgroundColor: '#3771EE',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 50,
  },
  bluboxCloseMark: {
    flexDirection: 'row',
  },
  bluboxOtherMarks: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  LateBox: {
    flexDirection: 'row',
    backgroundColor: '#153BC2',
    marginTop: 10,
    width: 80,
    borderRadius: 20,
    alignItems: 'center',
  },
  DesignCo8: {
    marginBottom: 100,
  },
  detailsCard: {
    
    flexDirection: 'row',
    width: 350,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    position: 'absolute',
    top: 280,
    left: 30,
    padding: 10,
  },
  invoiceFor: {
    flex: 1,
    
  },
  amountDue: {
    
    paddingLeft: 5,
    width: 150,
    borderRadius: 10,
    backgroundColor:'#D8DCE5',
    
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskDetails: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
    position: 'relative',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  task: {
    flexDirection: 'column'
  },
  total: {
    flexDirection: 'column'
  },
})
