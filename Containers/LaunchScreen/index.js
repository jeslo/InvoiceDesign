/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native'
import {styles} from './styles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
        <View style={styles.bluebox}>
          <View style={styles.bluboxCloseMark}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              ✕
            </Text>
            <View style={styles.bluboxOtherMarks}>
              <Image
                source={require('./Images/3dots.jpg')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={require('./Images/editwhte.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          <View style={styles.LateBox}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FF6633',
                marginLeft: 10,
              }}>
              •
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#FFffff',
                alignContent: 'center',
                marginLeft: 5,
              }}>
              LATE
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 50,
                marginTop: 10,
                color: '#ffffff',
                fontWeight: 'bold',
              }}>
              8 Design Co.
            </Text>
          </View>
          <View style={styles.DesignCo8}>
            <Text
              style={{
                fontSize: 20,
                marginTop: 10,
                color: '#9DBFF2',
                fontWeight: 'bold',
              }}>
              IV BY 0899 K9
            </Text>
          </View>
        </View>
        <View style={styles.detailsCard}>
          <View style={styles.invoiceFor}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                color: '#9DBFF2',
                fontWeight: 'bold',
              }}>
              INVOICE FOR
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: 10,
                fontWeight: '500',
              }}>
              Karl Johns
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
              }}>
              43 Streets Lane, San Francisco, California, UnitedStates
            </Text>
          </View>
          <View style={styles.amountDue}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                color: '#9DBFF2',
                fontWeight: 'bold',
              }}>
              AMOUNT DUE
            </Text>
            <Text
              style={{
                fontSize: 30,
                marginTop: 10,
                color: '#000000',
                fontWeight: 'bold',
              }}>
              $ 1880
            </Text>
            <View style={styles.dateBox}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#FF6633',
                  marginLeft: 10,
                }}>
                •
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#9DBFF2',
                  alignContent: 'center',
                  marginLeft: 5,
                }}>
                APR 8, 2020
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.taskDetails}>
          <View style={styles.task}>

          </View>
          <View style={styles.total}>

          </View>
        </View>
        </View>
        
      </View>
    )
  }
}
